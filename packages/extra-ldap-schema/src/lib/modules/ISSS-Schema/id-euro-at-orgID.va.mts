/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_orgID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-orgID            OBJECT IDENTIFIER ::= { euro-at 1 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_orgID: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], euro_at);

/* eslint-enable */

