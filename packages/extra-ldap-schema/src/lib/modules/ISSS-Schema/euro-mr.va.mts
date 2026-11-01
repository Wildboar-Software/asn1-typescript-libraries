/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";
// export { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_mr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-mr                     OBJECT IDENTIFIER ::= {euroDir 13}
 * ```
 * 
 * @constant
 */
export
const euro_mr: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], euroDir);

/* eslint-enable */
