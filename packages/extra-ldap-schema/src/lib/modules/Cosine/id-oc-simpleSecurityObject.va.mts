/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_simpleSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-simpleSecurityObject          OBJECT IDENTIFIER ::= { id-pilotObjectClass 19 }
 * ```
 * 
 * @constant
 */
export
const id_oc_simpleSecurityObject: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], id_pilotObjectClass);

/* eslint-enable */

