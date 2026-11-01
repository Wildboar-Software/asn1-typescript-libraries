/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iodinePhoto } from "../LdapIodine/id-oc-iodinePhoto.va.mjs";
import { jpegPhoto } from "../LdapSchema2ldifInetorgperson/jpegPhoto.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { perm_showpictures } from "../LdapIodine/perm-showpictures.oa.mjs";
import { perm_showpictures_self } from "../LdapIodine/perm-showpictures-self.oa.mjs";
// export { id_oc_iodinePhoto } from "../LdapIodine/id-oc-iodinePhoto.va.mjs";


/**
 * @summary iodinePhoto
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iodinePhoto OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { jpegPhoto
 *                               | commonName }
 *   MAY CONTAIN               { perm-showpictures
 *                               | perm-showpictures-self }
 *   LDAP-NAME                 {"iodinePhoto"}
 *   ID                        id-oc-iodinePhoto }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iodinePhoto: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ jpegPhoto, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ perm_showpictures, perm_showpictures_self, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iodinePhoto" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iodinePhoto /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
