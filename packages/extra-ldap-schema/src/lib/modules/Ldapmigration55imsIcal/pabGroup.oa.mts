/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_pabGroup } from "../Ldapmigration55imsIcal/id-oc-pabGroup.va.mjs";

import { un } from "../Ldapmigration55imsIcal/un.oa.mjs";
import { memberOfPAB } from "../Ldapmigration55imsIcal/memberOfPAB.oa.mjs";
import { nickname } from "../Ldapmigration55imsIcal/nickname.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
/**
 * @summary pabGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pabGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { un
 *                               | memberOfPAB
 *                               | nickname
 *                               | description }
 *   LDAP-NAME                 {"pabGroup"}
 *   LDAP-DESC                 "structural class for defininig a PAB group"
 *   ID                        id-oc-pabGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pabGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ un, memberOfPAB, nickname, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pabGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "structural class for defininig a PAB group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pabGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
