/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { euro_at } from "../ISSS-Schema/euro-at.va.mjs";
// export { euro_at } from "../ISSS-Schema/euro-at.va.mjs";


/**
 * @summary id_euro_at_floor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-euro-at-floor            OBJECT IDENTIFIER ::= { euro-at 2 }
 * ```
 * 
 * @constant
 */
export
const id_euro_at_floor: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], euro_at);

/* eslint-enable */
