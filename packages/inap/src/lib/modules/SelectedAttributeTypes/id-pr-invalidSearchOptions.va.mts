/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";
// export { id_pr } from "../UsefulDefinitions/id-pr.va.mjs";


/**
 * @summary id_pr_invalidSearchOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pr-invalidSearchOptions OBJECT IDENTIFIER ::= {id-pr 26}
 * ```
 * 
 * @constant
 */
export
const id_pr_invalidSearchOptions: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], id_pr);

/* eslint-enable */
