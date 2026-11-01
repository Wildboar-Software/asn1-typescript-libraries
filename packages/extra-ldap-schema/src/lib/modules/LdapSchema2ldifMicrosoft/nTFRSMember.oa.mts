/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSMember } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSMember.va.mjs";
import { fRSUpdateTimeout } from "../MSUser/fRSUpdateTimeout.oa.mjs";
import { fRSServiceCommand } from "../MSUser/fRSServiceCommand.oa.mjs";
import { serverReference } from "../MSUser/serverReference.oa.mjs";
import { fRSRootSecurity } from "../MSUser/fRSRootSecurity.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { frsComputerReference } from "../MSUser/frsComputerReference.oa.mjs";
import { fRSControlDataCreation } from "../MSUser/fRSControlDataCreation.oa.mjs";
import { fRSControlInboundBacklog } from "../MSUser/fRSControlInboundBacklog.oa.mjs";
import { fRSControlOutboundBacklog } from "../MSUser/fRSControlOutboundBacklog.oa.mjs";
import { fRSFlags } from "../MSUser/fRSFlags.oa.mjs";
import { fRSPartnerAuthLevel } from "../MSUser/fRSPartnerAuthLevel.oa.mjs";


/**
 * @summary nTFRSMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSMember OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSUpdateTimeout
 *                               | fRSServiceCommand
 *                               | serverReference
 *                               | fRSRootSecurity
 *                               | fRSExtensions
 *                               | frsComputerReference
 *                               | fRSControlDataCreation
 *                               | fRSControlInboundBacklog
 *                               | fRSControlOutboundBacklog
 *                               | fRSFlags
 *                               | fRSPartnerAuthLevel }
 *   LDAP-NAME                 {"nTFRSMember"}
 *   ID                        id-oc-nTFRSMember }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSMember: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ fRSUpdateTimeout, fRSServiceCommand, serverReference, fRSRootSecurity, fRSExtensions, frsComputerReference, fRSControlDataCreation, fRSControlInboundBacklog, fRSControlOutboundBacklog, fRSFlags, fRSPartnerAuthLevel, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTFRSMember" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTFRSMember /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

