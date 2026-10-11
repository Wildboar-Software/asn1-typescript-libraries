/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSOperationErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSOperationErrorCode (el: _Element): GPRSOperationErrorCode {
    if (!_cached_decoder_for_GPRSOperationErrorCode) { _cached_decoder_for_GPRSOperationErrorCode = $._decodeOctetString; }
    return _cached_decoder_for_GPRSOperationErrorCode(el);
}

let _cached_encoder_for_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> | null = null;

/**
 * @summary Encodes a(n) GPRSOperationErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSOperationErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSOperationErrorCode (value: GPRSOperationErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSOperationErrorCode) { _cached_encoder_for_GPRSOperationErrorCode = $._encodeOctetString; }
    return _cached_encoder_for_GPRSOperationErrorCode(value, elGetter);
}


/* eslint-enable */
