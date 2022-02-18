import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

//const cameraPermission = await Camera.getCameraPermissionStatus()

const SnapView = props => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const ref = useRef(null)

    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null);
    const [flashMode, setFlashMode] = React.useState('off')

/*
    const takePicture = async() => {
        if (!camera) return
        const photo = await camera.takePictureAsync();
        console.log(photo)
        setPreviewVisible(true);
        setCapturedImage(photo);
    }

     */

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();}, []);
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        const photo = await ref.current.takePictureAsync({ onPictureSaved: onPictureSaved })
        console.debug(photo)
    }

    const onPictureSaved = photo => {
        console.log(photo);
    }

    const CameraPreview = ({photo}: any) => {
        console.log('sdsfds', photo)
        return (
            <View
                style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    width: '100%',
                    height: '100%'
                }}
            >
                <ImageBackground
                    source={{uri: photo && photo.uri}}
                    style={{
                        flex: 1
                    }}
                />
            </View>
        )
    }

    const handleFlashMode = () => {
        if (flashMode === 'on') {
            setFlashMode('off')
        } else if (flashMode === 'off') {
            setFlashMode('on')
        } else {
            setFlashMode('auto')
        }

    }

    const retakePicture = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
        //startCamera()
    }

    return (
        <View style={styles.container}>
            {previewVisible && capturedImage ? (
                    <CameraPreview photo={capturedImage} savePhoto={savePhoto} retakePicture={retakePicture} />
                ) :
                <Camera style={styles.camera} type={type} ratio="1:1" ref={ref} flashMode={flashMode}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text style={styles.text}> Flip </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            position: "absolute",
                            width: 70,
                            height: 70,
                            bottom: 0,
                            right: 0,
                            borderRadius: 50,
                            backgroundColor: '#fff'
                        }} onPress={takePicture}
                        />
                        <TouchableOpacity
                            onPress={handleFlashMode}
                            style={{
                                position: 'absolute',
                                left: '5%',
                                top: '10%',
                                backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                                borderRadius: 50,
                                height: 25,
                                width: 25
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20
                                }}
                            >
                                ⚡️
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        width:"100%"
    },
    buttonContainer: {
        position: "relative",
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});


/*
const SnapView = props => {

    const [startCamera,setStartCamera] = React.useState(false)

    return(
        <Camera
            style={{flex: 1,width:"100%"}}
            ref={(r) => {
                camera = r
            }}
        ></Camera>
    )
}
 */

export default SnapView;