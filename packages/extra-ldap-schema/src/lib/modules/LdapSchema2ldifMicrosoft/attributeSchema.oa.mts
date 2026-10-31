/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_attributeSchema } from "../LdapSchema2ldifMicrosoft/id-oc-attributeSchema.va.mjs";
import { attributeID } from "../MSUser/attributeID.oa.mjs";
import { attributeSecurityGUID } from "../MSUser/attributeSecurityGUID.oa.mjs";
import { attributeSyntax } from "../MSUser/attributeSyntax.oa.mjs";
import { classDisplayName } from "../MSUser/classDisplayName.oa.mjs";
import { extendedCharsAllowed } from "../MSUser/extendedCharsAllowed.oa.mjs";
import { isDefunct } from "../MSUser/isDefunct.oa.mjs";
import { isEphemeral } from "../MSUser/isEphemeral.oa.mjs";
import { isMemberOfPartialAttributeSet } from "../MSUser/isMemberOfPartialAttributeSet.oa.mjs";
import { isSingleValued } from "../MSUser/isSingleValued.oa.mjs";
import { lDAPDisplayName } from "../MSUser/lDAPDisplayName.oa.mjs";
import { linkID } from "../MSUser/linkID.oa.mjs";
import { mAPIID } from "../MSUser/mAPIID.oa.mjs";
import { oMObjectClass } from "../MSUser/oMObjectClass.oa.mjs";
import { oMSyntax } from "../MSUser/oMSyntax.oa.mjs";
import { rangeLower } from "../MSUser/rangeLower.oa.mjs";
import { rangeUpper } from "../MSUser/rangeUpper.oa.mjs";
import { schemaFlagsEx } from "../MSUser/schemaFlagsEx.oa.mjs";
import { schemaIDGUID } from "../MSUser/schemaIDGUID.oa.mjs";
import { searchFlags } from "../MSUser/searchFlags.oa.mjs";
import { systemOnly } from "../MSUser/systemOnly.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary attributeSchema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * attributeSchema OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | attributeID
 *                               | attributeSyntax
 *                               | isSingleValued
 *                               | oMSyntax
 *                               | lDAPDisplayName
 *                               | schemaIDGUID }
 *   MAY CONTAIN               { rangeLower
 *                               | rangeUpper
 *                               | mAPIID
 *                               | linkID
 *                               | oMObjectClass
 *                               | searchFlags
 *                               | extendedCharsAllowed
 *                               | schemaFlagsEx
 *                               | attributeSecurityGUID
 *                               | systemOnly
 *                               | classDisplayName
 *                               | isMemberOfPartialAttributeSet
 *                               | isDefunct
 *                               | isEphemeral }
 *   LDAP-NAME                 {"attributeSchema"}
 *   ID                        id-oc-attributeSchema }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const attributeSchema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, attributeID, attributeSyntax, isSingleValued, oMSyntax, lDAPDisplayName, schemaIDGUID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [rangeLower, rangeUpper, mAPIID, linkID, oMObjectClass, searchFlags, extendedCharsAllowed, schemaFlagsEx, attributeSecurityGUID, systemOnly, classDisplayName, isMemberOfPartialAttributeSet, isDefunct, isEphemeral] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["attributeSchema"],
    "&id": id_oc_attributeSchema /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
