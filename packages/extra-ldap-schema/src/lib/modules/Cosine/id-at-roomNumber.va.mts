/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_roomNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-roomNumber                    OBJECT IDENTIFIER ::= { id-pilotAttributeType 6  }
 * ```
 * 
 * @constant
 */
export
const id_at_roomNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_pilotAttributeType);

/* eslint-enable */
