/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_preferredLanguage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-preferredLanguage         OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 39 }
 * ```
 * 
 * @constant
 */
export
const id_at_preferredLanguage: OBJECT_IDENTIFIER = _OID.fromParts([
    39,
], id_netscapeAttrTypes);

/* eslint-enable */

