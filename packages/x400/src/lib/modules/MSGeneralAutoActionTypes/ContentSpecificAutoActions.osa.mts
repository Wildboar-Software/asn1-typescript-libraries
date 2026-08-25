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
import { type AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
/**
 * @summary ContentSpecificAutoActions
 * @description
 *
 * An auto-action is an action performed automatically by the MS whenever the conditions
 * defined for its performance are satisfied. These conditions are registered with the MS
 * either by subscription, or by means of the Register-MS abstract- operation (see 8.2.5).
 * See ITU-T X.413 (1999), §6.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentSpecificAutoActions AUTO-ACTION ::= {...}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION[]}
 *
 */
export const ContentSpecificAutoActions: AUTO_ACTION[] = [];

/* eslint-enable */
