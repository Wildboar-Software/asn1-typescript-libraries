/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ftAttributeSet } from "../LdapApacheFortress/id-oc-ftAttributeSet.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
import { ftId } from "./ftId.oa.mjs";
import { ftPA } from "./ftPA.oa.mjs";
import { ftPASet } from "./ftPASet.oa.mjs";
import { ftPASetType } from "./ftPASetType.oa.mjs";

/**
 * @summary ftAttributeSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftAttributeSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId
 *                               | ftPASet
 *                               | commonName }
 *   MAY CONTAIN               { ftPA
 *                               | ftPASetType
 *                               | description }
 *   LDAP-NAME                 {"ftAttributeSet"}
 *   LDAP-DESC                 "Fortress Attribute Set Structural Object Class"
 *   ID                        id-oc-ftAttributeSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftAttributeSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalUnit] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId, ftPASet, commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftPA, ftPASetType, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftAttributeSet"],
    "&ldapDesc": "Fortress Attribute Set Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftAttributeSet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
