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

/* START_OF_SYMBOL_DEFINITION ReportPeriod */
/**
 * @summary ReportPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportPeriod  ::=  INTEGER(1..MAX)
 * ```
 */
export type ReportPeriod = INTEGER;
/* END_OF_SYMBOL_DEFINITION ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportPeriod */
let _cached_decoder_for_ReportPeriod: $.ASN1Decoder<ReportPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _decode_ReportPeriod */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportPeriod} The decoded data structure.
 */
export function _decode_ReportPeriod(el: _Element) {
    if (!_cached_decoder_for_ReportPeriod) {
        _cached_decoder_for_ReportPeriod = $._decodeInteger;
    }
    return _cached_decoder_for_ReportPeriod(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportPeriod */
let _cached_encoder_for_ReportPeriod: $.ASN1Encoder<ReportPeriod> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _encode_ReportPeriod */
/**
 * @summary Encodes a(n) ReportPeriod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportPeriod, encoded as an ASN.1 Element.
 */
export function _encode_ReportPeriod(
    value: ReportPeriod,
    elGetter: $.ASN1Encoder<ReportPeriod>
) {
    if (!_cached_encoder_for_ReportPeriod) {
        _cached_encoder_for_ReportPeriod = $._encodeInteger;
    }
    return _cached_encoder_for_ReportPeriod(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportPeriod */

/* eslint-enable */
