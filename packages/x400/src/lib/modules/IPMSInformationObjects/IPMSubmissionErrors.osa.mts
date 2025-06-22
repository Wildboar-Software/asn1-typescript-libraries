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
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
import { invalid_assembly_instructions } from '../IPMSInformationObjects/invalid-assembly-instructions.oa.mjs';
import { invalid_ipn } from '../IPMSInformationObjects/invalid-ipn.oa.mjs';
/**
 * @summary IPMSubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSubmissionErrors MS-EXTENSION ::= {invalid-assembly-instructions | invalid-ipn, ...
 *   }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION[]}
 *
 */
export const IPMSubmissionErrors: MS_EXTENSION[] = [
    invalid_assembly_instructions,
    invalid_ipn,
];

/* eslint-enable */
