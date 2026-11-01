/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";
// export { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_fax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-fax              OBJECT IDENTIFIER ::= { euro-at 5 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_fax: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], euro_at);

/* eslint-enable */
