/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_configGroup } from "../LdapApacheFortress/id-oc-configGroup.va.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { configParameter } from "./configParameter.oa.mjs";
import { configProtocol } from "./configProtocol.oa.mjs";
import { ftProps } from "./ftProps.oa.mjs";
import { ftType } from "./ftType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [groupOfNames] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [configProtocol, ftType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [configParameter, ftProps] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["configGroup"],
    "&ldapDesc": "LDAP Configuration Group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_configGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
