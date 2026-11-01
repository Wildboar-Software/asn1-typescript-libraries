/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_aCSResourceLimits } from "../LdapSchema2ldifMicrosoft/id-oc-aCSResourceLimits.va.mjs";
import { aCSMaxTokenRatePerFlow } from "../MSUser/aCSMaxTokenRatePerFlow.oa.mjs";
import { aCSMaxPeakBandwidthPerFlow } from "../MSUser/aCSMaxPeakBandwidthPerFlow.oa.mjs";
import { aCSServiceType } from "../MSUser/aCSServiceType.oa.mjs";
import { aCSAllocableRSVPBandwidth } from "../MSUser/aCSAllocableRSVPBandwidth.oa.mjs";
import { aCSMaxPeakBandwidth } from "../MSUser/aCSMaxPeakBandwidth.oa.mjs";
// export { id_oc_aCSResourceLimits } from "../LdapSchema2ldifMicrosoft/id-oc-aCSResourceLimits.va.mjs";


/**
 * @summary aCSResourceLimits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aCSResourceLimits OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { aCSMaxTokenRatePerFlow
 *                               | aCSMaxPeakBandwidthPerFlow
 *                               | aCSServiceType
 *                               | aCSAllocableRSVPBandwidth
 *                               | aCSMaxPeakBandwidth }
 *   LDAP-NAME                 {"aCSResourceLimits"}
 *   ID                        id-oc-aCSResourceLimits }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const aCSResourceLimits: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ aCSMaxTokenRatePerFlow, aCSMaxPeakBandwidthPerFlow, aCSServiceType, aCSAllocableRSVPBandwidth, aCSMaxPeakBandwidth, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "aCSResourceLimits" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_aCSResourceLimits /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
