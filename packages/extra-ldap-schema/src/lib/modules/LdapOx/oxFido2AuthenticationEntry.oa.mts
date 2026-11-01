/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxFido2AuthenticationEntry } from "../LdapOx/id-oc-oxFido2AuthenticationEntry.va.mjs";

import { oxId } from "../LdapOx/oxId.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { oxSessionStateId } from "../LdapOx/oxSessionStateId.oa.mjs";
import { oxCodeChallenge } from "../LdapOx/oxCodeChallenge.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
import { oxAuthenticationData } from "../LdapOx/oxAuthenticationData.oa.mjs";
import { oxStatus } from "../LdapOx/oxStatus.oa.mjs";
/**
 * @summary oxFido2AuthenticationEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxFido2AuthenticationEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | creationDate
 *                               | oxSessionStateId
 *                               | oxCodeChallenge
 *                               | personInum
 *                               | oxAuthenticationData
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxFido2AuthenticationEntry"}
 *   ID                        id-oc-oxFido2AuthenticationEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxFido2AuthenticationEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, creationDate, oxSessionStateId, oxCodeChallenge, personInum, oxAuthenticationData, oxStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxFido2AuthenticationEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxFido2AuthenticationEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
