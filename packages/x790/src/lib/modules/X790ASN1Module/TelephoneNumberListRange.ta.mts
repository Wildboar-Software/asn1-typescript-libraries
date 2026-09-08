/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../X790ASN1Module/TelephoneNumber.ta.mjs";



/**
 * @summary TelephoneNumberListRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephoneNumberListRange  ::=  SET SIZE (0..64) OF TelephoneNumber
 * ```
 */
export
type TelephoneNumberListRange = TelephoneNumber[]; // SetOfType

let _cached_decoder_for_TelephoneNumberListRange: $.ASN1Decoder<TelephoneNumberListRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TelephoneNumberListRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TelephoneNumberListRange (el: _Element): TelephoneNumberListRange {
    if (!_cached_decoder_for_TelephoneNumberListRange) { _cached_decoder_for_TelephoneNumberListRange = $._decodeSetOf<TelephoneNumber>(() => _decode_TelephoneNumber); }
    const value = _cached_decoder_for_TelephoneNumberListRange(el);
    if (value.length > 64) {
        throw new ASN1SizeError("TelephoneNumberListRange violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_TelephoneNumberListRange: $.ASN1Encoder<TelephoneNumberListRange> | null = null;

/**
 * @summary Encodes a(n) TelephoneNumberListRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephoneNumberListRange, encoded as an ASN.1 Element.
 */
export
function _encode_TelephoneNumberListRange (value: TelephoneNumberListRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TelephoneNumberListRange) { _cached_encoder_for_TelephoneNumberListRange = $._encodeSetOf<TelephoneNumber>(() => _encode_TelephoneNumber, $.BER); }
    return _cached_encoder_for_TelephoneNumberListRange(value, elGetter);
}


/* eslint-enable */
