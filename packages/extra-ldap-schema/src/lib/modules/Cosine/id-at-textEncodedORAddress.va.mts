/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_textEncodedORAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-textEncodedORAddress          OBJECT IDENTIFIER ::= { id-pilotAttributeType 2  }
 * ```
 * 
 * @constant
 */
export
const id_at_textEncodedORAddress: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_pilotAttributeType);

/* eslint-enable */

