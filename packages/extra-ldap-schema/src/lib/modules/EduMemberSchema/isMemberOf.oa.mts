/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_isMemberOf } from "../EduMemberSchema/id-at-isMemberOf.va.mjs";


/**
 * @summary isMemberOf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * isMemberOf ATTRIBUTE ::= {
 *     WITH SYNTAX                UnboundedDirectoryString
 *     EQUALITY MATCHING RULE  caseExactMatch
 *     LDAP-SYNTAX                directoryString.&id
 *     LDAP-NAME                {"isMemberOf"}
 *     LDAP-DESC               "identifiers for entities that are members of the group"
 *     OBSOLETE                TRUE
 *     ID                        id-at-isMemberOf
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const isMemberOf: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "isMemberOf" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "identifiers for entities that are members of the group" /* OBJECT_FIELD_SETTING */,
    "&obsolete": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_isMemberOf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

