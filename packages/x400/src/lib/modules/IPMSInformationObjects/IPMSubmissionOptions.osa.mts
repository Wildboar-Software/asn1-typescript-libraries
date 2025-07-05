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
import { type MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
import { ipm_assembly_instructions } from '../IPMSInformationObjects/ipm-assembly-instructions.oa.mjs';
import { originator_body_part_encryption_token } from '../IPMSInformationObjects/originator-body-part-encryption-token.oa.mjs';
import { originator_forwarded_content_token } from '../IPMSInformationObjects/originator-forwarded-content-token.oa.mjs';
/**
 * @summary IPMSubmissionOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSubmissionOptions MS-EXTENSION ::= {ipm-assembly-instructions | originator-body-part-encryption-token |
 *    originator-forwarded-content-token, ...}
 * ```
 *
 * @constant
 * @type {MS_EXTENSION[]}
 *
 */
export const IPMSubmissionOptions: MS_EXTENSION[] = [
    ipm_assembly_instructions,
    originator_body_part_encryption_token,
    originator_forwarded_content_token,
];

/* eslint-enable */
