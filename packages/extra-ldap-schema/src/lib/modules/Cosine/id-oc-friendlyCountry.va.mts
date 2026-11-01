/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_friendlyCountry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-friendlyCountry               OBJECT IDENTIFIER ::= { id-pilotObjectClass 18 }
 * ```
 * 
 * @constant
 */
export
const id_oc_friendlyCountry: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], id_pilotObjectClass);

/* eslint-enable */

