/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { nsslapd_libPath } from "../LdapCore389/nsslapd-libPath.oa.mjs";
// export { nsslapd_libPath } from "../LdapCore389/nsslapd-libPath.oa.mjs";
import { id_oc_rewriterEntry } from "../LdapCore389/id-oc-rewriterEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsslapd_filterrewriter } from "../LdapCore389/nsslapd-filterrewriter.oa.mjs";
import { nsslapd_returnedAttrRewriter } from "../LdapCore389/nsslapd-returnedAttrRewriter.oa.mjs";
// export { id_oc_rewriterEntry } from "../LdapCore389/id-oc-rewriterEntry.va.mjs";


/**
 * @summary rewriterEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rewriterEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { nsslapd-libPath }
 *   MAY CONTAIN               { commonName
 *                               | nsslapd-filterrewriter
 *                               | nsslapd-returnedAttrRewriter }
 *   LDAP-NAME                 {"rewriterEntry"}
 *   ID                        id-oc-rewriterEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rewriterEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ nsslapd_libPath, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, nsslapd_filterrewriter, nsslapd_returnedAttrRewriter, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rewriterEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rewriterEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
