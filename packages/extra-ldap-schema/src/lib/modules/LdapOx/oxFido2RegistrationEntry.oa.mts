/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxFido2RegistrationEntry } from "../LdapOx/id-oc-oxFido2RegistrationEntry.va.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { oxCodeChallenge } from "./oxCodeChallenge.oa.mjs";
import { oxCodeChallengeHash } from "./oxCodeChallengeHash.oa.mjs";
import { oxCounter } from "./oxCounter.oa.mjs";
import { oxDeviceNotificationConf } from "./oxDeviceNotificationConf.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxPublicKeyId } from "./oxPublicKeyId.oa.mjs";
import { oxRegistrationData } from "./oxRegistrationData.oa.mjs";
import { oxSessionStateId } from "./oxSessionStateId.oa.mjs";
import { oxStatus } from "./oxStatus.oa.mjs";
import { personInum } from "./personInum.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, creationDate, displayName, oxSessionStateId, oxCodeChallenge, oxCodeChallengeHash, oxPublicKeyId, personInum, oxRegistrationData, oxDeviceNotificationConf, oxCounter, oxStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxFido2RegistrationEntry"],
    "&id": id_oc_oxFido2RegistrationEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
