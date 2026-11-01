/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_area
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-area             OBJECT IDENTIFIER ::= { euro-at 7 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_area: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], euro_at);

/* eslint-enable */

