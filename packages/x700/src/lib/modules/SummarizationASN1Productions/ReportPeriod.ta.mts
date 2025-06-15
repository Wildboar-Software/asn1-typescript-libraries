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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _decode_ReportPeriod */
export const _decode_ReportPeriod = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportPeriod */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportPeriod */

/* START_OF_SYMBOL_DEFINITION _encode_ReportPeriod */
export const _encode_ReportPeriod = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ReportPeriod */

/* eslint-enable */
