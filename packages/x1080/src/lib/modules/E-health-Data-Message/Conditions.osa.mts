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
import { type CONDITION } from '../E-health-Data-Message/CONDITION.oca.mjs';

/**
 * @summary Conditions
 * @description
 *
 * Extensible object set of `CONDITION`s (`{...}`). Filled by
 * referencing specs / implementers' agreements. 2011
 * E-health-Data-Message example module. ITU-T X.1080.1 (05/2018)
 * intro / §6.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Conditions CONDITION ::= {...}
 * ```
 *
 * @constant
 * @type {CONDITION[]}
 *
 */
export const Conditions: CONDITION[] = [];

/* eslint-enable */
