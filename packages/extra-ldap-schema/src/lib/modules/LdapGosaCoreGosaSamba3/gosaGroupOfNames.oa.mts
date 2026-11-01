/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaGroupOfNames } from "../LdapGosaCoreGosaSamba3/id-oc-gosaGroupOfNames.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaGroupObjects } from "../LdapGosaCoreGosaSamba3/gosaGroupObjects.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_gosaGroupOfNames } from "../LdapGosaCoreGosaSamba3/id-oc-gosaGroupOfNames.va.mjs";


/**
 * @summary gosaGroupOfNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaGroupOfNames OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gosaGroupObjects }
 *   MAY CONTAIN               { member
 *                               | description }
 *   LDAP-NAME                 {"gosaGroupOfNames"}
 *   LDAP-DESC                 "GOsa object grouping (v2.7)"
 *   ID                        id-oc-gosaGroupOfNames }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaGroupOfNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, gosaGroupObjects, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ member, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaGroupOfNames" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOsa object grouping (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaGroupOfNames /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
