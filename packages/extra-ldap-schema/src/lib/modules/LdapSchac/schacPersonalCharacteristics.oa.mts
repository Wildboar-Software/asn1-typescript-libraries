/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacPersonalCharacteristics } from "../LdapSchac/id-oc-schacPersonalCharacteristics.va.mjs";
import { schacCountryOfCitizenship } from "./schacCountryOfCitizenship.oa.mjs";
import { schacDateOfBirth } from "./schacDateOfBirth.oa.mjs";
import { schacGender } from "./schacGender.oa.mjs";
import { schacMotherTongue } from "./schacMotherTongue.oa.mjs";
import { schacPersonalTitle } from "./schacPersonalTitle.oa.mjs";
import { schacPlaceOfBirth } from "./schacPlaceOfBirth.oa.mjs";
import { schacSn1 } from "./schacSn1.oa.mjs";
import { schacSn2 } from "./schacSn2.oa.mjs";

/**
 * @summary schacPersonalCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacPersonalCharacteristics OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacMotherTongue
 *                               | schacGender
 *                               | schacDateOfBirth
 *                               | schacPlaceOfBirth
 *                               | schacCountryOfCitizenship
 *                               | schacSn1
 *                               | schacSn2
 *                               | schacPersonalTitle }
 *   LDAP-NAME                 {"schacPersonalCharacteristics"}
 *   LDAP-DESC                 "Personal characteristics describe the individual person represented by the entry"
 *   ID                        id-oc-schacPersonalCharacteristics }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacPersonalCharacteristics: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacMotherTongue, schacGender, schacDateOfBirth, schacPlaceOfBirth, schacCountryOfCitizenship, schacSn1, schacSn2, schacPersonalTitle] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacPersonalCharacteristics"],
    "&ldapDesc": "Personal characteristics describe the individual person represented by the entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacPersonalCharacteristics /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
