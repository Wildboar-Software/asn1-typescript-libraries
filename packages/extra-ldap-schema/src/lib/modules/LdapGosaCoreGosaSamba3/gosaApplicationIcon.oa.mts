/* eslint-disable */
import { type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_gosaApplicationIcon } from "../LdapGosaCoreGosaSamba3/id-at-gosaApplicationIcon.va.mjs";
import { jpeg } from "../SelectedAttributeTypes/jpeg.oa.mjs";

/**
 * @summary gosaApplicationIcon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaApplicationIcon ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               jpeg.&id
 *   LDAP-NAME                 {"gosaApplicationIcon"}
 *   LDAP-DESC                 "Keeps the application icon in png format"
 *   ID                        id-at-gosaApplicationIcon }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const gosaApplicationIcon: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": jpeg["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaApplicationIcon"],
    "&ldapDesc": "Keeps the application icon in png format" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_gosaApplicationIcon /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
