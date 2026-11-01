/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euroDir } from "../ISSS-Schema/euroDir.va.mjs";


/**
 * @summary euro_alg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euro-alg                    OBJECT IDENTIFIER ::= {euroDir 8}
 * ```
 * 
 * @constant
 */
export
const euro_alg: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], euroDir);

/* eslint-enable */

