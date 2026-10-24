/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_oc } from "../IN-object-identifiers/id-oc.va.mjs";
// export { id_oc } from "../IN-object-identifiers/id-oc.va.mjs";


/**
 * @summary id_oc_securityUserInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc-securityUserInfo OBJECT IDENTIFIER ::= {id-oc securityUserInfo(1)}
 * ```
 * 
 * @constant
 */
export
const id_oc_securityUserInfo: OBJECT_IDENTIFIER = _OID.fromParts([
    /* securityUserInfo */ 1,
], id_oc);

/* eslint-enable */
