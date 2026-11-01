/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_inetMailGroupManagement } from "../Ldapmigration56imsSchema/id-oc-inetMailGroupManagement.va.mjs";
import { mgmanAllowSubscribe } from "../Ldapmigration56imsSchema/mgmanAllowSubscribe.oa.mjs";
import { mgmanDenySubscribe } from "../Ldapmigration56imsSchema/mgmanDenySubscribe.oa.mjs";
import { mgmanHidden } from "../Ldapmigration56imsSchema/mgmanHidden.oa.mjs";
import { mgmanJoinability } from "../Ldapmigration56imsSchema/mgmanJoinability.oa.mjs";
import { mgmanVisibility } from "../Ldapmigration56imsSchema/mgmanVisibility.oa.mjs";
import { mgmanMemberVisibility } from "../Ldapmigration56imsSchema/mgmanMemberVisibility.oa.mjs";
import { mgmanIntroText } from "../Ldapmigration56imsSchema/mgmanIntroText.oa.mjs";
import { mgmanGoodbyeText } from "../Ldapmigration56imsSchema/mgmanGoodbyeText.oa.mjs";
import { multiLineDescription } from "../LdapCore389/multiLineDescription.oa.mjs";
// export { id_oc_inetMailGroupManagement } from "../Ldapmigration56imsSchema/id-oc-inetMailGroupManagement.va.mjs";


/**
 * @summary inetMailGroupManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetMailGroupManagement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mgmanAllowSubscribe
 *                               | mgmanDenySubscribe
 *                               | mgmanHidden
 *                               | mgmanJoinability
 *                               | mgmanVisibility
 *                               | mgmanMemberVisibility
 *                               | mgmanIntroText
 *                               | mgmanGoodbyeText
 *                               | multiLineDescription }
 *   LDAP-NAME                 {"inetMailGroupManagement"}
 *   LDAP-DESC                 "auxiliary class for managed mailing lists"
 *   ID                        id-oc-inetMailGroupManagement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const inetMailGroupManagement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mgmanAllowSubscribe, mgmanDenySubscribe, mgmanHidden, mgmanJoinability, mgmanVisibility, mgmanMemberVisibility, mgmanIntroText, mgmanGoodbyeText, multiLineDescription, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetMailGroupManagement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "auxiliary class for managed mailing lists" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_inetMailGroupManagement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
