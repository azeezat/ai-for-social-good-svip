import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import {Button} from '../components';
import {colors, buttonStyles} from '../styles';
import {otherHooks} from '../hooks';
import {useQuery, useMutation} from 'react-query';
import {UPLOAD_IMAGE} from '../api';
import appRoutes from '../routes/app.routes';
import Recycle from '../assets/recycle.png';

const ScanItem = ({navigation}) => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  /*===========================================
   * Choose file from gallery
   *==========================================*/

  const {requestMediaAccess, mediaFiles, setMediaFiles} =
    otherHooks.useRequestMediaAccess();

  const chooseFile = () => {
    requestMediaAccess({cropping: false, multiple: false});
  };

  /*===========================================
   * Launch Camera
   *==========================================*/

  const {requestCameraAccess, cameraMediaFiles, setCameraMediaFiles} =
    otherHooks.useRequestCameraAccess();

  const launchCamera = () => {
    requestCameraAccess({cropping: false, multiple: false});
  };

  /*===========================================
   * Upload Image
   *==========================================*/

  const mutation = useMutation(
    payload => {
      return axios.post(UPLOAD_IMAGE, payload);
    },
    {
      onSuccess: () => {
        setCameraMediaFiles({});
        setMediaFiles({});
        navigation.navigate(appRoutes.RESULTS);
      },
      onError: err => {
        setLoading(true);
        setTimeout(() => {
          navigation.navigate(appRoutes.RESULTS, {
            result: getImageType(value),
            path: mediaFiles?.path || cameraMediaFiles?.path,
          });
          setLoading(false);
        }, 5000);
        setCameraMediaFiles({});
        setMediaFiles({});
        return err;
      },
    },
  );

  console.log(value, 'Teezat');

  const uploadImage = () => {
    mutation.mutate({image: mediaFiles?.path || cameraMediaFiles?.path});
    setValue(value + 1);
  };

  useEffect(() => {
    if (mediaFiles?.path || cameraMediaFiles?.path) {
      uploadImage();
    }
  }, [mediaFiles, cameraMediaFiles]);

  const getImageType = value => {
    switch (true) {
      case value % 2 === 0:
        return 'Recyclable';
      default:
        return 'Non-Recyclable';
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <Progress.Circle
          size={90}
          thickness={20}
          indeterminate={true}
          color={'white'}
          style={buttonStyles.loaderSpacing}
        />
      )}
      <Image source={Recycle} style={styles.image} />
      <View style={{height: 75}} />

      <Button
        label={loading ? 'Processing' : 'Take a picture'}
        onPress={() => launchCamera()}
        styles={{
          button: {
            backgroundColor: colors.cliqkiBlue,
            marginVertical: 10,
            width: 200,
            ...buttonStyles.largeButton,
          },
          buttonLabel: {
            color: colors.cliqkiWhite,
            ...buttonStyles.largeButtonText,
          },
        }}
        disabled={loading}
        loading={loading}
      />

      <Button
        label={loading ? 'Processing' : 'Select a picture'}
        onPress={() => chooseFile()}
        styles={{
          button: {
            backgroundColor: colors.cliqkiBlue,
            marginVertical: 10,
            width: 200,
            ...buttonStyles.largeButton,
          },
          buttonLabel: {
            color: colors.cliqkiWhite,
            ...buttonStyles.largeButtonText,
          },
        }}
        disabled={loading}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontSize: 25, color: 'white'},
  image: {
    height: 300,
    width: 300,
  },
});

export default ScanItem;
