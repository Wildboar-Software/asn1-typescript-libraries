/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { RegistrationType, _decode_RegistrationType, _encode_RegistrationType } from "../CSTA-status-reporting/RegistrationType.ta.mjs";



/**
 * @summary RegistrationTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationTypeList  ::=  SEQUENCE OF RegistrationType
 * ```
 */
export
type RegistrationTypeList = RegistrationType[]; // SequenceOfType

let _cached_decoder_for_RegistrationTypeList: $.ASN1Decoder<RegistrationTypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegistrationTypeList (el: _Element): RegistrationTypeList {
    if (!_cached_decoder_for_RegistrationTypeList) { _cached_decoder_for_RegistrationTypeList = $._decodeSequenceOf<RegistrationType>(() => _decode_RegistrationType); }
    return _cached_decoder_for_RegistrationTypeList(el);
}

let _cached_encoder_for_RegistrationTypeList: $.ASN1Encoder<RegistrationTypeList> | null = null;

/**
 * @summary Encodes a(n) RegistrationTypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypeList, encoded as an ASN.1 Element.
 */
export
function _encode_RegistrationTypeList (value: RegistrationTypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegistrationTypeList) { _cached_encoder_for_RegistrationTypeList = $._encodeSequenceOf<RegistrationType>(() => _encode_RegistrationType, $.BER); }
    return _cached_encoder_for_RegistrationTypeList(value, elGetter);
}


/* eslint-enable */
