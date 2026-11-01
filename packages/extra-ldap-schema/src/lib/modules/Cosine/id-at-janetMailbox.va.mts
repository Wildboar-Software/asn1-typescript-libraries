/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_janetMailbox
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-janetMailbox                  OBJECT IDENTIFIER ::= { id-pilotAttributeType 46 }
 * ```
 * 
 * @constant
 */
export
const id_at_janetMailbox: OBJECT_IDENTIFIER = _OID.fromParts([
    46,
], id_pilotAttributeType);

/* eslint-enable */
