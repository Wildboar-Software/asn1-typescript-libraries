/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQSiteLink } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQSiteLink.va.mjs";
import { mSMQCost } from "../MSUser/mSMQCost.oa.mjs";
import { mSMQSite1 } from "../MSUser/mSMQSite1.oa.mjs";
import { mSMQSite2 } from "../MSUser/mSMQSite2.oa.mjs";
import { mSMQSiteGates } from "../MSUser/mSMQSiteGates.oa.mjs";
import { mSMQSiteGatesMig } from "../MSUser/mSMQSiteGatesMig.oa.mjs";

/**
 * @summary mSMQSiteLink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQSiteLink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mSMQSite1
 *                               | mSMQSite2
 *                               | mSMQCost }
 *   MAY CONTAIN               { mSMQSiteGates
 *                               | mSMQSiteGatesMig }
 *   LDAP-NAME                 {"mSMQSiteLink"}
 *   ID                        id-oc-mSMQSiteLink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQSiteLink: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [mSMQSite1, mSMQSite2, mSMQCost] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mSMQSiteGates, mSMQSiteGatesMig] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mSMQSiteLink"],
    "&id": id_oc_mSMQSiteLink /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
