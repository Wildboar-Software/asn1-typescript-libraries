/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_mobileTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mobileTelephoneNumber         OBJECT IDENTIFIER ::= { id-pilotAttributeType 41 }
 * ```
 * 
 * @constant
 */
export
const id_at_mobileTelephoneNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    41,
], id_pilotAttributeType);

/* eslint-enable */

