/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";
// export { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-oc                     OBJECT IDENTIFIER ::= {euroDir 6}
 * ```
 * 
 * @constant
 */
export
const euro_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], euroDir);

/* eslint-enable */
