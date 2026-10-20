/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";
// export { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";


/**
 * @summary id_pr_missingSearchOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pr-missingSearchOptions OBJECT IDENTIFIER ::= {id-pr 27}
 * ```
 * 
 * @constant
 */
export
const id_pr_missingSearchOptions: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], id_pr);

/* eslint-enable */
