/* eslint-disable */
import {
    ASN1Element as _Element,
    UTCTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedAuthorisationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedAuthorisationInfo  ::=  UTCTime
 * ```
 */
export
type ExtendedAuthorisationInfo = UTCTime; // UTCTime

let _cached_decoder_for_ExtendedAuthorisationInfo: $.ASN1Decoder<ExtendedAuthorisationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedAuthorisationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedAuthorisationInfo (el: _Element): ExtendedAuthorisationInfo {
    if (!_cached_decoder_for_ExtendedAuthorisationInfo) { _cached_decoder_for_ExtendedAuthorisationInfo = $._decodeUTCTime; }
    return _cached_decoder_for_ExtendedAuthorisationInfo(el);
}

let _cached_encoder_for_ExtendedAuthorisationInfo: $.ASN1Encoder<ExtendedAuthorisationInfo> | null = null;

/**
 * @summary Encodes a(n) ExtendedAuthorisationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedAuthorisationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedAuthorisationInfo (value: ExtendedAuthorisationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedAuthorisationInfo) { _cached_encoder_for_ExtendedAuthorisationInfo = $._encodeUTCTime; }
    return _cached_encoder_for_ExtendedAuthorisationInfo(value, elGetter);
}


/* eslint-enable */
