/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_typeLibrary } from "../LdapSchema2ldifMicrosoft/id-oc-typeLibrary.va.mjs";
import { cOMClassID } from "../MSUser/cOMClassID.oa.mjs";
import { cOMInterfaceID } from "../MSUser/cOMInterfaceID.oa.mjs";
import { cOMUniqueLIBID } from "../MSUser/cOMUniqueLIBID.oa.mjs";
// export { id_oc_typeLibrary } from "../LdapSchema2ldifMicrosoft/id-oc-typeLibrary.va.mjs";


/**
 * @summary typeLibrary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * typeLibrary OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { cOMClassID
 *                               | cOMInterfaceID
 *                               | cOMUniqueLIBID }
 *   LDAP-NAME                 {"typeLibrary"}
 *   ID                        id-oc-typeLibrary }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const typeLibrary: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ cOMClassID, cOMInterfaceID, cOMUniqueLIBID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "typeLibrary" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_typeLibrary /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
