/* eslint-disable */
import {
    GeneralizedTime,
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
 * @summary GlobalTime
 * @description
 *
 * Timestamp syntax for metric objects: derived-gauge timestamp
 * (time the observation was taken; GET only) and period
 * synchronization time (each repeating period starts an integral
 * number of periods before or after this instant). ITU-T Rec.
 * X.739 (11/93)
 * [§8.1.9.6.2](https://www.itu.int/rec/T-REC-X.739-199311-I),
 * §8.1.9.9.2, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GlobalTime  ::=  GeneralizedTime
 * ```
 */
export type GlobalTime = GeneralizedTime; // GeneralizedTime


export const _decode_GlobalTime = $._decodeGeneralizedTime;


export const _encode_GlobalTime = $._encodeGeneralizedTime;


/* eslint-enable */
