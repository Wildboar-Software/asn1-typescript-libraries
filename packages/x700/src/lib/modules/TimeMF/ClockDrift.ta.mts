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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ClockDrift
 * @description
 *
 * Manufacturer's specified clock drift (maximum frequency
 * offset, §3.7.12). Syntax of `clockDrift` in the optional
 * `clockSourceDetailPkg`. ITU-T Rec. X.743 (06/98)
 * [§8.3.2](https://www.itu.int/rec/T-REC-X.743-199806-I), §3.7.12, A.2.2.
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
