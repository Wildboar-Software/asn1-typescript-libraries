/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { at } from "../MIXERAddressMapping/at.va.mjs";
// export { at } from "../MIXERAddressMapping/at.va.mjs";


/**
 * @summary at_associated_x400_gateway
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at-associated-x400-gateway OBJECT IDENTIFIER ::= {at 3}
 * ```
 * 
 * @constant
 */
export
const at_associated_x400_gateway: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], at);

/* eslint-enable */
