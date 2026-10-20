/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";
// export { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";


/**
 * @summary id_pr_unmatchedKeyAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pr-unmatchedKeyAttributes OBJECT IDENTIFIER ::= {id-pr 31}
 * ```
 * 
 * @constant
 */
export
const id_pr_unmatchedKeyAttributes: OBJECT_IDENTIFIER = _OID.fromParts([
    31,
], id_pr);

/* eslint-enable */
