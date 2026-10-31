/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSReplicaSet } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSReplicaSet.va.mjs";
import { fRSDSPoll } from "../MSUser/fRSDSPoll.oa.mjs";
import { fRSDirectoryFilter } from "../MSUser/fRSDirectoryFilter.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { fRSFileFilter } from "../MSUser/fRSFileFilter.oa.mjs";
import { fRSFlags } from "../MSUser/fRSFlags.oa.mjs";
import { fRSLevelLimit } from "../MSUser/fRSLevelLimit.oa.mjs";
import { fRSPartnerAuthLevel } from "../MSUser/fRSPartnerAuthLevel.oa.mjs";
import { fRSPrimaryMember } from "../MSUser/fRSPrimaryMember.oa.mjs";
import { fRSReplicaSetGUID } from "../MSUser/fRSReplicaSetGUID.oa.mjs";
import { fRSReplicaSetType } from "../MSUser/fRSReplicaSetType.oa.mjs";
import { fRSRootSecurity } from "../MSUser/fRSRootSecurity.oa.mjs";
import { fRSServiceCommand } from "../MSUser/fRSServiceCommand.oa.mjs";
import { fRSVersionGUID } from "../MSUser/fRSVersionGUID.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";

/**
 * @summary nTFRSReplicaSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSReplicaSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { fRSReplicaSetType
 *                               | fRSVersionGUID
 *                               | schedule
 *                               | fRSFileFilter
 *                               | fRSDirectoryFilter
 *                               | fRSDSPoll
 *                               | fRSServiceCommand
 *                               | fRSReplicaSetGUID
 *                               | fRSLevelLimit
 *                               | fRSRootSecurity
 *                               | fRSExtensions
 *                               | managedBy
 *                               | fRSFlags
 *                               | fRSPartnerAuthLevel
 *                               | fRSPrimaryMember }
 *   LDAP-NAME                 {"nTFRSReplicaSet"}
 *   ID                        id-oc-nTFRSReplicaSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSReplicaSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [fRSReplicaSetType, fRSVersionGUID, schedule, fRSFileFilter, fRSDirectoryFilter, fRSDSPoll, fRSServiceCommand, fRSReplicaSetGUID, fRSLevelLimit, fRSRootSecurity, fRSExtensions, managedBy, fRSFlags, fRSPartnerAuthLevel, fRSPrimaryMember] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nTFRSReplicaSet"],
    "&id": id_oc_nTFRSReplicaSet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
