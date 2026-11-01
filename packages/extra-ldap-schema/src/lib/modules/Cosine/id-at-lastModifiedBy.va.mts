/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_lastModifiedBy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-lastModifiedBy                OBJECT IDENTIFIER ::= { id-pilotAttributeType 24 }
 * ```
 * 
 * @constant
 */
export
const id_at_lastModifiedBy: OBJECT_IDENTIFIER = _OID.fromParts([
    24,
], id_pilotAttributeType);

/* eslint-enable */

