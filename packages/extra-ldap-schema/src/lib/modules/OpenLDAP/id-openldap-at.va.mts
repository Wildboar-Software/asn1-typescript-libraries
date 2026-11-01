/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_openldap } from "../OpenLDAP/id-openldap.va.mjs";


/**
 * @summary id_openldap_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-openldap-at      OBJECT IDENTIFIER ::= { id-openldap 3 }
 * ```
 * 
 * @constant
 */
export
const id_openldap_at: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_openldap);

/* eslint-enable */

