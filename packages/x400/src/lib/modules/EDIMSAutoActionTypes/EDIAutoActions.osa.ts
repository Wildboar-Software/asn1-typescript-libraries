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
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.js';
export { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.js';
import { edi_auto_correlate } from '../EDIMSAutoActionTypes/edi-auto-correlate.oa.js';
export { edi_auto_correlate } from '../EDIMSAutoActionTypes/edi-auto-correlate.oa.js';
import { edi_auto_forward } from '../EDIMSAutoActionTypes/edi-auto-forward.oa.js';
export { edi_auto_forward } from '../EDIMSAutoActionTypes/edi-auto-forward.oa.js';
import { edi_auto_acknowledgement } from '../EDIMSAutoActionTypes/edi-auto-acknowledgement.oa.js';
export { edi_auto_acknowledgement } from '../EDIMSAutoActionTypes/edi-auto-acknowledgement.oa.js';

/* START_OF_SYMBOL_DEFINITION EDIAutoActions */
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
/* END_OF_SYMBOL_DEFINITION EDIAutoActions */

/* eslint-enable */
