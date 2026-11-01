/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxFido2RegistrationEntry } from "../LdapOx/id-oc-oxFido2RegistrationEntry.va.mjs";

import { oxId } from "../LdapOx/oxId.oa.mjs";
import { creationDate } from "../LdapOx/creationDate.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { oxSessionStateId } from "../LdapOx/oxSessionStateId.oa.mjs";
import { oxCodeChallenge } from "../LdapOx/oxCodeChallenge.oa.mjs";
import { oxCodeChallengeHash } from "../LdapOx/oxCodeChallengeHash.oa.mjs";
import { oxPublicKeyId } from "../LdapOx/oxPublicKeyId.oa.mjs";
import { personInum } from "../LdapOx/personInum.oa.mjs";
import { oxRegistrationData } from "../LdapOx/oxRegistrationData.oa.mjs";
import { oxDeviceNotificationConf } from "../LdapOx/oxDeviceNotificationConf.oa.mjs";
import { oxCounter } from "../LdapOx/oxCounter.oa.mjs";
import { oxStatus } from "../LdapOx/oxStatus.oa.mjs";
/**
 * @summary oxFido2RegistrationEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxFido2RegistrationEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | creationDate
 *                               | displayName
 *                               | oxSessionStateId
 *                               | oxCodeChallenge
 *                               | oxCodeChallengeHash
 *                               | oxPublicKeyId
 *                               | personInum
 *                               | oxRegistrationData
 *                               | oxDeviceNotificationConf
 *                               | oxCounter
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxFido2RegistrationEntry"}
 *   ID                        id-oc-oxFido2RegistrationEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxFido2RegistrationEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxId, creationDate, displayName, oxSessionStateId, oxCodeChallenge, oxCodeChallengeHash, oxPublicKeyId, personInum, oxRegistrationData, oxDeviceNotificationConf, oxCounter, oxStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxFido2RegistrationEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxFido2RegistrationEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
