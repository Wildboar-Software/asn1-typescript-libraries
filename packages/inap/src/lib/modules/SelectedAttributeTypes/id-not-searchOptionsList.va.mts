/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_not } from "../UsefulDefinitions/id-not.va.mjs";
// export { id_not } from "../UsefulDefinitions/id-not.va.mjs";


/**
 * @summary id_not_searchOptionsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-not-searchOptionsList OBJECT IDENTIFIER ::= {id-not 11}
 * ```
 * 
 * @constant
 */
export
const id_not_searchOptionsList: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_not);

/* eslint-enable */
