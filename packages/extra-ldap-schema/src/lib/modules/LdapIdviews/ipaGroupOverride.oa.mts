/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipaOverrideAnchor } from "../LdapIdviews/ipaOverrideAnchor.oa.mjs";
// export { ipaOverrideAnchor } from "../LdapIdviews/ipaOverrideAnchor.oa.mjs";
import { id_oc_ipaGroupOverride } from "../LdapIdviews/id-oc-ipaGroupOverride.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_ipaGroupOverride } from "../LdapIdviews/id-oc-ipaGroupOverride.va.mjs";


/**
 * @summary ipaGroupOverride
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaGroupOverride OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaOverrideAnchor }
 *   MAY CONTAIN               { gidNumber
 *                               | commonName }
 *   LDAP-NAME                 {"ipaGroupOverride"}
 *   LDAP-DESC                 "Override for Group Attributes"
 *   ID                        id-oc-ipaGroupOverride }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaGroupOverride: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaOverrideAnchor, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gidNumber, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaGroupOverride" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Override for Group Attributes" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaGroupOverride /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
