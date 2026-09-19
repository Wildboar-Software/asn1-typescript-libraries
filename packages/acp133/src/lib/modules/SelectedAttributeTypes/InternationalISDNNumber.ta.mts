/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalISDNNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalISDNNumber  ::= 
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export
type InternationalISDNNumber = NumericString; // NumericString

let _cached_decoder_for_InternationalISDNNumber: $.ASN1Decoder<InternationalISDNNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InternationalISDNNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InternationalISDNNumber (el: _Element): InternationalISDNNumber {
    if (!_cached_decoder_for_InternationalISDNNumber) { _cached_decoder_for_InternationalISDNNumber = $._decodeNumericString; }
    return _cached_decoder_for_InternationalISDNNumber(el);
}

let _cached_encoder_for_InternationalISDNNumber: $.ASN1Encoder<InternationalISDNNumber> | null = null;

/**
 * @summary Encodes a(n) InternationalISDNNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternationalISDNNumber, encoded as an ASN.1 Element.
 */
export
function _encode_InternationalISDNNumber (value: InternationalISDNNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InternationalISDNNumber) { _cached_encoder_for_InternationalISDNNumber = $._encodeNumericString; }
    return _cached_encoder_for_InternationalISDNNumber(value, elGetter);
}


/* eslint-enable */
