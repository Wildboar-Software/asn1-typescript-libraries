/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { at } from "../MIXERAddressMapping/at.va.mjs";


/**
 * @summary at_associated_domain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at-associated-domain OBJECT IDENTIFIER ::= {at 4}
 * ```
 * 
 * @constant
 */
export
const at_associated_domain: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], at);

/* eslint-enable */

