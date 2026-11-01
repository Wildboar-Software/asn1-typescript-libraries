/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_uid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-uid                           OBJECT IDENTIFIER ::= { id-pilotAttributeType 1  }
 * ```
 * 
 * @constant
 */
export
const id_at_uid: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_pilotAttributeType);

/* eslint-enable */
