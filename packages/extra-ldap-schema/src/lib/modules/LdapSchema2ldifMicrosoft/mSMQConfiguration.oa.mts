/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQConfiguration } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQConfiguration.va.mjs";

import { mSMQQuota } from "../MSUser/mSMQQuota.oa.mjs";
import { mSMQJournalQuota } from "../MSUser/mSMQJournalQuota.oa.mjs";
import { mSMQOwnerID } from "../MSUser/mSMQOwnerID.oa.mjs";
import { mSMQSites } from "../MSUser/mSMQSites.oa.mjs";
import { mSMQOutRoutingServers } from "../MSUser/mSMQOutRoutingServers.oa.mjs";
import { mSMQInRoutingServers } from "../MSUser/mSMQInRoutingServers.oa.mjs";
import { mSMQServiceType } from "../MSUser/mSMQServiceType.oa.mjs";
import { mSMQComputerType } from "../MSUser/mSMQComputerType.oa.mjs";
import { mSMQForeign } from "../MSUser/mSMQForeign.oa.mjs";
import { mSMQOSType } from "../MSUser/mSMQOSType.oa.mjs";
import { mSMQEncryptKey } from "../MSUser/mSMQEncryptKey.oa.mjs";
import { mSMQSignKey } from "../MSUser/mSMQSignKey.oa.mjs";
import { mSMQDependentClientServices } from "../MSUser/mSMQDependentClientServices.oa.mjs";
import { mSMQRoutingServices } from "../MSUser/mSMQRoutingServices.oa.mjs";
import { mSMQDsServices } from "../MSUser/mSMQDsServices.oa.mjs";
/**
 * @summary mSMQConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQQuota
 *                               | mSMQJournalQuota
 *                               | mSMQOwnerID
 *                               | mSMQSites
 *                               | mSMQOutRoutingServers
 *                               | mSMQInRoutingServers
 *                               | mSMQServiceType
 *                               | mSMQComputerType
 *                               | mSMQForeign
 *                               | mSMQOSType
 *                               | mSMQEncryptKey
 *                               | mSMQSignKey
 *                               | mSMQDependentClientServices
 *                               | mSMQRoutingServices
 *                               | mSMQDsServices }
 *   LDAP-NAME                 {"mSMQConfiguration"}
 *   ID                        id-oc-mSMQConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mSMQQuota, mSMQJournalQuota, mSMQOwnerID, mSMQSites, mSMQOutRoutingServers, mSMQInRoutingServers, mSMQServiceType, mSMQComputerType, mSMQForeign, mSMQOSType, mSMQEncryptKey, mSMQSignKey, mSMQDependentClientServices, mSMQRoutingServices, mSMQDsServices, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mSMQConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mSMQConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
