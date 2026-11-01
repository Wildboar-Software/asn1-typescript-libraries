/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_caretaker } from "../LdapIspenv/id-oc-caretaker.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
// export { id_oc_caretaker } from "../LdapIspenv/id-oc-caretaker.va.mjs";


/**
 * @summary caretaker
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caretaker OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { uid
 *                               | userPassword }
 *   MAY CONTAIN               { description
 *                               | owner }
 *   LDAP-NAME                 {"caretaker"}
 *   LDAP-DESC                 "For implementing administrative access control. This objectclass should be used to allow programs to bind to the LDAP tree."
 *   ID                        id-oc-caretaker }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const caretaker: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, owner, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "caretaker" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "For implementing administrative access control. This objectclass should be used to allow programs to bind to the LDAP tree." /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_caretaker /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
