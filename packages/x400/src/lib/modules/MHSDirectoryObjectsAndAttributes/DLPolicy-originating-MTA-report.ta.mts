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

/* START_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report */
/**
 * @summary DLPolicy_originating_MTA_report
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-originating-MTA-report ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_originating_MTA_report = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_unchanged */
/**
 * @summary DLPolicy_originating_MTA_report_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_unchanged: DLPolicy_originating_MTA_report = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_unchanged */

/* START_OF_SYMBOL_DEFINITION unchanged */
/**
 * @summary DLPolicy_originating_MTA_report_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_unchanged; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unchanged */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_report */
/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_report: DLPolicy_originating_MTA_report = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_report */

/* START_OF_SYMBOL_DEFINITION report */
/**
 * @summary DLPolicy_originating_MTA_report_report
 * @constant
 * @type {number}
 */
export const report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_non_delivery_report */
/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_non_delivery_report: DLPolicy_originating_MTA_report = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION non_delivery_report */
/**
 * @summary DLPolicy_originating_MTA_report_non_delivery_report
 * @constant
 * @type {number}
 */
export const non_delivery_report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_non_delivery_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_delivery_report */

/* START_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_audited_report */
/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const DLPolicy_originating_MTA_report_audited_report: DLPolicy_originating_MTA_report = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_originating_MTA_report_audited_report */

/* START_OF_SYMBOL_DEFINITION audited_report */
/**
 * @summary DLPolicy_originating_MTA_report_audited_report
 * @constant
 * @type {number}
 */
export const audited_report: DLPolicy_originating_MTA_report = DLPolicy_originating_MTA_report_audited_report; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION audited_report */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_originating_MTA_report */
let _cached_decoder_for_DLPolicy_originating_MTA_report: $.ASN1Decoder<DLPolicy_originating_MTA_report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_originating_MTA_report */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_originating_MTA_report
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_originating_MTA_report} The decoded data structure.
 */
export function _decode_DLPolicy_originating_MTA_report(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_originating_MTA_report) {
        _cached_decoder_for_DLPolicy_originating_MTA_report = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_originating_MTA_report(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_originating_MTA_report */
let _cached_encoder_for_DLPolicy_originating_MTA_report: $.ASN1Encoder<DLPolicy_originating_MTA_report> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_originating_MTA_report */
/**
 * @summary Encodes a(n) DLPolicy_originating_MTA_report into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_originating_MTA_report, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_originating_MTA_report(
    value: DLPolicy_originating_MTA_report,
    elGetter: $.ASN1Encoder<DLPolicy_originating_MTA_report>
) {
    if (!_cached_encoder_for_DLPolicy_originating_MTA_report) {
        _cached_encoder_for_DLPolicy_originating_MTA_report = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_originating_MTA_report(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_originating_MTA_report */

/* eslint-enable */
