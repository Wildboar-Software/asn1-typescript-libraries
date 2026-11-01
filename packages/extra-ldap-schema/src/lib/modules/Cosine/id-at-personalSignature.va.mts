/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_personalSignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-personalSignature             OBJECT IDENTIFIER ::= { id-pilotAttributeType 53 }
 * ```
 * 
 * @constant
 */
export
const id_at_personalSignature: OBJECT_IDENTIFIER = _OID.fromParts([
    53,
], id_pilotAttributeType);

/* eslint-enable */

