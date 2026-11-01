/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { dSAQuality } from "../LdapSchema2ldifCosine/dSAQuality.oa.mjs";
import { id_oc_qualityLabelledData } from "../LdapSchema2ldifCosine/id-oc-qualityLabelledData.va.mjs";
import { subtreeMinimumQuality } from "../LdapSchema2ldifCosine/subtreeMinimumQuality.oa.mjs";
import { subtreeMaximumQuality } from "../LdapSchema2ldifCosine/subtreeMaximumQuality.oa.mjs";


/**
 * @summary qualityLabelledData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * qualityLabelledData OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { dSAQuality }
 *   MAY CONTAIN               { subtreeMinimumQuality
 *                               | subtreeMaximumQuality }
 *   LDAP-NAME                 {"qualityLabelledData"}
 *   ID                        id-oc-qualityLabelledData }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const qualityLabelledData: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dSAQuality, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ subtreeMinimumQuality, subtreeMaximumQuality, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "qualityLabelledData" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_qualityLabelledData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

