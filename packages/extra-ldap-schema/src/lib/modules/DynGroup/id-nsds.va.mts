/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeRoot } from "../DynGroup/id-netscapeRoot.va.mjs";


/**
 * @summary id_nsds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nsds             OBJECT IDENTIFIER ::= { id-netscapeRoot 3 }
 * ```
 * 
 * @constant
 */
export
const id_nsds: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_netscapeRoot);

/* eslint-enable */

