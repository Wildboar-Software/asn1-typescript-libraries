/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_subnet } from "../LdapSchema2ldifMicrosoft/id-oc-subnet.va.mjs";

import { location } from "../MSUser/location.oa.mjs";
import { siteObject } from "../MSUser/siteObject.oa.mjs";
import { physicalLocationObject } from "../MSUser/physicalLocationObject.oa.mjs";
/**
 * @summary subnet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subnet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { location
 *                               | siteObject
 *                               | physicalLocationObject }
 *   LDAP-NAME                 {"subnet"}
 *   ID                        id-oc-subnet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const subnet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ location, siteObject, physicalLocationObject, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "subnet" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_subnet /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
