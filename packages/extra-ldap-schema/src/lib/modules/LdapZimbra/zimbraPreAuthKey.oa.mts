/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
// export { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_zimbraPreAuthKey } from "../LdapZimbra/id-at-zimbraPreAuthKey.va.mjs";
// export { id_at_zimbraPreAuthKey } from "../LdapZimbra/id-at-zimbraPreAuthKey.va.mjs";


/**
 * @summary zimbraPreAuthKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPreAuthKey ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..128))
 *   EQUALITY MATCHING RULE    octetStringMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"zimbraPreAuthKey"}
 *   LDAP-DESC                 "preauth secret key"
 *   ID                        id-at-zimbraPreAuthKey }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const zimbraPreAuthKey: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraPreAuthKey" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "preauth secret key" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraPreAuthKey /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
