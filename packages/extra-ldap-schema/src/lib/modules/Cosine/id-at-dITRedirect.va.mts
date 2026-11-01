/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";
// export { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_dITRedirect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-dITRedirect                   OBJECT IDENTIFIER ::= { id-pilotAttributeType 54 }
 * ```
 * 
 * @constant
 */
export
const id_at_dITRedirect: OBJECT_IDENTIFIER = _OID.fromParts([
    54,
], id_pilotAttributeType);

/* eslint-enable */
