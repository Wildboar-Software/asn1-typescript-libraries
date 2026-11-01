/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_iodineGroup } from "../LdapIodine/id-oc-iodineGroup.va.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
// export { id_oc_iodineGroup } from "../LdapIodine/id-oc-iodineGroup.va.mjs";


/**
 * @summary iodineGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iodineGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gidNumber
 *                               | description
 *                               | uniqueMember
 *                               | owner }
 *   LDAP-NAME                 {"iodineGroup"}
 *   ID                        id-oc-iodineGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iodineGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gidNumber, description, uniqueMember, owner, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iodineGroup" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iodineGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
