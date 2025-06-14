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
} from 'asn1-ts';
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
import { auto_alert } from '../MSGeneralAutoActionTypes/auto-alert.oa.mjs';
import { auto_modify } from '../MSGeneralAutoActionTypes/auto-modify.oa.mjs';
import { auto_correlate_reports } from '../MSGeneralAutoActionTypes/auto-correlate-reports.oa.mjs';
import { auto_delete } from '../MSGeneralAutoActionTypes/auto-delete.oa.mjs';
/* START_OF_SYMBOL_DEFINITION GeneralAutoActions */
/**
 * @summary GeneralAutoActions
 * @description
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
/* END_OF_SYMBOL_DEFINITION GeneralAutoActions */

/* eslint-enable */
