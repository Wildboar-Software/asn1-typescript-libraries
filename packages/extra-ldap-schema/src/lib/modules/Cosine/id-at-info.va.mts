/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-info                          OBJECT IDENTIFIER ::= { id-pilotAttributeType 4  }
 * ```
 * 
 * @constant
 */
export
const id_at_info: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_pilotAttributeType);

/* eslint-enable */

