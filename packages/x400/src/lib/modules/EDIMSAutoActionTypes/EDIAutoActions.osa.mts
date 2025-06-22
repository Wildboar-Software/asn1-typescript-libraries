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
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
import { edi_auto_correlate } from '../EDIMSAutoActionTypes/edi-auto-correlate.oa.mjs';
import { edi_auto_forward } from '../EDIMSAutoActionTypes/edi-auto-forward.oa.mjs';
import { edi_auto_acknowledgement } from '../EDIMSAutoActionTypes/edi-auto-acknowledgement.oa.mjs';
/**
 * @summary EDIAutoActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIAutoActions AUTO-ACTION ::= {edi-auto-correlate | edi-auto-forward | edi-auto-acknowledgement}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION[]}
 *
 */
export const EDIAutoActions: AUTO_ACTION[] = [
    edi_auto_correlate,
    edi_auto_forward,
    edi_auto_acknowledgement,
];

/* eslint-enable */
