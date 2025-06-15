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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { originating_MTA_certificate } from '../MTSAbstractService/originating-MTA-certificate.oa.mjs';
import { proof_of_submission } from '../MTSAbstractService/proof-of-submission.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary MessageSubmissionResultExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionResultExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    originating-MTA-certificate | proof-of-submission | PrivateExtensions,
 *    ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const MessageSubmissionResultExtensions: EXTENSION[] = [
    originating_MTA_certificate,
    proof_of_submission,
    ...PrivateExtensions,
];

/* eslint-enable */
