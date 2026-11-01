/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoMenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoMenuEntry.va.mjs";
import { gosaApplicationParameter } from "../LdapGosaCoreGosaSamba3/gosaApplicationParameter.oa.mjs";
import { gosaApplicationPriority } from "../LdapGosaCoreGosaSamba3/gosaApplicationPriority.oa.mjs";
// export { id_oc_gotoMenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoMenuEntry.va.mjs";


/**
 * @summary gotoMenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationParameter
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoMenuEntry"}
 *   LDAP-DESC                 "GOto - defines a menu entry (v2.7)"
 *   ID                        id-oc-gotoMenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoMenuEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaApplicationParameter, gosaApplicationPriority, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoMenuEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - defines a menu entry (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoMenuEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
