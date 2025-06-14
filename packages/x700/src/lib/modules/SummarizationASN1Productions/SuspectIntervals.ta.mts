/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SuspectIntervals */
/**
 * @summary SuspectIntervals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspectIntervals  ::=  INTEGER
 * ```
 */
export type SuspectIntervals = INTEGER;
/* END_OF_SYMBOL_DEFINITION SuspectIntervals */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspectIntervals */
let _cached_decoder_for_SuspectIntervals: $.ASN1Decoder<SuspectIntervals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SuspectIntervals */

/* START_OF_SYMBOL_DEFINITION _decode_SuspectIntervals */
/**
 * @summary Decodes an ASN.1 element into a(n) SuspectIntervals
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuspectIntervals} The decoded data structure.
 */
export function _decode_SuspectIntervals(el: _Element) {
    if (!_cached_decoder_for_SuspectIntervals) {
        _cached_decoder_for_SuspectIntervals = $._decodeInteger;
    }
    return _cached_decoder_for_SuspectIntervals(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SuspectIntervals */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspectIntervals */
let _cached_encoder_for_SuspectIntervals: $.ASN1Encoder<SuspectIntervals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SuspectIntervals */

/* START_OF_SYMBOL_DEFINITION _encode_SuspectIntervals */
/**
 * @summary Encodes a(n) SuspectIntervals into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspectIntervals, encoded as an ASN.1 Element.
 */
export function _encode_SuspectIntervals(
    value: SuspectIntervals,
    elGetter: $.ASN1Encoder<SuspectIntervals>
) {
    if (!_cached_encoder_for_SuspectIntervals) {
        _cached_encoder_for_SuspectIntervals = $._encodeInteger;
    }
    return _cached_encoder_for_SuspectIntervals(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SuspectIntervals */

/* eslint-enable */
