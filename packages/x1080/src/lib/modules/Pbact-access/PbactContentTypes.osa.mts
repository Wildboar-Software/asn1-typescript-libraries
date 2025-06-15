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
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
import { privAssignRequest } from '../Pbact-access/privAssignRequest.oa.mjs';
import { privAssignResult } from '../Pbact-access/privAssignResult.oa.mjs';
import { readRequest } from '../Pbact-access/readRequest.oa.mjs';
import { readResult } from '../Pbact-access/readResult.oa.mjs';
import { compareRequest } from '../Pbact-access/compareRequest.oa.mjs';
import { compareResult } from '../Pbact-access/compareResult.oa.mjs';
import { addRequest } from '../Pbact-access/addRequest.oa.mjs';
import { addResult } from '../Pbact-access/addResult.oa.mjs';
import { deleteRequest } from '../Pbact-access/deleteRequest.oa.mjs';
import { deleteResult } from '../Pbact-access/deleteResult.oa.mjs';
import { modifyRequest } from '../Pbact-access/modifyRequest.oa.mjs';
import { modifyResult } from '../Pbact-access/modifyResult.oa.mjs';
import { renameRequest } from '../Pbact-access/renameRequest.oa.mjs';
import { renameResult } from '../Pbact-access/renameResult.oa.mjs';

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

/* eslint-enable */
