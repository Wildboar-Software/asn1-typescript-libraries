/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MUSIMUERequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MUSIMUERequestType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MUSIMUERequestType = OCTET_STRING; // OctetStringType

let _cached_decoder_for_MUSIMUERequestType: $.ASN1Decoder<MUSIMUERequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MUSIMUERequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MUSIMUERequestType (el: _Element): MUSIMUERequestType {
    if (!_cached_decoder_for_MUSIMUERequestType) { _cached_decoder_for_MUSIMUERequestType = $._decodeOctetString; }
    return _cached_decoder_for_MUSIMUERequestType(el);
}

let _cached_encoder_for_MUSIMUERequestType: $.ASN1Encoder<MUSIMUERequestType> | null = null;

/**
 * @summary Encodes a(n) MUSIMUERequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MUSIMUERequestType, encoded as an ASN.1 Element.
 */
export
function _encode_MUSIMUERequestType (value: MUSIMUERequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MUSIMUERequestType) { _cached_encoder_for_MUSIMUERequestType = $._encodeOctetString; }
    return _cached_encoder_for_MUSIMUERequestType(value, elGetter);
}


/* eslint-enable */
