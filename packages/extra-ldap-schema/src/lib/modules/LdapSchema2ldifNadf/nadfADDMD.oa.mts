/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { addmdName } from "../LdapSchema2ldifNadf/addmdName.oa.mjs";
// export { addmdName } from "../LdapSchema2ldifNadf/addmdName.oa.mjs";
import { id_oc_nadfADDMD } from "../LdapSchema2ldifNadf/id-oc-nadfADDMD.va.mjs";
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
import { nadfObject } from "../LdapSchema2ldifNadf/nadfObject.oa.mjs";
// export { id_oc_nadfADDMD } from "../LdapSchema2ldifNadf/id-oc-nadfADDMD.va.mjs";


/**
 * @summary nadfADDMD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfADDMD OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organization
 *                               | nadfObject }
 *   MUST CONTAIN              { addmdName }
 *   LDAP-NAME                 {"nadfADDMD"}
 *   ID                        id-oc-nadfADDMD }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfADDMD: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organization, nadfObject, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ addmdName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nadfADDMD" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nadfADDMD /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
