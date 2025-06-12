/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
import { ipm_auto_forward } from '../IPMSAutoActionTypes/ipm-auto-forward.oa.mjs';
export { ipm_auto_forward } from '../IPMSAutoActionTypes/ipm-auto-forward.oa.mjs';
import { ipm_auto_acknowledgement } from '../IPMSAutoActionTypes/ipm-auto-acknowledgement.oa.mjs';
export { ipm_auto_acknowledgement } from '../IPMSAutoActionTypes/ipm-auto-acknowledgement.oa.mjs';
import { ipm_auto_correlate } from '../IPMSAutoActionTypes/ipm-auto-correlate.oa.mjs';
export { ipm_auto_correlate } from '../IPMSAutoActionTypes/ipm-auto-correlate.oa.mjs';
import { ipm_auto_discard } from '../IPMSAutoActionTypes/ipm-auto-discard.oa.mjs';
export { ipm_auto_discard } from '../IPMSAutoActionTypes/ipm-auto-discard.oa.mjs';
import { ipm_auto_advise } from '../IPMSAutoActionTypes/ipm-auto-advise.oa.mjs';
export { ipm_auto_advise } from '../IPMSAutoActionTypes/ipm-auto-advise.oa.mjs';

/* START_OF_SYMBOL_DEFINITION IPMAutoActions */
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
/* END_OF_SYMBOL_DEFINITION IPMAutoActions */

/* eslint-enable */
