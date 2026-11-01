/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { id_oc_ftAttribute } from "../LdapApacheFortress/id-oc-ftAttribute.va.mjs";

import { ftPADataType } from "../LdapApacheFortress/ftPADataType.oa.mjs";
import { ftPADefaultValue } from "../LdapApacheFortress/ftPADefaultValue.oa.mjs";
import { ftPADefaultStrategy } from "../LdapApacheFortress/ftPADefaultStrategy.oa.mjs";
import { ftPADefaultOperator } from "../LdapApacheFortress/ftPADefaultOperator.oa.mjs";
import { ftPAValidVals } from "../LdapApacheFortress/ftPAValidVals.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftPASet } from "../LdapApacheFortress/ftPASet.oa.mjs";
import { ftPA } from "../LdapApacheFortress/ftPA.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
/**
 * @summary ftAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftAttribute OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftPASet
 *                               | ftPA
 *                               | commonName }
 *   MAY CONTAIN               { ftPADataType
 *                               | ftPADefaultValue
 *                               | ftPADefaultStrategy
 *                               | ftPADefaultOperator
 *                               | ftPAValidVals
 *                               | description }
 *   LDAP-NAME                 {"ftAttribute"}
 *   LDAP-DESC                 "Fortress Attribute Structural Object Class"
 *   ID                        id-oc-ftAttribute }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftAttribute: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ftPASet, ftPA, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftPADataType, ftPADefaultValue, ftPADefaultStrategy, ftPADefaultOperator, ftPAValidVals, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftAttribute" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Attribute Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftAttribute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
