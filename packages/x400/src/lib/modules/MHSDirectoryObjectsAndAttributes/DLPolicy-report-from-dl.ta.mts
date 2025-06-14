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

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl */
/**
 * @summary DLPolicy_report_from_dl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-report-from-dl ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_report_from_dl = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl */

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl_whenever_requested */
/**
 * @summary DLPolicy_report_from_dl_whenever_requested
 * @constant
 * @type {number}
 */
export const DLPolicy_report_from_dl_whenever_requested: DLPolicy_report_from_dl = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl_whenever_requested */

/* START_OF_SYMBOL_DEFINITION whenever_requested */
/**
 * @summary DLPolicy_report_from_dl_whenever_requested
 * @constant
 * @type {number}
 */
export const whenever_requested: DLPolicy_report_from_dl = DLPolicy_report_from_dl_whenever_requested; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION whenever_requested */

/* START_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl_when_no_propagation */
/**
 * @summary DLPolicy_report_from_dl_when_no_propagation
 * @constant
 * @type {number}
 */
export const DLPolicy_report_from_dl_when_no_propagation: DLPolicy_report_from_dl = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_report_from_dl_when_no_propagation */

/* START_OF_SYMBOL_DEFINITION when_no_propagation */
/**
 * @summary DLPolicy_report_from_dl_when_no_propagation
 * @constant
 * @type {number}
 */
export const when_no_propagation: DLPolicy_report_from_dl = DLPolicy_report_from_dl_when_no_propagation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION when_no_propagation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_report_from_dl */
let _cached_decoder_for_DLPolicy_report_from_dl: $.ASN1Decoder<DLPolicy_report_from_dl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_report_from_dl */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_from_dl */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_report_from_dl
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_report_from_dl} The decoded data structure.
 */
export function _decode_DLPolicy_report_from_dl(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_report_from_dl) {
        _cached_decoder_for_DLPolicy_report_from_dl = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_report_from_dl(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_report_from_dl */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_from_dl */
let _cached_encoder_for_DLPolicy_report_from_dl: $.ASN1Encoder<DLPolicy_report_from_dl> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_report_from_dl */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_from_dl */
/**
 * @summary Encodes a(n) DLPolicy_report_from_dl into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_report_from_dl, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_report_from_dl(
    value: DLPolicy_report_from_dl,
    elGetter: $.ASN1Encoder<DLPolicy_report_from_dl>
) {
    if (!_cached_encoder_for_DLPolicy_report_from_dl) {
        _cached_encoder_for_DLPolicy_report_from_dl = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_report_from_dl(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_report_from_dl */

/* eslint-enable */
