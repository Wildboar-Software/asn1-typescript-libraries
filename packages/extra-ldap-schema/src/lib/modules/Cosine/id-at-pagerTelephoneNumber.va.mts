/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_pagerTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-pagerTelephoneNumber          OBJECT IDENTIFIER ::= { id-pilotAttributeType 42 }
 * ```
 * 
 * @constant
 */
export
const id_at_pagerTelephoneNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    42,
], id_pilotAttributeType);

/* eslint-enable */
