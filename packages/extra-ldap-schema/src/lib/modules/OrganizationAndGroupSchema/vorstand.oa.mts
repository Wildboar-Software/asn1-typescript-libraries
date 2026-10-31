/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_vorstand } from "../OrganizationAndGroupSchema/id-oc-vorstand.va.mjs";

/**
 * @summary vorstand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vorstand OBJECT-CLASS ::= {
 *     SUBCLASS OF            {top}
 *     KIND                auxiliary
 *     MUST CONTAIN        {}
 *     MAY CONTAIN            {}
 *     LDAP-NAME            {"vorstand"}
 *     LDAP-DESC            "Vorstand"
 *     ID                    id-oc-vorstand
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vorstand: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["vorstand"],
    "&ldapDesc": "Vorstand" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_vorstand /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
