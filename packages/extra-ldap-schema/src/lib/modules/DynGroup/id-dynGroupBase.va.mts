/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_openldap_exp11 } from "../DynGroup/id-openldap-exp11.va.mjs";

/**
 * @summary id_dynGroupBase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dynGroupBase     OBJECT IDENTIFIER ::= { id-openldap-exp11 8 }
 * ```
 * 
 * @constant
 */
export
const id_dynGroupBase: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_openldap_exp11);

/* eslint-enable */
