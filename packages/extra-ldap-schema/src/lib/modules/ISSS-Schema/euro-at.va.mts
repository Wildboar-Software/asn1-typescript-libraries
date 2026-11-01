/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-at                     OBJECT IDENTIFIER ::= {euroDir 4}
 * ```
 * 
 * @constant
 */
export
const euro_at: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], euroDir);

/* eslint-enable */

