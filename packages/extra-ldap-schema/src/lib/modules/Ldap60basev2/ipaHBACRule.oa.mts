/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
// export { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
// export { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
import { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";
import { sourceHost } from "../Ldap60basev2/sourceHost.oa.mjs";
import { sourceHostCategory } from "../Ldap60basev2/sourceHostCategory.oa.mjs";
import { serviceCategory } from "../Ldap60basev2/serviceCategory.oa.mjs";
import { memberService } from "../Ldap60basev2/memberService.oa.mjs";
import { externalHost } from "../Ldap60basev2/externalHost.oa.mjs";
import { accessTime } from "../Ldap60basev2/accessTime.oa.mjs";
// export { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";


/**
 * @summary ipaHBACRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHBACRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MUST CONTAIN              { accessRuleType }
 *   MAY CONTAIN               { sourceHost
 *                               | sourceHostCategory
 *                               | serviceCategory
 *                               | memberService
 *                               | externalHost
 *                               | accessTime }
 *   LDAP-NAME                 {"ipaHBACRule"}
 *   ID                        id-oc-ipaHBACRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHBACRule: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ accessRuleType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sourceHost, sourceHostCategory, serviceCategory, memberService, externalHost, accessTime, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaHBACRule" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHBACRule /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
