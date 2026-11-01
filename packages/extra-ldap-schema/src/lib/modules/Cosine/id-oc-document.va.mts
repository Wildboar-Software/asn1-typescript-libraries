/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_document
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-document                      OBJECT IDENTIFIER ::= { id-pilotObjectClass  6 }
 * ```
 * 
 * @constant
 */
export
const id_oc_document: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_pilotObjectClass);

/* eslint-enable */

