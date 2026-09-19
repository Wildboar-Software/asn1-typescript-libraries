/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFEPSPDNCnxInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFEPSPDNCnxInfo  ::=  UTF8String
 * ```
 */
export
type SMFEPSPDNCnxInfo = UTF8String; // UTF8String

let _cached_decoder_for_SMFEPSPDNCnxInfo: $.ASN1Decoder<SMFEPSPDNCnxInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFEPSPDNCnxInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFEPSPDNCnxInfo (el: _Element): SMFEPSPDNCnxInfo {
    if (!_cached_decoder_for_SMFEPSPDNCnxInfo) { _cached_decoder_for_SMFEPSPDNCnxInfo = $._decodeUTF8String; }
    return _cached_decoder_for_SMFEPSPDNCnxInfo(el);
}

let _cached_encoder_for_SMFEPSPDNCnxInfo: $.ASN1Encoder<SMFEPSPDNCnxInfo> | null = null;

/**
 * @summary Encodes a(n) SMFEPSPDNCnxInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFEPSPDNCnxInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SMFEPSPDNCnxInfo (value: SMFEPSPDNCnxInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFEPSPDNCnxInfo) { _cached_encoder_for_SMFEPSPDNCnxInfo = $._encodeUTF8String; }
    return _cached_encoder_for_SMFEPSPDNCnxInfo(value, elGetter);
}


/* eslint-enable */
