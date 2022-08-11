import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { apiURL } from '../../utils/localStorage';
import SignatureCapture from 'react-native-signature-capture';
import { Icon } from 'react-native-elements';


export default function ({ navigation, route }) {

    const ref = useRef();
    const ref2 = useRef();
    const imgWidth = windowWidth;
    const imgHeight = 250;
    const [kirim, setKirim] = useState({
        fid_user: route.params.id_user,

    });
    const [loading, setLoading] = useState(false);





    const _kirimAPI = () => {

        setLoading(true);
        console.error(kirim);

        axios.post(apiURL + 'add.php', kirim).then(res => {
            console.log(res.data)
            setLoading(false);
            navigation.replace('Home');


        })
    }

    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>

                <MyInput label='Nama pelanggan' value={kirim.nama_pelanggan} onChangeText={val => setKirim({ ...kirim, nama_pelanggan: val })} />
                <MyInput label='Alamat instalasi' value={kirim.alamat_instalasi} onChangeText={val => setKirim({ ...kirim, alamat_instalasi: val })} />
                <MyInput label='Telepon pelanggan' value={kirim.telepon_pelanggan} onChangeText={val => setKirim({ ...kirim, telepon_pelanggan: val })} />
                <MyInput label='Telepon internet' value={kirim.telepon_internet} onChangeText={val => setKirim({ ...kirim, telepon_internet: val })} />
                <MyInput label='Nomor internet' value={kirim.nomor_internet} onChangeText={val => setKirim({ ...kirim, nomor_internet: val })} />
                <MyInput label='Nomor tiket' value={kirim.nomor_tiket} onChangeText={val => setKirim({ ...kirim, nomor_tiket: val })} />
                <MyInput label='Nama teknisi' value={kirim.nama_teknisi} onChangeText={val => setKirim({ ...kirim, nama_teknisi: val })} />
                <MyInput label='Nik teknisi' value={kirim.nik_teknisi} onChangeText={val => setKirim({ ...kirim, nik_teknisi: val })} />
                <MyInput label='Jenis layanan' value={kirim.jenis_layanan} onChangeText={val => setKirim({ ...kirim, jenis_layanan: val })} />
                <MyInput label='Ont lama' value={kirim.ont_lama} onChangeText={val => setKirim({ ...kirim, ont_lama: val })} />
                <MyInput label='Ont baru' value={kirim.ont_baru} onChangeText={val => setKirim({ ...kirim, ont_baru: val })} />
                <MyInput label='Stb lama' value={kirim.stb_lama} onChangeText={val => setKirim({ ...kirim, stb_lama: val })} />
                <MyInput label='Stb baru' value={kirim.stb_baru} onChangeText={val => setKirim({ ...kirim, stb_baru: val })} />
                <MyInput label='Kabel dropcore' value={kirim.kabel_dropcore} onChangeText={val => setKirim({ ...kirim, kabel_dropcore: val })} />
                <MyInput label='Keterangan' value={kirim.keterangan} onChangeText={val => setKirim({ ...kirim, keterangan: val })} />

                {/* ttd pelanggan */}
                <View style={{ flex: 1, width: imgWidth, height: imgHeight, marginVertical: 10, }}>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            padding: 10,
                            flex: 1,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.primary,
                                fontSize: windowWidth / 30
                            }}>
                                Tanda Tangan Pelanggan :
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            ref.current.resetImage();
                        }} style={{
                            width: 100,
                            height: 30,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: colors.black
                        }}>
                            <Icon size={windowWidth / 25} type='ioncion' name='refresh' color={colors.white} />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: windowWidth / 25
                            }}>Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <SignatureCapture
                        style={{
                            flex: 1
                        }}
                        ref={ref}
                        onSaveEvent={x => setKirim({
                            ...kirim,
                            ttd_pelanggan: `data:image/png;base64,${x.encoded}`
                        })}
                        onDragEvent={x => {
                            if (x.dragged) {
                                ref.current.saveImage()
                            }
                        }}
                        saveImageFileInExtStorage={false}
                        showNativeButtons={false}
                        showTitleLabel={true}
                        backgroundColor={colors.white}
                        strokeColor={colors.black}
                        minStrokeWidth={5}
                        maxStrokeWidth={4}
                        viewMode={"portrait"} />
                </View>

                {/* ttd teknisi */}
                <View style={{ flex: 1, width: imgWidth, height: imgHeight, marginVertical: 10, }}>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            padding: 10,
                            flex: 1,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.primary,
                                fontSize: windowWidth / 30
                            }}>
                                Tanda Tangan Teknisi :
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            ref2.current.resetImage();
                        }} style={{
                            width: 100,
                            height: 30,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: colors.black
                        }}>
                            <Icon size={windowWidth / 25} type='ioncion' name='refresh' color={colors.white} />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: windowWidth / 25
                            }}>Reset</Text>
                        </TouchableOpacity>
                    </View>

                    <SignatureCapture
                        style={{
                            flex: 1
                        }}
                        ref={ref2}
                        onSaveEvent={x => setKirim({
                            ...kirim,
                            ttd_teknisi: `data:image/png;base64,${x.encoded}`
                        })}
                        onDragEvent={x => {
                            if (x.dragged) {
                                ref2.current.saveImage()
                            }
                        }}
                        saveImageFileInExtStorage={false}
                        showNativeButtons={false}
                        showTitleLabel={true}
                        backgroundColor={colors.white}
                        strokeColor={colors.black}
                        minStrokeWidth={5}
                        maxStrokeWidth={4}
                        viewMode={"portrait"} />
                </View>


            </View>
            {
                !loading && (

                    <View style={{ padding: 10 }}>
                        <MyButton onPress={_kirimAPI} title="SIMPAN" warna={colors.primary} />
                    </View>
                )
            }

            {
                loading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )
            }
        </ScrollView >
    );
}
