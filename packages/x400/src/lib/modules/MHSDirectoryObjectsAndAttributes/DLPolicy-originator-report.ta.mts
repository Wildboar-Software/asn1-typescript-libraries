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

/* START_OF_SYMBOL_DEFINITION DLPolicy_originator_report */
/**
 * @summary DLPolicy_originator_report
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-originator-report ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_originator_report = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_originator_report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originator_report_unchanged */
/**
 * @summary DLPolicy_originator_report_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_originator_report_unchanged: DLPolicy_originator_report = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originator_report_unchanged */

/* START_OF_SYMBOL_DEFINITION unchanged */
/**
 * @summary DLPolicy_originator_report_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_originator_report = DLPolicy_originator_report_unchanged; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unchanged */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originator_report_no_report */
/**
 * @summary DLPolicy_originator_report_no_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originator_report_no_report: DLPolicy_originator_report = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originator_report_no_report */

/* START_OF_SYMBOL_DEFINITION no_report */
/**
 * @summary DLPolicy_originator_report_no_report
 * @constant
 * @type {number}
 */
export const no_report: DLPolicy_originator_report = DLPolicy_originator_report_no_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originator_report_report */
/**
 * @summary DLPolicy_originator_report_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originator_report_report: DLPolicy_originator_report = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originator_report_report */

/* START_OF_SYMBOL_DEFINITION report */
/**
 * @summary DLPolicy_originator_report_report
 * @constant
 * @type {number}
 */
export const report: DLPolicy_originator_report = DLPolicy_originator_report_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originator_report_non_delivery_report */
/**
 * @summary DLPolicy_originator_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originator_report_non_delivery_report: DLPolicy_originator_report = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originator_report_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION non_delivery_report */
/**
 * @summary DLPolicy_originator_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const non_delivery_report: DLPolicy_originator_report = DLPolicy_originator_report_non_delivery_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_delivery_report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_originator_report */
let _cached_decoder_for_DLPolicy_originator_report: $.ASN1Decoder<DLPolicy_originator_report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_originator_report */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_originator_report */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_originator_report
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_originator_report} The decoded data structure.
 */
export function _decode_DLPolicy_originator_report(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_originator_report) {
        _cached_decoder_for_DLPolicy_originator_report = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_originator_report(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_originator_report */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_originator_report */
let _cached_encoder_for_DLPolicy_originator_report: $.ASN1Encoder<DLPolicy_originator_report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_originator_report */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_originator_report */
/**
 * @summary Encodes a(n) DLPolicy_originator_report into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_originator_report, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_originator_report(
    value: DLPolicy_originator_report,
    elGetter: $.ASN1Encoder<DLPolicy_originator_report>
) {
    if (!_cached_encoder_for_DLPolicy_originator_report) {
        _cached_encoder_for_DLPolicy_originator_report = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_originator_report(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_originator_report */

/* eslint-enable */
