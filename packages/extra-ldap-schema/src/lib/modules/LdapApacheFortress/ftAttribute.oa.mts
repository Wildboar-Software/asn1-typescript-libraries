/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ftAttribute } from "../LdapApacheFortress/id-oc-ftAttribute.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { ftId } from "./ftId.oa.mjs";
import { ftPA } from "./ftPA.oa.mjs";
import { ftPADataType } from "./ftPADataType.oa.mjs";
import { ftPADefaultOperator } from "./ftPADefaultOperator.oa.mjs";
import { ftPADefaultStrategy } from "./ftPADefaultStrategy.oa.mjs";
import { ftPADefaultValue } from "./ftPADefaultValue.oa.mjs";
import { ftPASet } from "./ftPASet.oa.mjs";
import { ftPAValidVals } from "./ftPAValidVals.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalRole] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId, ftPASet, ftPA, commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftPADataType, ftPADefaultValue, ftPADefaultStrategy, ftPADefaultOperator, ftPAValidVals, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftAttribute"],
    "&ldapDesc": "Fortress Attribute Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftAttribute /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
