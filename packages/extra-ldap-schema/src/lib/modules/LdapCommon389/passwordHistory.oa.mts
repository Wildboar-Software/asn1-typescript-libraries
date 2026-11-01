/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_passwordHistory } from "../LdapCommon389/id-at-passwordHistory.va.mjs";


/**
 * @summary passwordHistory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordHistory ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 5 }
 *   LDAP-NAME                 {"passwordHistory", "pwdHistory"}
 *   LDAP-DESC                 "Netscape defined password policy attribute type"
 *   ID                        id-at-passwordHistory }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const passwordHistory: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 5,]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "passwordHistory", "pwdHistory" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined password policy attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_passwordHistory /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

