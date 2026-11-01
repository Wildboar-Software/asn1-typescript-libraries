/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
import { id_oc_ftAttributeSet } from "../LdapApacheFortress/id-oc-ftAttributeSet.va.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftPASet } from "../LdapApacheFortress/ftPASet.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { ftPA } from "../LdapApacheFortress/ftPA.oa.mjs";
import { ftPASetType } from "../LdapApacheFortress/ftPASetType.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalUnit, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ftPASet, commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftPA, ftPASetType, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftAttributeSet" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Attribute Set Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftAttributeSet /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

