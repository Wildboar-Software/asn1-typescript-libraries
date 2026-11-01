/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_associatedName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-associatedName                OBJECT IDENTIFIER ::= { id-pilotAttributeType 38 }
 * ```
 * 
 * @constant
 */
export
const id_at_associatedName: OBJECT_IDENTIFIER = _OID.fromParts([
    38,
], id_pilotAttributeType);

/* eslint-enable */
