/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_pilotAttributeType } from "../Cosine/id-pilotAttributeType.va.mjs";


/**
 * @summary id_at_buildingName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-buildingName                  OBJECT IDENTIFIER ::= { id-pilotAttributeType 48 }
 * ```
 * 
 * @constant
 */
export
const id_at_buildingName: OBJECT_IDENTIFIER = _OID.fromParts([
    48,
], id_pilotAttributeType);

/* eslint-enable */

