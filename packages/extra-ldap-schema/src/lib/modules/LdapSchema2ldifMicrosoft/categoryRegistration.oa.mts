/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_categoryRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-categoryRegistration.va.mjs";
import { localeID } from "../MSUser/localeID.oa.mjs";
import { categoryId } from "../MSUser/categoryId.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { localizedDescription } from "../MSUser/localizedDescription.oa.mjs";
// export { id_oc_categoryRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-categoryRegistration.va.mjs";


/**
 * @summary categoryRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * categoryRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { localeID
 *                               | categoryId
 *                               | managedBy
 *                               | localizedDescription }
 *   LDAP-NAME                 {"categoryRegistration"}
 *   ID                        id-oc-categoryRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const categoryRegistration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ localeID, categoryId, managedBy, localizedDescription, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "categoryRegistration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_categoryRegistration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
