/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";

/**
 * @summary id_at_displayName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-displayName               OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 241 }
 * ```
 * 
 * @constant
 */
export
const id_at_displayName: OBJECT_IDENTIFIER = _OID.fromParts([
    241,
], id_netscapeAttrTypes);

/* eslint-enable */
