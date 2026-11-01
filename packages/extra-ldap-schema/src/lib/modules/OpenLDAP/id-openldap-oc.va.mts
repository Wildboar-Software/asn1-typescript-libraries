/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_openldap } from "../OpenLDAP/id-openldap.va.mjs";
// export { id_openldap } from "../OpenLDAP/id-openldap.va.mjs";


/**
 * @summary id_openldap_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-openldap-oc      OBJECT IDENTIFIER ::= { id-openldap 4 }
 * ```
 * 
 * @constant
 */
export
const id_openldap_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_openldap);

/* eslint-enable */
