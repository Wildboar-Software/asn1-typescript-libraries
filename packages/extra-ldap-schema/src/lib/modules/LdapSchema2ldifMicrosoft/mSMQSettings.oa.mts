/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQSettings } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQSettings.va.mjs";

import { mSMQOwnerID } from "../MSUser/mSMQOwnerID.oa.mjs";
import { mSMQServices } from "../MSUser/mSMQServices.oa.mjs";
import { mSMQQMID } from "../MSUser/mSMQQMID.oa.mjs";
import { mSMQMigrated } from "../MSUser/mSMQMigrated.oa.mjs";
import { mSMQNt4Flags } from "../MSUser/mSMQNt4Flags.oa.mjs";
import { mSMQSiteName } from "../MSUser/mSMQSiteName.oa.mjs";
import { mSMQRoutingService } from "../MSUser/mSMQRoutingService.oa.mjs";
import { mSMQDsService } from "../MSUser/mSMQDsService.oa.mjs";
import { mSMQDependentClientService } from "../MSUser/mSMQDependentClientService.oa.mjs";
/**
 * @summary mSMQSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQOwnerID
 *                               | mSMQServices
 *                               | mSMQQMID
 *                               | mSMQMigrated
 *                               | mSMQNt4Flags
 *                               | mSMQSiteName
 *                               | mSMQRoutingService
 *                               | mSMQDsService
 *                               | mSMQDependentClientService }
 *   LDAP-NAME                 {"mSMQSettings"}
 *   ID                        id-oc-mSMQSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mSMQOwnerID, mSMQServices, mSMQQMID, mSMQMigrated, mSMQNt4Flags, mSMQSiteName, mSMQRoutingService, mSMQDsService, mSMQDependentClientService, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mSMQSettings" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mSMQSettings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
