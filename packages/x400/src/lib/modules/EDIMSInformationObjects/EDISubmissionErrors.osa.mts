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
import { EDIM_EXTENSION } from '../EDIMSInformationObjects/EDIM-EXTENSION.oca.mjs';
import { invalid_assembly_instructions } from '../EDIMSInformationObjects/invalid-assembly-instructions.oa.mjs';
/**
 * @summary EDISubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDISubmissionErrors EDIM-EXTENSION ::= {invalid-assembly-instructions, ... -- For future extension additions --}
 * ```
 *
 * @constant
 * @type {EDIM_EXTENSION[]}
 *
 */
export const EDISubmissionErrors: EDIM_EXTENSION[] = [
    invalid_assembly_instructions,
];

/* eslint-enable */
