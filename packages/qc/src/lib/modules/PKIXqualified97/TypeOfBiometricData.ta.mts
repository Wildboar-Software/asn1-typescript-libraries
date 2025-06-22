/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    PredefinedBiometricType,
    _decode_PredefinedBiometricType,
    _encode_PredefinedBiometricType,
} from "../PKIXqualified97/PredefinedBiometricType.ta.mjs";

/**
 * @summary TypeOfBiometricData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfBiometricData  ::=  CHOICE {
 *     predefinedBiometricType PredefinedBiometricType,
 *
 *     biometricDataOid        OBJECT IDENTIFIER }
 * ```
 */
export type TypeOfBiometricData =
    | { predefinedBiometricType: PredefinedBiometricType } /* CHOICE_ALT_ROOT */
    | { biometricDataOid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_TypeOfBiometricData: $.ASN1Decoder<TypeOfBiometricData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfBiometricData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfBiometricData} The decoded data structure.
 */
export function _decode_TypeOfBiometricData(el: _Element) {
    if (!_cached_decoder_for_TypeOfBiometricData) {
        _cached_decoder_for_TypeOfBiometricData = $._decode_inextensible_choice<TypeOfBiometricData>(
            {
                "UNIVERSAL 2": [
                    "predefinedBiometricType",
                    _decode_PredefinedBiometricType,
                ],
                "UNIVERSAL 6": ["biometricDataOid", $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_TypeOfBiometricData(el);
}


let _cached_encoder_for_TypeOfBiometricData: $.ASN1Encoder<TypeOfBiometricData> | null = null;


/**
 * @summary Encodes a(n) TypeOfBiometricData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfBiometricData, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfBiometricData(
    value: TypeOfBiometricData,
    elGetter: $.ASN1Encoder<TypeOfBiometricData>
) {
    if (!_cached_encoder_for_TypeOfBiometricData) {
        _cached_encoder_for_TypeOfBiometricData = $._encode_choice<TypeOfBiometricData>(
            {
                predefinedBiometricType: _encode_PredefinedBiometricType,
                biometricDataOid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TypeOfBiometricData(value, elGetter);
}


/* eslint-enable */
