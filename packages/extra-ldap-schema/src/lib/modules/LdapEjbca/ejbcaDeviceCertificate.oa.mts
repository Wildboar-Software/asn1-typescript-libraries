/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_ejbcaDeviceCertificate } from "../LdapEjbca/id-at-ejbcaDeviceCertificate.va.mjs";


/**
 * @summary ejbcaDeviceCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ejbcaDeviceCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 5 }
 *   LDAP-NAME                 {"ejbcaDeviceCertificate"}
 *   LDAP-DESC                 "Cerfificate for devices"
 *   ID                        id-at-ejbcaDeviceCertificate }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const ejbcaDeviceCertificate: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 5,]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ejbcaDeviceCertificate" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Cerfificate for devices" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_ejbcaDeviceCertificate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

