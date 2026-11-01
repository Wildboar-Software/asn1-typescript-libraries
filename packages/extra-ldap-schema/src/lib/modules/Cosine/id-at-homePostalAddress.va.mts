/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_homePostalAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-homePostalAddress             OBJECT IDENTIFIER ::= { id-pilotAttributeType 39 }
 * ```
 * 
 * @constant
 */
export
const id_at_homePostalAddress: OBJECT_IDENTIFIER = _OID.fromParts([
    39,
], id_pilotAttributeType);

/* eslint-enable */

