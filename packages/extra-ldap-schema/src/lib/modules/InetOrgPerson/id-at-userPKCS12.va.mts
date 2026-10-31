/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";
// export { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_userPKCS12
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-userPKCS12                OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 216 }
 * ```
 * 
 * @constant
 */
export
const id_at_userPKCS12: OBJECT_IDENTIFIER = _OID.fromParts([
    216,
], id_netscapeAttrTypes);

/* eslint-enable */
