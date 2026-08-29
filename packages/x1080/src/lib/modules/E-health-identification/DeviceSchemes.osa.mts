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
} from '@wildboar/asn1';
import { type DEVICE_SCHEME } from '../E-health-identification/DEVICE-SCHEME.oca.mjs';

/**
 * @summary DeviceSchemes
 * @description
 *
 * Extensible object set `{...}` of `DEVICE-SCHEME`s. Filled by
 * referencing specs / implementers' agreements. Scheme establishment
 * is out of scope of X.1080.1. ITU-T X.1080.1 (05/2018) §8.9.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeviceSchemes    DEVICE-SCHEME ::= {...}
 * ```
 *
 * @constant
 * @type {DEVICE_SCHEME[]}
 *
 */
export const DeviceSchemes: DEVICE_SCHEME[] = [];

/* eslint-enable */
