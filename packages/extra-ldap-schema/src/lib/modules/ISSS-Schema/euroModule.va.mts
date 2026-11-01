/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euroModule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroModule                  OBJECT IDENTIFIER ::= {euroDir 1}
 * ```
 * 
 * @constant
 */
export
const euroModule: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], euroDir);

/* eslint-enable */

