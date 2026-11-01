/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_documentIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-documentIdentifier            OBJECT IDENTIFIER ::= { id-pilotAttributeType 11 }
 * ```
 * 
 * @constant
 */
export
const id_at_documentIdentifier: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_pilotAttributeType);

/* eslint-enable */

