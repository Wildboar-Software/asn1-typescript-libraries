/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_amavisAccount } from "../LdapAmavisd/id-oc-amavisAccount.va.mjs";
import { amavisVirusLover } from "../LdapAmavisd/amavisVirusLover.oa.mjs";
import { amavisBypassVirusChecks } from "../LdapAmavisd/amavisBypassVirusChecks.oa.mjs";
import { amavisSpamLover } from "../LdapAmavisd/amavisSpamLover.oa.mjs";
import { amavisBypassSpamChecks } from "../LdapAmavisd/amavisBypassSpamChecks.oa.mjs";
import { amavisBannedFilesLover } from "../LdapAmavisd/amavisBannedFilesLover.oa.mjs";
import { amavisBypassBannedChecks } from "../LdapAmavisd/amavisBypassBannedChecks.oa.mjs";
import { amavisBadHeaderLover } from "../LdapAmavisd/amavisBadHeaderLover.oa.mjs";
import { amavisBypassHeaderChecks } from "../LdapAmavisd/amavisBypassHeaderChecks.oa.mjs";
import { amavisSpamTagLevel } from "../LdapAmavisd/amavisSpamTagLevel.oa.mjs";
import { amavisSpamTag2Level } from "../LdapAmavisd/amavisSpamTag2Level.oa.mjs";
import { amavisSpamKillLevel } from "../LdapAmavisd/amavisSpamKillLevel.oa.mjs";
import { amavisWhitelistSender } from "../LdapAmavisd/amavisWhitelistSender.oa.mjs";
import { amavisBlacklistSender } from "../LdapAmavisd/amavisBlacklistSender.oa.mjs";
import { amavisSpamQuarantineTo } from "../LdapAmavisd/amavisSpamQuarantineTo.oa.mjs";
import { amavisVirusQuarantineTo } from "../LdapAmavisd/amavisVirusQuarantineTo.oa.mjs";
import { amavisBannedQuarantineTo } from "../LdapAmavisd/amavisBannedQuarantineTo.oa.mjs";
import { amavisBadHeaderQuarantineTo } from "../LdapAmavisd/amavisBadHeaderQuarantineTo.oa.mjs";
import { amavisArchiveQuarantineTo } from "../LdapAmavisd/amavisArchiveQuarantineTo.oa.mjs";
import { amavisSpamModifiesSubj } from "../LdapAmavisd/amavisSpamModifiesSubj.oa.mjs";
import { amavisLocal } from "../LdapAmavisd/amavisLocal.oa.mjs";
import { amavisMessageSizeLimit } from "../LdapAmavisd/amavisMessageSizeLimit.oa.mjs";
import { amavisWarnVirusRecip } from "../LdapAmavisd/amavisWarnVirusRecip.oa.mjs";
import { amavisWarnBannedRecip } from "../LdapAmavisd/amavisWarnBannedRecip.oa.mjs";
import { amavisWarnBadHeaderRecip } from "../LdapAmavisd/amavisWarnBadHeaderRecip.oa.mjs";
import { amavisVirusAdmin } from "../LdapAmavisd/amavisVirusAdmin.oa.mjs";
import { amavisNewVirusAdmin } from "../LdapAmavisd/amavisNewVirusAdmin.oa.mjs";
import { amavisSpamAdmin } from "../LdapAmavisd/amavisSpamAdmin.oa.mjs";
import { amavisBannedAdmin } from "../LdapAmavisd/amavisBannedAdmin.oa.mjs";
import { amavisBadHeaderAdmin } from "../LdapAmavisd/amavisBadHeaderAdmin.oa.mjs";
import { amavisBannedRuleNames } from "../LdapAmavisd/amavisBannedRuleNames.oa.mjs";
import { amavisSpamDsnCutoffLevel } from "../LdapAmavisd/amavisSpamDsnCutoffLevel.oa.mjs";
import { amavisSpamQuarantineCutoffLevel } from "../LdapAmavisd/amavisSpamQuarantineCutoffLevel.oa.mjs";
import { amavisSpamSubjectTag } from "../LdapAmavisd/amavisSpamSubjectTag.oa.mjs";
import { amavisSpamSubjectTag2 } from "../LdapAmavisd/amavisSpamSubjectTag2.oa.mjs";
import { amavisAddrExtensionVirus } from "../LdapAmavisd/amavisAddrExtensionVirus.oa.mjs";
import { amavisAddrExtensionSpam } from "../LdapAmavisd/amavisAddrExtensionSpam.oa.mjs";
import { amavisAddrExtensionBanned } from "../LdapAmavisd/amavisAddrExtensionBanned.oa.mjs";
import { amavisAddrExtensionBadHeader } from "../LdapAmavisd/amavisAddrExtensionBadHeader.oa.mjs";
import { amavisSpamTag3Level } from "../LdapAmavisd/amavisSpamTag3Level.oa.mjs";
import { amavisSpamSubjectTag3 } from "../LdapAmavisd/amavisSpamSubjectTag3.oa.mjs";
import { amavisUncheckedQuarantineTo } from "../LdapAmavisd/amavisUncheckedQuarantineTo.oa.mjs";
import { amavisCleanQuarantineTo } from "../LdapAmavisd/amavisCleanQuarantineTo.oa.mjs";
import { amavisUncheckedLover } from "../LdapAmavisd/amavisUncheckedLover.oa.mjs";
import { amavisForwardMethod } from "../LdapAmavisd/amavisForwardMethod.oa.mjs";
import { amavisSaUserConf } from "../LdapAmavisd/amavisSaUserConf.oa.mjs";
import { amavisSaUserName } from "../LdapAmavisd/amavisSaUserName.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary amavisAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * amavisAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { amavisVirusLover
 *                               | amavisBypassVirusChecks
 *                               | amavisSpamLover
 *                               | amavisBypassSpamChecks
 *                               | amavisBannedFilesLover
 *                               | amavisBypassBannedChecks
 *                               | amavisBadHeaderLover
 *                               | amavisBypassHeaderChecks
 *                               | amavisSpamTagLevel
 *                               | amavisSpamTag2Level
 *                               | amavisSpamKillLevel
 *                               | amavisWhitelistSender
 *                               | amavisBlacklistSender
 *                               | amavisSpamQuarantineTo
 *                               | amavisVirusQuarantineTo
 *                               | amavisBannedQuarantineTo
 *                               | amavisBadHeaderQuarantineTo
 *                               | amavisArchiveQuarantineTo
 *                               | amavisSpamModifiesSubj
 *                               | amavisLocal
 *                               | amavisMessageSizeLimit
 *                               | amavisWarnVirusRecip
 *                               | amavisWarnBannedRecip
 *                               | amavisWarnBadHeaderRecip
 *                               | amavisVirusAdmin
 *                               | amavisNewVirusAdmin
 *                               | amavisSpamAdmin
 *                               | amavisBannedAdmin
 *                               | amavisBadHeaderAdmin
 *                               | amavisBannedRuleNames
 *                               | amavisSpamDsnCutoffLevel
 *                               | amavisSpamQuarantineCutoffLevel
 *                               | amavisSpamSubjectTag
 *                               | amavisSpamSubjectTag2
 *                               | amavisAddrExtensionVirus
 *                               | amavisAddrExtensionSpam
 *                               | amavisAddrExtensionBanned
 *                               | amavisAddrExtensionBadHeader
 *                               | amavisSpamTag3Level
 *                               | amavisSpamSubjectTag3
 *                               | amavisUncheckedQuarantineTo
 *                               | amavisCleanQuarantineTo
 *                               | amavisUncheckedLover
 *                               | amavisForwardMethod
 *                               | amavisSaUserConf
 *                               | amavisSaUserName
 *                               | commonName
 *                               | description }
 *   LDAP-NAME                 {"amavisAccount"}
 *   LDAP-DESC                 "Amavisd Account"
 *   ID                        id-oc-amavisAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const amavisAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ amavisVirusLover, amavisBypassVirusChecks, amavisSpamLover, amavisBypassSpamChecks, amavisBannedFilesLover, amavisBypassBannedChecks, amavisBadHeaderLover, amavisBypassHeaderChecks, amavisSpamTagLevel, amavisSpamTag2Level, amavisSpamKillLevel, amavisWhitelistSender, amavisBlacklistSender, amavisSpamQuarantineTo, amavisVirusQuarantineTo, amavisBannedQuarantineTo, amavisBadHeaderQuarantineTo, amavisArchiveQuarantineTo, amavisSpamModifiesSubj, amavisLocal, amavisMessageSizeLimit, amavisWarnVirusRecip, amavisWarnBannedRecip, amavisWarnBadHeaderRecip, amavisVirusAdmin, amavisNewVirusAdmin, amavisSpamAdmin, amavisBannedAdmin, amavisBadHeaderAdmin, amavisBannedRuleNames, amavisSpamDsnCutoffLevel, amavisSpamQuarantineCutoffLevel, amavisSpamSubjectTag, amavisSpamSubjectTag2, amavisAddrExtensionVirus, amavisAddrExtensionSpam, amavisAddrExtensionBanned, amavisAddrExtensionBadHeader, amavisSpamTag3Level, amavisSpamSubjectTag3, amavisUncheckedQuarantineTo, amavisCleanQuarantineTo, amavisUncheckedLover, amavisForwardMethod, amavisSaUserConf, amavisSaUserName, commonName, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "amavisAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Amavisd Account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_amavisAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

