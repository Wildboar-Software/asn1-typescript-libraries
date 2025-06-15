/* eslint-disable */
import {
    REAL,
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
 * @summary ClockDrift
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockDrift  ::=  REAL
 * ```
 */
export type ClockDrift = REAL; // RealType


export const _decode_ClockDrift = $._decodeReal;


export const _encode_ClockDrift = $._encodeReal;


/* eslint-enable */
