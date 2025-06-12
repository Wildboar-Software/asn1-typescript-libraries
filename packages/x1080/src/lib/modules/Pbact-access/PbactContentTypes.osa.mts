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
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
import { privAssignRequest } from '../Pbact-access/privAssignRequest.oa.mjs';
export { privAssignRequest } from '../Pbact-access/privAssignRequest.oa.mjs';
import { privAssignResult } from '../Pbact-access/privAssignResult.oa.mjs';
export { privAssignResult } from '../Pbact-access/privAssignResult.oa.mjs';
import { readRequest } from '../Pbact-access/readRequest.oa.mjs';
export { readRequest } from '../Pbact-access/readRequest.oa.mjs';
import { readResult } from '../Pbact-access/readResult.oa.mjs';
export { readResult } from '../Pbact-access/readResult.oa.mjs';
import { compareRequest } from '../Pbact-access/compareRequest.oa.mjs';
export { compareRequest } from '../Pbact-access/compareRequest.oa.mjs';
import { compareResult } from '../Pbact-access/compareResult.oa.mjs';
export { compareResult } from '../Pbact-access/compareResult.oa.mjs';
import { addRequest } from '../Pbact-access/addRequest.oa.mjs';
export { addRequest } from '../Pbact-access/addRequest.oa.mjs';
import { addResult } from '../Pbact-access/addResult.oa.mjs';
export { addResult } from '../Pbact-access/addResult.oa.mjs';
import { deleteRequest } from '../Pbact-access/deleteRequest.oa.mjs';
export { deleteRequest } from '../Pbact-access/deleteRequest.oa.mjs';
import { deleteResult } from '../Pbact-access/deleteResult.oa.mjs';
export { deleteResult } from '../Pbact-access/deleteResult.oa.mjs';
import { modifyRequest } from '../Pbact-access/modifyRequest.oa.mjs';
export { modifyRequest } from '../Pbact-access/modifyRequest.oa.mjs';
import { modifyResult } from '../Pbact-access/modifyResult.oa.mjs';
export { modifyResult } from '../Pbact-access/modifyResult.oa.mjs';
import { renameRequest } from '../Pbact-access/renameRequest.oa.mjs';
export { renameRequest } from '../Pbact-access/renameRequest.oa.mjs';
import { renameResult } from '../Pbact-access/renameResult.oa.mjs';
export { renameResult } from '../Pbact-access/renameResult.oa.mjs';

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
