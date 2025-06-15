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
import { ipm_auto_forward } from '../IPMSAutoActionTypes/ipm-auto-forward.oa.mjs';
import { ipm_auto_acknowledgement } from '../IPMSAutoActionTypes/ipm-auto-acknowledgement.oa.mjs';
import { ipm_auto_correlate } from '../IPMSAutoActionTypes/ipm-auto-correlate.oa.mjs';
import { ipm_auto_discard } from '../IPMSAutoActionTypes/ipm-auto-discard.oa.mjs';
import { ipm_auto_advise } from '../IPMSAutoActionTypes/ipm-auto-advise.oa.mjs';
/**
 * @summary IPMAutoActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoActions AUTO-ACTION ::= {ipm-auto-forward, ... -- 1994 extension additions --,
 *    ipm-auto-acknowledgement | ipm-auto-correlate | ipm-auto-discard |
 *    ipm-auto-advise}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION[]}
 *
 */
export const IPMAutoActions: AUTO_ACTION[] = [
    ipm_auto_forward,
    /* OBJECT_SET_EXTENSION_MARKER */ ipm_auto_acknowledgement,
    ipm_auto_correlate,
    ipm_auto_discard,
    ipm_auto_advise,
];

/* eslint-enable */
