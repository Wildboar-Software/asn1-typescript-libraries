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
import { auto_alert } from '../MSGeneralAutoActionTypes/auto-alert.oa.mjs';
import { auto_modify } from '../MSGeneralAutoActionTypes/auto-modify.oa.mjs';
import { auto_correlate_reports } from '../MSGeneralAutoActionTypes/auto-correlate-reports.oa.mjs';
import { auto_delete } from '../MSGeneralAutoActionTypes/auto-delete.oa.mjs';
/**
 * @summary GeneralAutoActions
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
 * GeneralAutoActions AUTO-ACTION ::= {auto-alert, ... -- 1994 extension additions --, auto-modify |
 *    auto-correlate-reports | auto-delete}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION[]}
 *
 */
export const GeneralAutoActions: AUTO_ACTION[] = [
    auto_alert,
    /* OBJECT_SET_EXTENSION_MARKER */ auto_modify,
    auto_correlate_reports,
    auto_delete,
];

/* eslint-enable */
