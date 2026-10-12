/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary I_WLANOperationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * I-WLANOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type I_WLANOperationErrorCode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_I_WLANOperationErrorCode: $.ASN1Decoder<I_WLANOperationErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) I_WLANOperationErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_I_WLANOperationErrorCode (el: _Element): I_WLANOperationErrorCode {
    if (!_cached_decoder_for_I_WLANOperationErrorCode) { _cached_decoder_for_I_WLANOperationErrorCode = $._decodeOctetString; }
    return _cached_decoder_for_I_WLANOperationErrorCode(el);
}

let _cached_encoder_for_I_WLANOperationErrorCode: $.ASN1Encoder<I_WLANOperationErrorCode> | null = null;

/**
 * @summary Encodes a(n) I_WLANOperationErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The I_WLANOperationErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_I_WLANOperationErrorCode (value: I_WLANOperationErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_I_WLANOperationErrorCode) { _cached_encoder_for_I_WLANOperationErrorCode = $._encodeOctetString; }
    return _cached_encoder_for_I_WLANOperationErrorCode(value, elGetter);
}


/* eslint-enable */
