/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { id_oc_tjhsstRoom } from "../LdapIodine/id-oc-tjhsstRoom.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
/**
 * @summary tjhsstRoom
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstRoom OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { roomNumber }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | displayName }
 *   LDAP-NAME                 {"tjhsstRoom"}
 *   ID                        id-oc-tjhsstRoom }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstRoom: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ roomNumber, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, displayName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tjhsstRoom" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tjhsstRoom /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
