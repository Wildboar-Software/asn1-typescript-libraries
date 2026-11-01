/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { gi } from "../H323-X500-Schema/gi.va.mjs";
// export { gi } from "../H323-X500-Schema/gi.va.mjs";


/**
 * @summary gi_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gi-at OBJECT IDENTIFIER ::= {gi at(1)}
 * ```
 * 
 * @constant
 */
export
const gi_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* at */ 1,
], gi);

/* eslint-enable */
