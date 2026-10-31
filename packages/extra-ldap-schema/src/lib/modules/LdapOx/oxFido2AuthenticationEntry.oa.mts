/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxFido2AuthenticationEntry } from "../LdapOx/id-oc-oxFido2AuthenticationEntry.va.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { oxAuthenticationData } from "./oxAuthenticationData.oa.mjs";
import { oxCodeChallenge } from "./oxCodeChallenge.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxSessionStateId } from "./oxSessionStateId.oa.mjs";
import { oxStatus } from "./oxStatus.oa.mjs";
import { personInum } from "./personInum.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, creationDate, oxSessionStateId, oxCodeChallenge, personInum, oxAuthenticationData, oxStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxFido2AuthenticationEntry"],
    "&id": id_oc_oxFido2AuthenticationEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
