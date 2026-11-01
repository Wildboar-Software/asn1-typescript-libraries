/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_associatedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-associatedDomain              OBJECT IDENTIFIER ::= { id-pilotAttributeType 37 }
 * ```
 * 
 * @constant
 */
export
const id_at_associatedDomain: OBJECT_IDENTIFIER = _OID.fromParts([
    37,
], id_pilotAttributeType);

/* eslint-enable */

