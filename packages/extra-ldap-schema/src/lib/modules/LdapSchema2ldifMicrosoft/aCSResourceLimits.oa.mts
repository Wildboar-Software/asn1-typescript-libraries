/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_aCSResourceLimits } from "../LdapSchema2ldifMicrosoft/id-oc-aCSResourceLimits.va.mjs";
import { aCSAllocableRSVPBandwidth } from "../MSUser/aCSAllocableRSVPBandwidth.oa.mjs";
import { aCSMaxPeakBandwidth } from "../MSUser/aCSMaxPeakBandwidth.oa.mjs";
import { aCSMaxPeakBandwidthPerFlow } from "../MSUser/aCSMaxPeakBandwidthPerFlow.oa.mjs";
import { aCSMaxTokenRatePerFlow } from "../MSUser/aCSMaxTokenRatePerFlow.oa.mjs";
import { aCSServiceType } from "../MSUser/aCSServiceType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [aCSMaxTokenRatePerFlow, aCSMaxPeakBandwidthPerFlow, aCSServiceType, aCSAllocableRSVPBandwidth, aCSMaxPeakBandwidth] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["aCSResourceLimits"],
    "&id": id_oc_aCSResourceLimits /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
