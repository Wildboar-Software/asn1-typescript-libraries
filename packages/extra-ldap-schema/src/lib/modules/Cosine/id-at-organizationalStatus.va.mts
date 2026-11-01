/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_organizationalStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-organizationalStatus          OBJECT IDENTIFIER ::= { id-pilotAttributeType 45 }
 * ```
 * 
 * @constant
 */
export
const id_at_organizationalStatus: OBJECT_IDENTIFIER = _OID.fromParts([
    45,
], id_pilotAttributeType);

/* eslint-enable */

