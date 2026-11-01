/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_eduPersonEntitlement } from "../Ldappc/id-at-eduPersonEntitlement.va.mjs";


/**
 * @summary eduPersonEntitlement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduPersonEntitlement ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"eduPersonEntitlement"}
 *   LDAP-DESC                 "eduPerson per Internet2 and EDUCAUSE"
 *   ID                        id-at-eduPersonEntitlement }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const eduPersonEntitlement: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "eduPersonEntitlement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "eduPerson per Internet2 and EDUCAUSE" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_eduPersonEntitlement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

