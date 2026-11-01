/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_nSRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-nSRecord                      OBJECT IDENTIFIER ::= { id-pilotAttributeType 29 }
 * ```
 * 
 * @constant
 */
export
const id_at_nSRecord: OBJECT_IDENTIFIER = _OID.fromParts([
    29,
], id_pilotAttributeType);

/* eslint-enable */

