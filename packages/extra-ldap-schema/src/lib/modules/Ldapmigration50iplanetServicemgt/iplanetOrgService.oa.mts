/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
// export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_iplanetOrgService } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetOrgService.va.mjs";
import { iplanetKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetKeyValue.oa.mjs";
import { iplanetXMLKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetXMLKeyValue.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_iplanetOrgService } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetOrgService.va.mjs";


/**
 * @summary iplanetOrgService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetOrgService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | description }
 *   LDAP-NAME                 {"iplanetOrgService"}
 *   LDAP-DESC                 "service information specific to organizations"
 *   ID                        id-oc-iplanetOrgService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetOrgService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanetKeyValue, iplanetXMLKeyValue, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanetOrgService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "service information specific to organizations" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetOrgService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
