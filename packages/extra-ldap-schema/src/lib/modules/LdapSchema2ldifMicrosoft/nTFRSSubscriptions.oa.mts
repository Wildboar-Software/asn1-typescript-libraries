/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSSubscriptions } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriptions.va.mjs";

import { fRSWorkingPath } from "../MSUser/fRSWorkingPath.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { fRSVersion } from "../MSUser/fRSVersion.oa.mjs";
/**
 * @summary nTFRSSubscriptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSubscriptions OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSWorkingPath
 *                               | fRSExtensions
 *                               | fRSVersion }
 *   LDAP-NAME                 {"nTFRSSubscriptions"}
 *   ID                        id-oc-nTFRSSubscriptions }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSubscriptions: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ fRSWorkingPath, fRSExtensions, fRSVersion, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTFRSSubscriptions" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTFRSSubscriptions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
