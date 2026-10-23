/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary modules
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * modules OBJECT IDENTIFIER ::= {id modules(1)}
 * ```
 * 
 * @constant
 */
export
const modules: OBJECT_IDENTIFIER = _OID.fromParts([
    /* modules */ 1,
], id);

/* eslint-enable */
