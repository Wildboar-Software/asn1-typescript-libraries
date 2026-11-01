/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_nsds } from "../DynGroup/id-nsds.va.mjs";


/**
 * @summary id_nsdsoc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nsdsoc           OBJECT IDENTIFIER ::= { id-nsds 2 }
 * ```
 * 
 * @constant
 */
export
const id_nsdsoc: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_nsds);

/* eslint-enable */

