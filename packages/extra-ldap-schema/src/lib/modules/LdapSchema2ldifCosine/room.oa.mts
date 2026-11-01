/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_room } from "../LdapSchema2ldifCosine/id-oc-room.va.mjs";

import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
/**
 * @summary room
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * room OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { roomNumber
 *                               | description
 *                               | seeAlso
 *                               | telephoneNumber }
 *   LDAP-NAME                 {"room"}
 *   ID                        id-oc-room }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const room: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ roomNumber, description, seeAlso, telephoneNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "room" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_room /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
