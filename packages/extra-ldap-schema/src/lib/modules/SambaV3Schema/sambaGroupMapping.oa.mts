/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { sambaGroupType } from "../SambaV3Schema/sambaGroupType.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { sambaSIDList } from "../SambaV3Schema/sambaSIDList.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";


/**
 * @summary sambaGroupMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaGroupMapping OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {gidNumber | sambaGroupType | sambaSID}
 *     MAY CONTAIN     {description | displayName | sambaSIDList}
 *     LDAP-NAME       {"sambaGroupMapping"}
 *     LDAP-DESC       "Samba Group Mapping"
 *     ID              { 1 3 6 1 4 1 7165 2 2 4 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaGroupMapping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gidNumber, sambaGroupType, sambaSID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, displayName, sambaSIDList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaGroupMapping" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Group Mapping" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 4,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
