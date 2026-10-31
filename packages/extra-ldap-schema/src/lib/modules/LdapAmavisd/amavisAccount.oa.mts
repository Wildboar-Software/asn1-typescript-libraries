/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_amavisAccount } from "../LdapAmavisd/id-oc-amavisAccount.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { amavisAddrExtensionBadHeader } from "./amavisAddrExtensionBadHeader.oa.mjs";
import { amavisAddrExtensionBanned } from "./amavisAddrExtensionBanned.oa.mjs";
import { amavisAddrExtensionSpam } from "./amavisAddrExtensionSpam.oa.mjs";
import { amavisAddrExtensionVirus } from "./amavisAddrExtensionVirus.oa.mjs";
import { amavisArchiveQuarantineTo } from "./amavisArchiveQuarantineTo.oa.mjs";
import { amavisBadHeaderAdmin } from "./amavisBadHeaderAdmin.oa.mjs";
import { amavisBadHeaderLover } from "./amavisBadHeaderLover.oa.mjs";
import { amavisBadHeaderQuarantineTo } from "./amavisBadHeaderQuarantineTo.oa.mjs";
import { amavisBannedAdmin } from "./amavisBannedAdmin.oa.mjs";
import { amavisBannedFilesLover } from "./amavisBannedFilesLover.oa.mjs";
import { amavisBannedQuarantineTo } from "./amavisBannedQuarantineTo.oa.mjs";
import { amavisBannedRuleNames } from "./amavisBannedRuleNames.oa.mjs";
import { amavisBlacklistSender } from "./amavisBlacklistSender.oa.mjs";
import { amavisBypassBannedChecks } from "./amavisBypassBannedChecks.oa.mjs";
import { amavisBypassHeaderChecks } from "./amavisBypassHeaderChecks.oa.mjs";
import { amavisBypassSpamChecks } from "./amavisBypassSpamChecks.oa.mjs";
import { amavisBypassVirusChecks } from "./amavisBypassVirusChecks.oa.mjs";
import { amavisCleanQuarantineTo } from "./amavisCleanQuarantineTo.oa.mjs";
import { amavisForwardMethod } from "./amavisForwardMethod.oa.mjs";
import { amavisLocal } from "./amavisLocal.oa.mjs";
import { amavisMessageSizeLimit } from "./amavisMessageSizeLimit.oa.mjs";
import { amavisNewVirusAdmin } from "./amavisNewVirusAdmin.oa.mjs";
import { amavisSaUserConf } from "./amavisSaUserConf.oa.mjs";
import { amavisSaUserName } from "./amavisSaUserName.oa.mjs";
import { amavisSpamAdmin } from "./amavisSpamAdmin.oa.mjs";
import { amavisSpamDsnCutoffLevel } from "./amavisSpamDsnCutoffLevel.oa.mjs";
import { amavisSpamKillLevel } from "./amavisSpamKillLevel.oa.mjs";
import { amavisSpamLover } from "./amavisSpamLover.oa.mjs";
import { amavisSpamModifiesSubj } from "./amavisSpamModifiesSubj.oa.mjs";
import { amavisSpamQuarantineCutoffLevel } from "./amavisSpamQuarantineCutoffLevel.oa.mjs";
import { amavisSpamQuarantineTo } from "./amavisSpamQuarantineTo.oa.mjs";
import { amavisSpamSubjectTag } from "./amavisSpamSubjectTag.oa.mjs";
import { amavisSpamSubjectTag2 } from "./amavisSpamSubjectTag2.oa.mjs";
import { amavisSpamSubjectTag3 } from "./amavisSpamSubjectTag3.oa.mjs";
import { amavisSpamTag2Level } from "./amavisSpamTag2Level.oa.mjs";
import { amavisSpamTag3Level } from "./amavisSpamTag3Level.oa.mjs";
import { amavisSpamTagLevel } from "./amavisSpamTagLevel.oa.mjs";
import { amavisUncheckedLover } from "./amavisUncheckedLover.oa.mjs";
import { amavisUncheckedQuarantineTo } from "./amavisUncheckedQuarantineTo.oa.mjs";
import { amavisVirusAdmin } from "./amavisVirusAdmin.oa.mjs";
import { amavisVirusLover } from "./amavisVirusLover.oa.mjs";
import { amavisVirusQuarantineTo } from "./amavisVirusQuarantineTo.oa.mjs";
import { amavisWarnBadHeaderRecip } from "./amavisWarnBadHeaderRecip.oa.mjs";
import { amavisWarnBannedRecip } from "./amavisWarnBannedRecip.oa.mjs";
import { amavisWarnVirusRecip } from "./amavisWarnVirusRecip.oa.mjs";
import { amavisWhitelistSender } from "./amavisWhitelistSender.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [amavisVirusLover, amavisBypassVirusChecks, amavisSpamLover, amavisBypassSpamChecks, amavisBannedFilesLover, amavisBypassBannedChecks, amavisBadHeaderLover, amavisBypassHeaderChecks, amavisSpamTagLevel, amavisSpamTag2Level, amavisSpamKillLevel, amavisWhitelistSender, amavisBlacklistSender, amavisSpamQuarantineTo, amavisVirusQuarantineTo, amavisBannedQuarantineTo, amavisBadHeaderQuarantineTo, amavisArchiveQuarantineTo, amavisSpamModifiesSubj, amavisLocal, amavisMessageSizeLimit, amavisWarnVirusRecip, amavisWarnBannedRecip, amavisWarnBadHeaderRecip, amavisVirusAdmin, amavisNewVirusAdmin, amavisSpamAdmin, amavisBannedAdmin, amavisBadHeaderAdmin, amavisBannedRuleNames, amavisSpamDsnCutoffLevel, amavisSpamQuarantineCutoffLevel, amavisSpamSubjectTag, amavisSpamSubjectTag2, amavisAddrExtensionVirus, amavisAddrExtensionSpam, amavisAddrExtensionBanned, amavisAddrExtensionBadHeader, amavisSpamTag3Level, amavisSpamSubjectTag3, amavisUncheckedQuarantineTo, amavisCleanQuarantineTo, amavisUncheckedLover, amavisForwardMethod, amavisSaUserConf, amavisSaUserName, commonName, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["amavisAccount"],
    "&ldapDesc": "Amavisd Account" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_amavisAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
