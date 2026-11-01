/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_contactPerson } from "../Ldapab/id-oc-contactPerson.va.mjs";

import { anniversary } from "../Ldapab/anniversary.oa.mjs";
import { marker } from "../Ldapab/marker.oa.mjs";
import { birthday } from "../Ldapab/birthday.oa.mjs";
import { custom1 } from "../Ldapab/custom1.oa.mjs";
import { custom2 } from "../Ldapab/custom2.oa.mjs";
import { custom3 } from "../Ldapab/custom3.oa.mjs";
import { custom4 } from "../Ldapab/custom4.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
/**
 * @summary contactPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * contactPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { anniversary
 *                               | marker
 *                               | birthday
 *                               | custom1
 *                               | custom2
 *                               | custom3
 *                               | custom4
 *                               | countryName }
 *   LDAP-NAME                 {"contactPerson"}
 *   LDAP-DESC                 "Contact - Addressbook entry"
 *   ID                        id-oc-contactPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const contactPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ anniversary, marker, birthday, custom1, custom2, custom3, custom4, countryName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "contactPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Contact - Addressbook entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_contactPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
