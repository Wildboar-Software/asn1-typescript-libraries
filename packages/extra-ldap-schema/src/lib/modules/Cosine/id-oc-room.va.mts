/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_room
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-room                          OBJECT IDENTIFIER ::= { id-pilotObjectClass  7 }
 * ```
 * 
 * @constant
 */
export
const id_oc_room: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_pilotObjectClass);

/* eslint-enable */

