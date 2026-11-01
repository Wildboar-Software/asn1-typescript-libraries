/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { rubySyncAssociation } from "../LdapRubysync/rubySyncAssociation.oa.mjs";
// export { rubySyncAssociation } from "../LdapRubysync/rubySyncAssociation.oa.mjs";
import { id_oc_rubySyncIssueEntry } from "../LdapRubysync/id-oc-rubySyncIssueEntry.va.mjs";
import { rubySyncIssueScore } from "../LdapRubysync/rubySyncIssueScore.oa.mjs";
import { rubySyncIssueStatus } from "../LdapRubysync/rubySyncIssueStatus.oa.mjs";
import { rubySyncMatchValue } from "../LdapRubysync/rubySyncMatchValue.oa.mjs";
import { rubySyncSourceInfo } from "../LdapRubysync/rubySyncSourceInfo.oa.mjs";
import { rubySyncTargetInfo } from "../LdapRubysync/rubySyncTargetInfo.oa.mjs";
// export { id_oc_rubySyncIssueEntry } from "../LdapRubysync/id-oc-rubySyncIssueEntry.va.mjs";


/**
 * @summary rubySyncIssueEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncIssueEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { rubySyncAssociation }
 *   MAY CONTAIN               { rubySyncIssueScore
 *                               | rubySyncIssueStatus
 *                               | rubySyncMatchValue
 *                               | rubySyncSourceInfo
 *                               | rubySyncTargetInfo }
 *   LDAP-NAME                 {"rubySyncIssueEntry"}
 *   ID                        id-oc-rubySyncIssueEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncIssueEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ rubySyncAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rubySyncIssueScore, rubySyncIssueStatus, rubySyncMatchValue, rubySyncSourceInfo, rubySyncTargetInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rubySyncIssueEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rubySyncIssueEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
