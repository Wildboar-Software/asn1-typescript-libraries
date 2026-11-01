/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
// export { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { id_oc_configGroup } from "../LdapApacheFortress/id-oc-configGroup.va.mjs";
import { configProtocol } from "../LdapApacheFortress/configProtocol.oa.mjs";
import { ftType } from "../LdapApacheFortress/ftType.oa.mjs";
import { configParameter } from "../LdapApacheFortress/configParameter.oa.mjs";
import { ftProps } from "../LdapApacheFortress/ftProps.oa.mjs";
// export { id_oc_configGroup } from "../LdapApacheFortress/id-oc-configGroup.va.mjs";


/**
 * @summary configGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * configGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfNames }
 *   MUST CONTAIN              { configProtocol
 *                               | ftType }
 *   MAY CONTAIN               { configParameter
 *                               | ftProps }
 *   LDAP-NAME                 {"configGroup"}
 *   LDAP-DESC                 "LDAP Configuration Group"
 *   ID                        id-oc-configGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const configGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ groupOfNames, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ configProtocol, ftType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ configParameter, ftProps, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "configGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "LDAP Configuration Group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_configGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
