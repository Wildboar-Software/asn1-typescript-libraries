/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";

/**
 * @summary id_at_jpegPhoto
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-jpegPhoto                 OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 60 }
 * ```
 * 
 * @constant
 */
export
const id_at_jpegPhoto: OBJECT_IDENTIFIER = _OID.fromParts([
    60,
], id_netscapeAttrTypes);

/* eslint-enable */
