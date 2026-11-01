/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_mailPreferenceOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-mailPreferenceOption          OBJECT IDENTIFIER ::= { id-pilotAttributeType 47 }
 * ```
 * 
 * @constant
 */
export
const id_at_mailPreferenceOption: OBJECT_IDENTIFIER = _OID.fromParts([
    47,
], id_pilotAttributeType);

/* eslint-enable */

