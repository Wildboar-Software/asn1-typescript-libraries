/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { memberUid } from "../NIS/memberUid.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";


/**
 * @summary posixGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * posixGroup OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {
 *         commonName
 *         | gidNumber
 *     }
 *     MAY CONTAIN        {
 *         userPassword
 *         | memberUid
 *         | description
 *     }
 *     LDAP-NAME        {"posixGroup"}
 *     LDAP-DESC        "Abstraction of a group of accounts"
 *     ID                { id-nis-oc 2 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const posixGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, gidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPassword, memberUid, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "posixGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of a group of accounts" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([2,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
