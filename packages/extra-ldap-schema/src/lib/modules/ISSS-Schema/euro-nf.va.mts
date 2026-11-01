/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_nf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-nf                     OBJECT IDENTIFIER ::= {euroDir 15}
 * ```
 * 
 * @constant
 */
export
const euro_nf: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], euroDir);

/* eslint-enable */

