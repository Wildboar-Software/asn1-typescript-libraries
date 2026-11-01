/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_autoMemberDefinition } from "../LdapAutoMemberPlugin/id-oc-autoMemberDefinition.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { autoMemberScope } from "../LdapAutoMemberPlugin/autoMemberScope.oa.mjs";
import { autoMemberFilter } from "../LdapAutoMemberPlugin/autoMemberFilter.oa.mjs";
import { autoMemberGroupingAttr } from "../LdapAutoMemberPlugin/autoMemberGroupingAttr.oa.mjs";
import { autoMemberDefaultGroup } from "../LdapAutoMemberPlugin/autoMemberDefaultGroup.oa.mjs";
import { autoMemberDisabled } from "../LdapAutoMemberPlugin/autoMemberDisabled.oa.mjs";


/**
 * @summary autoMemberDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * autoMemberDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | autoMemberScope
 *                               | autoMemberFilter
 *                               | autoMemberGroupingAttr }
 *   MAY CONTAIN               { autoMemberDefaultGroup
 *                               | autoMemberDisabled }
 *   LDAP-NAME                 {"autoMemberDefinition"}
 *   LDAP-DESC                 "Auto Membership Config Definition Entry"
 *   ID                        id-oc-autoMemberDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const autoMemberDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, autoMemberScope, autoMemberFilter, autoMemberGroupingAttr, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ autoMemberDefaultGroup, autoMemberDisabled, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "autoMemberDefinition" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auto Membership Config Definition Entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_autoMemberDefinition /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

