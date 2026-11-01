/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_uniqueIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-uniqueIdentifier              OBJECT IDENTIFIER ::= { id-pilotAttributeType 44 }
 * ```
 * 
 * @constant
 */
export
const id_at_uniqueIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    44,
], id_pilotAttributeType);

/* eslint-enable */
