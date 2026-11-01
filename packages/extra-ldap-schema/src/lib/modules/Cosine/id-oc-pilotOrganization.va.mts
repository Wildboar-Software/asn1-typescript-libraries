/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";
// export { id_pilotObjectClass } from "../Cosine/id-pilotObjectClass.va.mjs";


/**
 * @summary id_oc_pilotOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-pilotOrganization             OBJECT IDENTIFIER ::= { id-pilotObjectClass 20 }
 * ```
 * 
 * @constant
 */
export
const id_oc_pilotOrganization: OBJECT_IDENTIFIER = _OID.fromParts([
    20,
], id_pilotObjectClass);

/* eslint-enable */
