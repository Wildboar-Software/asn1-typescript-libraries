/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Counter */
/**
 * @summary Counter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export type Counter = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Counter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Counter */
let _cached_decoder_for_Counter: $.ASN1Decoder<Counter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Counter */

/* START_OF_SYMBOL_DEFINITION _decode_Counter */
/**
 * @summary Decodes an ASN.1 element into a(n) Counter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Counter} The decoded data structure.
 */
export function _decode_Counter(el: _Element) {
    if (!_cached_decoder_for_Counter) {
        _cached_decoder_for_Counter = $._decodeOctetString;
    }
    return _cached_decoder_for_Counter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Counter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Counter */
let _cached_encoder_for_Counter: $.ASN1Encoder<Counter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Counter */

/* START_OF_SYMBOL_DEFINITION _encode_Counter */
/**
 * @summary Encodes a(n) Counter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Counter, encoded as an ASN.1 Element.
 */
export function _encode_Counter(
    value: Counter,
    elGetter: $.ASN1Encoder<Counter>
) {
    if (!_cached_encoder_for_Counter) {
        _cached_encoder_for_Counter = $._encodeOctetString;
    }
    return _cached_encoder_for_Counter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Counter */

/* eslint-enable */
