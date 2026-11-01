/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsLicenseUser } from "../LdapCommon389/id-oc-nsLicenseUser.va.mjs";
import { nsLicensedFor } from "../LdapCommon389/nsLicensedFor.oa.mjs";
import { nsLicenseStartTime } from "../LdapCommon389/nsLicenseStartTime.oa.mjs";
import { nsLicenseEndTime } from "../LdapCommon389/nsLicenseEndTime.oa.mjs";
// export { id_oc_nsLicenseUser } from "../LdapCommon389/id-oc-nsLicenseUser.va.mjs";


/**
 * @summary nsLicenseUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsLicenseUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { nsLicensedFor
 *                               | nsLicenseStartTime
 *                               | nsLicenseEndTime }
 *   LDAP-NAME                 {"nsLicenseUser"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsLicenseUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsLicenseUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsLicensedFor, nsLicenseStartTime, nsLicenseEndTime, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsLicenseUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsLicenseUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
