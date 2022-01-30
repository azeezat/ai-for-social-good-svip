import {useCallback, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {showToastWithGravityAndOffset} from '../components';

export const otherHooks = {
  useRequestMediaAccess,
  useSelectFile,
  useRequestCameraAccess,
  useOpenCamera,
};

/**
 * @description A custom hook for requesting access to files in the phone gallery
 * @returns
 */
function useRequestMediaAccess() {
  const {selectFile, mediaFiles, setMediaFiles} = useSelectFile();

  const requestMediaAccess = useCallback(
    async options => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Cliqki Permission',
              message: 'Cliqki needs access to your gallery',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            selectFile(options);
          } else {
            //TODO: Go to settings page to change permissions for Android
            showToastWithGravityAndOffset('Storage permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        selectFile(options);
      }
    },
    [selectFile],
  );
  return {requestMediaAccess, mediaFiles, setMediaFiles};
}

/**
 * @description selecting files from the phone gallery
 * @returns
 */
function useSelectFile() {
  const [mediaFiles, setMediaFiles] = useState(null);
  const selectFile = useCallback(options => {
    ImagePicker.openPicker(options)
      .then(image => {
        setMediaFiles(image);
      })
      .catch(e =>
        //TODO: Implement ability for app to open settings page to change permissions for IOS
        console.error(e),
      );
  }, []);
  return {selectFile, mediaFiles, setMediaFiles};
}

/**
 * @description A custom hook for requesting camera access
 * @returns
 */
function useRequestCameraAccess() {
  const {openCamera, cameraMediaFiles, setCameraMediaFiles} = useOpenCamera();

  const requestCameraAccess = useCallback(
    async options => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Cliqki Permission',
              message: 'Cliqki needs access to your gallery',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            openCamera(options);
          } else {
            //TODO: Go to settings page to change permissions for Android
            showToastWithGravityAndOffset('Storage permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        openCamera(options);
      }
    },
    [openCamera],
  );
  return {requestCameraAccess, cameraMediaFiles, setCameraMediaFiles};
}

/**
 * @description using Camera
 * @returns
 */
function useOpenCamera() {
  const [cameraMediaFiles, setCameraMediaFiles] = useState(null);
  const openCamera = useCallback(options => {
    ImagePicker.openCamera(options)
      .then(image => {
        setCameraMediaFiles(image);
      })
      .catch(e =>
        //TODO: Implement ability for app to open settings page to change permissions for IOS
        console.error(e),
      );
  }, []);
  return {openCamera, cameraMediaFiles, setCameraMediaFiles};
}
