/* eslint-disable */
import {
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
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Precision */
/**
 * @summary Precision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precision  ::=
 *   TimeInterval
 * ```
 */
export type Precision = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION Precision */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Precision */
let _cached_decoder_for_Precision: $.ASN1Decoder<Precision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Precision */

/* START_OF_SYMBOL_DEFINITION _decode_Precision */
/**
 * @summary Decodes an ASN.1 element into a(n) Precision
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Precision} The decoded data structure.
 */
export function _decode_Precision(el: _Element) {
    if (!_cached_decoder_for_Precision) {
        _cached_decoder_for_Precision = _decode_TimeInterval;
    }
    return _cached_decoder_for_Precision(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Precision */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Precision */
let _cached_encoder_for_Precision: $.ASN1Encoder<Precision> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Precision */

/* START_OF_SYMBOL_DEFINITION _encode_Precision */
/**
 * @summary Encodes a(n) Precision into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Precision, encoded as an ASN.1 Element.
 */
export function _encode_Precision(
    value: Precision,
    elGetter: $.ASN1Encoder<Precision>
) {
    if (!_cached_encoder_for_Precision) {
        _cached_encoder_for_Precision = _encode_TimeInterval;
    }
    return _cached_encoder_for_Precision(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Precision */

/* eslint-enable */
