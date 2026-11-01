/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { ipaEntitlementId } from "../Ldap60basev2/ipaEntitlementId.oa.mjs";
import { id_oc_ipaEntitlement } from "../Ldap60basev2/id-oc-ipaEntitlement.va.mjs";

import { userPKCS12 } from "../PKCS-9/userPKCS12.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
/**
 * @summary ipaEntitlement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaEntitlement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ipaEntitlementId }
 *   MAY CONTAIN               { userPKCS12
 *                               | userCertificate }
 *   LDAP-NAME                 {"ipaEntitlement"}
 *   LDAP-DESC                 "IPA Entitlement object"
 *   ID                        id-oc-ipaEntitlement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaEntitlement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ipaEntitlementId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPKCS12, userCertificate, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaEntitlement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA Entitlement object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaEntitlement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
