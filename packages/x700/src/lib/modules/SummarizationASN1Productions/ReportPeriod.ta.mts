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


export const _decode_ReportPeriod = $._decodeInteger;


export const _encode_ReportPeriod = $._encodeInteger;


/* eslint-enable */
