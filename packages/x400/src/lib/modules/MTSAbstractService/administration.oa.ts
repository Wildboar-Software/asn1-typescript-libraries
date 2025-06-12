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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import { change_credentials } from '../MTSAbstractService/change-credentials.oa.js';
export { change_credentials } from '../MTSAbstractService/change-credentials.oa.js';
import { register } from '../MTSAbstractService/register.oa.js';
export { register } from '../MTSAbstractService/register.oa.js';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
import { id_pt_administration } from '../MTSObjectIdentifiers/id-pt-administration.va.js';
export { id_pt_administration } from '../MTSObjectIdentifiers/id-pt-administration.va.js';
import { PORT } from '../MTSAbstractService/PORT.oca.js';
export { PORT } from '../MTSAbstractService/PORT.oca.js';

/* START_OF_SYMBOL_DEFINITION administration */
/**
 * @summary administration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administration PORT ::= {
 *   OPERATIONS        {change-credentials, ...}
 *   CONSUMER INVOKES  {register, ...}
 *   SUPPLIER INVOKES  {operationObject1, ...}
 *   ID                id-pt-administration
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const administration: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Both': [change_credentials] /* OBJECT_FIELD_SETTING */,
    '&Supplier': [register] /* OBJECT_FIELD_SETTING */,
    '&Consumer': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_administration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION administration */

/* eslint-enable */
