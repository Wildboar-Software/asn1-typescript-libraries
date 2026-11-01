/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_as
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-as                     OBJECT IDENTIFIER ::= {euroDir 5}
 * ```
 * 
 * @constant
 */
export
const euro_as: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], euroDir);

/* eslint-enable */

