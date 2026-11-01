/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_domainPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-domainPolicy.va.mjs";
import { authenticationOptions } from "../MSUser/authenticationOptions.oa.mjs";
import { forceLogoff } from "../MSUser/forceLogoff.oa.mjs";
import { defaultLocalPolicyObject } from "../MSUser/defaultLocalPolicyObject.oa.mjs";
import { lockoutDuration } from "../MSUser/lockoutDuration.oa.mjs";
import { lockOutObservationWindow } from "../MSUser/lockOutObservationWindow.oa.mjs";
import { lockoutThreshold } from "../MSUser/lockoutThreshold.oa.mjs";
import { maxPwdAge } from "../MSUser/maxPwdAge.oa.mjs";
import { maxRenewAge } from "../MSUser/maxRenewAge.oa.mjs";
import { maxTicketAge } from "../MSUser/maxTicketAge.oa.mjs";
import { minPwdAge } from "../MSUser/minPwdAge.oa.mjs";
import { minPwdLength } from "../MSUser/minPwdLength.oa.mjs";
import { minTicketAge } from "../MSUser/minTicketAge.oa.mjs";
import { pwdProperties } from "../MSUser/pwdProperties.oa.mjs";
import { pwdHistoryLength } from "../MSUser/pwdHistoryLength.oa.mjs";
import { proxyLifetime } from "../MSUser/proxyLifetime.oa.mjs";
import { eFSPolicy } from "../MSUser/eFSPolicy.oa.mjs";
import { publicKeyPolicy } from "../MSUser/publicKeyPolicy.oa.mjs";
import { domainWidePolicy } from "../MSUser/domainWidePolicy.oa.mjs";
import { domainPolicyReference } from "../MSUser/domainPolicyReference.oa.mjs";
import { qualityOfService } from "../MSUser/qualityOfService.oa.mjs";
import { ipsecPolicyReference } from "../MSUser/ipsecPolicyReference.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { domainCAs } from "../MSUser/domainCAs.oa.mjs";


/**
 * @summary domainPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { authenticationOptions
 *                               | forceLogoff
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | maxRenewAge
 *                               | maxTicketAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | minTicketAge
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | proxyLifetime
 *                               | eFSPolicy
 *                               | publicKeyPolicy
 *                               | domainWidePolicy
 *                               | domainPolicyReference
 *                               | qualityOfService
 *                               | ipsecPolicyReference
 *                               | managedBy
 *                               | domainCAs }
 *   LDAP-NAME                 {"domainPolicy"}
 *   ID                        id-oc-domainPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const domainPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ authenticationOptions, forceLogoff, defaultLocalPolicyObject, lockoutDuration, lockOutObservationWindow, lockoutThreshold, maxPwdAge, maxRenewAge, maxTicketAge, minPwdAge, minPwdLength, minTicketAge, pwdProperties, pwdHistoryLength, proxyLifetime, eFSPolicy, publicKeyPolicy, domainWidePolicy, domainPolicyReference, qualityOfService, ipsecPolicyReference, managedBy, domainCAs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "domainPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_domainPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

