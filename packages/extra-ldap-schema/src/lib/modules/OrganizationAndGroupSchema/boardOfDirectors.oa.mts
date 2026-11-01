/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_boardOfDirectors } from "../OrganizationAndGroupSchema/id-oc-boardOfDirectors.va.mjs";

/**
 * @summary boardOfDirectors
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * boardOfDirectors OBJECT-CLASS ::= {
 *     SUBCLASS OF            {top}
 *     KIND                auxiliary
 *     MUST CONTAIN        {}
 *     MAY CONTAIN            {}
 *     LDAP-NAME            {"boardOfDirectors"}
 *     LDAP-DESC            "Board of Directors"
 *     ID                    id-oc-boardOfDirectors
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const boardOfDirectors: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "boardOfDirectors" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Board of Directors" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_boardOfDirectors /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
