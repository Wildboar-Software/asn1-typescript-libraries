/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_not } from "../UsefulDefinitions/id-not.va.mjs";
// export { id_not } from "../UsefulDefinitions/id-not.va.mjs";


/**
 * @summary id_not_substringRequirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-not-substringRequirements OBJECT IDENTIFIER ::= {id-not 16}
 * ```
 * 
 * @constant
 */
export
const id_not_substringRequirements: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], id_not);

/* eslint-enable */
