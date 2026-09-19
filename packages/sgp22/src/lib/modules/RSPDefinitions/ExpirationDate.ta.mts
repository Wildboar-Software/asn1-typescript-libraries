/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";


/**
 * @summary ExpirationDate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExpirationDate  ::=  Time
 * ```
 */
export
type ExpirationDate = Time; // DefinedType

let _cached_decoder_for_ExpirationDate: $.ASN1Decoder<ExpirationDate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpirationDate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExpirationDate (el: _Element): ExpirationDate {
    if (!_cached_decoder_for_ExpirationDate) { _cached_decoder_for_ExpirationDate = _decode_Time; }
    return _cached_decoder_for_ExpirationDate(el);
}

let _cached_encoder_for_ExpirationDate: $.ASN1Encoder<ExpirationDate> | null = null;

/**
 * @summary Encodes a(n) ExpirationDate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpirationDate, encoded as an ASN.1 Element.
 */
export
function _encode_ExpirationDate (value: ExpirationDate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExpirationDate) { _cached_encoder_for_ExpirationDate = _encode_Time; }
    return _cached_encoder_for_ExpirationDate(value, elGetter);
}


/* eslint-enable */
