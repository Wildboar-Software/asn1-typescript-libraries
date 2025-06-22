/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Password,
    _decode_Password,
    _encode_Password,
} from '../IPMSFileTransferBodyPartType/Password.ta.mjs';
/**
 * @summary Pass_Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pass-Passwords  ::=  SEQUENCE OF Password
 * ```
 */
export type Pass_Passwords = Password[]; // SequenceOfType

let _cached_decoder_for_Pass_Passwords: $.ASN1Decoder<Pass_Passwords> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Pass_Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pass_Passwords} The decoded data structure.
 */
export function _decode_Pass_Passwords(el: _Element) {
    if (!_cached_decoder_for_Pass_Passwords) {
        _cached_decoder_for_Pass_Passwords = $._decodeSequenceOf<Password>(
            () => _decode_Password
        );
    }
    return _cached_decoder_for_Pass_Passwords(el);
}

let _cached_encoder_for_Pass_Passwords: $.ASN1Encoder<Pass_Passwords> | null = null;

/**
 * @summary Encodes a(n) Pass_Passwords into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pass_Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Pass_Passwords(
    value: Pass_Passwords,
    elGetter: $.ASN1Encoder<Pass_Passwords>
) {
    if (!_cached_encoder_for_Pass_Passwords) {
        _cached_encoder_for_Pass_Passwords = $._encodeSequenceOf<Password>(
            () => _encode_Password,
            $.BER
        );
    }
    return _cached_encoder_for_Pass_Passwords(value, elGetter);
}


/* eslint-enable */
