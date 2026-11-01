/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_pilotDSA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-pilotDSA                      OBJECT IDENTIFIER ::= { id-pilotObjectClass 21 }
 * ```
 * 
 * @constant
 */
export
const id_oc_pilotDSA: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], id_pilotObjectClass);

/* eslint-enable */

