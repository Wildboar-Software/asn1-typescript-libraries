/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { at } from "../MIXERAddressMapping/at.va.mjs";


/**
 * @summary at_or_address_component_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at-or-address-component-type OBJECT IDENTIFIER ::= {at 7}
 * ```
 * 
 * @constant
 */
export
const at_or_address_component_type: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], at);

/* eslint-enable */

