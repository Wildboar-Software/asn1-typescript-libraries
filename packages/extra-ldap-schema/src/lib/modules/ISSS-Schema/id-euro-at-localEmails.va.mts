/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_localEmails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-localEmails      OBJECT IDENTIFIER ::= { euro-at 6 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_localEmails: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], euro_at);

/* eslint-enable */

