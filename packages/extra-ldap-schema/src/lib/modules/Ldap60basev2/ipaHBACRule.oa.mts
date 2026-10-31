/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
import { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";
import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { accessTime } from "./accessTime.oa.mjs";
import { externalHost } from "./externalHost.oa.mjs";
import { memberService } from "./memberService.oa.mjs";
import { serviceCategory } from "./serviceCategory.oa.mjs";
import { sourceHost } from "./sourceHost.oa.mjs";
import { sourceHostCategory } from "./sourceHostCategory.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipaAssociation] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [accessRuleType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sourceHost, sourceHostCategory, serviceCategory, memberService, externalHost, accessTime] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaHBACRule"],
    "&id": id_oc_ipaHBACRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
