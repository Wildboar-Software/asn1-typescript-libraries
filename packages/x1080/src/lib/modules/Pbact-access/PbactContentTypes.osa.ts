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
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.js';
import { privAssignRequest } from '../Pbact-access/privAssignRequest.oa.js';
export { privAssignRequest } from '../Pbact-access/privAssignRequest.oa.js';
import { privAssignResult } from '../Pbact-access/privAssignResult.oa.js';
export { privAssignResult } from '../Pbact-access/privAssignResult.oa.js';
import { readRequest } from '../Pbact-access/readRequest.oa.js';
export { readRequest } from '../Pbact-access/readRequest.oa.js';
import { readResult } from '../Pbact-access/readResult.oa.js';
export { readResult } from '../Pbact-access/readResult.oa.js';
import { compareRequest } from '../Pbact-access/compareRequest.oa.js';
export { compareRequest } from '../Pbact-access/compareRequest.oa.js';
import { compareResult } from '../Pbact-access/compareResult.oa.js';
export { compareResult } from '../Pbact-access/compareResult.oa.js';
import { addRequest } from '../Pbact-access/addRequest.oa.js';
export { addRequest } from '../Pbact-access/addRequest.oa.js';
import { addResult } from '../Pbact-access/addResult.oa.js';
export { addResult } from '../Pbact-access/addResult.oa.js';
import { deleteRequest } from '../Pbact-access/deleteRequest.oa.js';
export { deleteRequest } from '../Pbact-access/deleteRequest.oa.js';
import { deleteResult } from '../Pbact-access/deleteResult.oa.js';
export { deleteResult } from '../Pbact-access/deleteResult.oa.js';
import { modifyRequest } from '../Pbact-access/modifyRequest.oa.js';
export { modifyRequest } from '../Pbact-access/modifyRequest.oa.js';
import { modifyResult } from '../Pbact-access/modifyResult.oa.js';
export { modifyResult } from '../Pbact-access/modifyResult.oa.js';
import { renameRequest } from '../Pbact-access/renameRequest.oa.js';
export { renameRequest } from '../Pbact-access/renameRequest.oa.js';
import { renameResult } from '../Pbact-access/renameResult.oa.js';
export { renameResult } from '../Pbact-access/renameResult.oa.js';

/* START_OF_SYMBOL_DEFINITION PbactContentTypes */
/**
 * @summary PbactContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PbactContentTypes CONTENT-TYPE ::= {
 *     privAssignRequest |
 *     privAssignResult |
 *     readRequest |
 *     readResult |
 *     compareRequest |
 *     compareResult |
 *     addRequest |
 *     addResult |
 *     deleteRequest |
 *     deleteResult |
 *     modifyRequest |
 *     modifyResult |
 *     renameRequest |
 *     renameResult,
 *     ... }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const PbactContentTypes: CONTENT_TYPE[] = [
    privAssignRequest,
    privAssignResult,
    readRequest,
    readResult,
    compareRequest,
    compareResult,
    addRequest,
    addResult,
    deleteRequest,
    deleteResult,
    modifyRequest,
    modifyResult,
    renameRequest,
    renameResult,
];
/* END_OF_SYMBOL_DEFINITION PbactContentTypes */

/* eslint-enable */
