/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_openldapRoot } from "../OpenLDAP/id-openldapRoot.va.mjs";
// export { id_openldapRoot } from "../OpenLDAP/id-openldapRoot.va.mjs";


/**
 * @summary id_openldap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-openldap         OBJECT IDENTIFIER ::= { id-openldapRoot 1 }
 * ```
 * 
 * @constant
 */
export
const id_openldap: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_openldapRoot);

/* eslint-enable */
