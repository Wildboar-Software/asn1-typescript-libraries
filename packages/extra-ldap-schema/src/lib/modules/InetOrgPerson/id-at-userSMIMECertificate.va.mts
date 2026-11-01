/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeAttrTypes } from "../InetOrgPerson/id-netscapeAttrTypes.va.mjs";


/**
 * @summary id_at_userSMIMECertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-userSMIMECertificate      OBJECT IDENTIFIER ::= { id-netscapeAttrTypes 40 }
 * ```
 * 
 * @constant
 */
export
const id_at_userSMIMECertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    40,
], id_netscapeAttrTypes);

/* eslint-enable */

