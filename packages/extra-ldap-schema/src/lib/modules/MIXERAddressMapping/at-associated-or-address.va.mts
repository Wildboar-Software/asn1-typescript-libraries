/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { at } from "../MIXERAddressMapping/at.va.mjs";


/**
 * @summary at_associated_or_address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at-associated-or-address OBJECT IDENTIFIER ::= {at 6}
 * ```
 * 
 * @constant
 */
export
const at_associated_or_address: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], at);

/* eslint-enable */

