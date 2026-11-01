/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";
// export { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_rFC822localPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-rFC822localPart               OBJECT IDENTIFIER ::= { id-pilotObjectClass 14 }
 * ```
 * 
 * @constant
 */
export
const id_oc_rFC822localPart: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], id_pilotObjectClass);

/* eslint-enable */
