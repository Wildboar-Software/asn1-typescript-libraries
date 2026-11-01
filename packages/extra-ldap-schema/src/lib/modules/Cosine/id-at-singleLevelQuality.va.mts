/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_singleLevelQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-singleLevelQuality            OBJECT IDENTIFIER ::= { id-pilotAttributeType 50 }
 * ```
 * 
 * @constant
 */
export
const id_at_singleLevelQuality: OBJECT_IDENTIFIER = _OID.fromParts([
    50,
], id_pilotAttributeType);

/* eslint-enable */

