/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_subtreeMaximumQuality } from "../LdapSchema2ldifCosine/id-at-subtreeMaximumQuality.va.mjs";

/**
 * @summary subtreeMaximumQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subtreeMaximumQuality ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 13 }
 *   LDAP-NAME                 {"subtreeMaximumQuality"}
 *   LDAP-DESC                 "RFC1274: Subtree Maximun Quality"
 *   ID                        id-at-subtreeMaximumQuality }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const subtreeMaximumQuality: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 13,]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "subtreeMaximumQuality" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: Subtree Maximun Quality" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_subtreeMaximumQuality /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
