/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_netscapeObjClass } from "../InetOrgPerson/id-netscapeObjClass.va.mjs";
// export { id_netscapeObjClass } from "../InetOrgPerson/id-netscapeObjClass.va.mjs";


/**
 * @summary id_oc_inetOrgPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-inetOrgPerson             OBJECT IDENTIFIER ::= { id-netscapeObjClass 2 }
 * ```
 * 
 * @constant
 */
export
const id_oc_inetOrgPerson: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_netscapeObjClass);

/* eslint-enable */
