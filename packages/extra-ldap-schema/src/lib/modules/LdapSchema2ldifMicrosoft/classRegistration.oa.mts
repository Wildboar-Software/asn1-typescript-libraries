/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_classRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-classRegistration.va.mjs";
import { cOMCLSID } from "../MSUser/cOMCLSID.oa.mjs";
import { cOMInterfaceID } from "../MSUser/cOMInterfaceID.oa.mjs";
import { cOMOtherProgId } from "../MSUser/cOMOtherProgId.oa.mjs";
import { cOMProgID } from "../MSUser/cOMProgID.oa.mjs";
import { cOMTreatAsClassId } from "../MSUser/cOMTreatAsClassId.oa.mjs";
import { implementedCategories } from "../MSUser/implementedCategories.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { requiredCategories } from "../MSUser/requiredCategories.oa.mjs";

/**
 * @summary classRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * classRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { cOMInterfaceID
 *                               | cOMProgID
 *                               | cOMCLSID
 *                               | cOMTreatAsClassId
 *                               | cOMOtherProgId
 *                               | implementedCategories
 *                               | requiredCategories
 *                               | managedBy }
 *   LDAP-NAME                 {"classRegistration"}
 *   ID                        id-oc-classRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const classRegistration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [leaf] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [cOMInterfaceID, cOMProgID, cOMCLSID, cOMTreatAsClassId, cOMOtherProgId, implementedCategories, requiredCategories, managedBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["classRegistration"],
    "&id": id_oc_classRegistration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
