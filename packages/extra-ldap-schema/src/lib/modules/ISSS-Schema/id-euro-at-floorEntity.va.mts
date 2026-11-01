/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_floorEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-floorEntity      OBJECT IDENTIFIER ::= { euro-at 3 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_floorEntity: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], euro_at);

/* eslint-enable */

