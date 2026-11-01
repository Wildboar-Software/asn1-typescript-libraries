/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_classSchema } from "../LdapSchema2ldifMicrosoft/id-oc-classSchema.va.mjs";

import { possSuperiors } from "../MSUser/possSuperiors.oa.mjs";
import { mustContain } from "../MSUser/mustContain.oa.mjs";
import { mayContain } from "../MSUser/mayContain.oa.mjs";
import { rDNAttID } from "../MSUser/rDNAttID.oa.mjs";
import { auxiliaryClass } from "../MSUser/auxiliaryClass.oa.mjs";
import { lDAPDisplayName } from "../MSUser/lDAPDisplayName.oa.mjs";
import { schemaFlagsEx } from "../MSUser/schemaFlagsEx.oa.mjs";
import { systemOnly } from "../MSUser/systemOnly.oa.mjs";
import { systemPossSuperiors } from "../MSUser/systemPossSuperiors.oa.mjs";
import { systemMayContain } from "../MSUser/systemMayContain.oa.mjs";
import { systemMustContain } from "../MSUser/systemMustContain.oa.mjs";
import { systemAuxiliaryClass } from "../MSUser/systemAuxiliaryClass.oa.mjs";
import { defaultSecurityDescriptor } from "../MSUser/defaultSecurityDescriptor.oa.mjs";
import { defaultHidingValue } from "../MSUser/defaultHidingValue.oa.mjs";
import { classDisplayName } from "../MSUser/classDisplayName.oa.mjs";
import { isDefunct } from "../MSUser/isDefunct.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { subClassOf } from "../MSUser/subClassOf.oa.mjs";
import { governsID } from "../MSUser/governsID.oa.mjs";
import { objectClassCategory } from "../MSUser/objectClassCategory.oa.mjs";
import { schemaIDGUID } from "../MSUser/schemaIDGUID.oa.mjs";
import { defaultObjectCategory } from "../MSUser/defaultObjectCategory.oa.mjs";
/**
 * @summary classSchema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classSchema OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | subClassOf
 *                               | governsID
 *                               | objectClassCategory
 *                               | schemaIDGUID
 *                               | defaultObjectCategory }
 *   MAY CONTAIN               { possSuperiors
 *                               | mustContain
 *                               | mayContain
 *                               | rDNAttID
 *                               | auxiliaryClass
 *                               | lDAPDisplayName
 *                               | schemaFlagsEx
 *                               | systemOnly
 *                               | systemPossSuperiors
 *                               | systemMayContain
 *                               | systemMustContain
 *                               | systemAuxiliaryClass
 *                               | defaultSecurityDescriptor
 *                               | defaultHidingValue
 *                               | classDisplayName
 *                               | isDefunct }
 *   LDAP-NAME                 {"classSchema"}
 *   ID                        id-oc-classSchema }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classSchema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, subClassOf, governsID, objectClassCategory, schemaIDGUID, defaultObjectCategory, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ possSuperiors, mustContain, mayContain, rDNAttID, auxiliaryClass, lDAPDisplayName, schemaFlagsEx, systemOnly, systemPossSuperiors, systemMayContain, systemMustContain, systemAuxiliaryClass, defaultSecurityDescriptor, defaultHidingValue, classDisplayName, isDefunct, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "classSchema" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_classSchema /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
