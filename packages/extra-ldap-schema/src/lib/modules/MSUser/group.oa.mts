/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { groupType } from "../MSUser/groupType.oa.mjs";
import { id_oc_group } from "../MSUser/id-oc-group.va.mjs";
import { mstop } from "../MSUser/mstop.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { adminCount } from "./adminCount.oa.mjs";
import { controlAccessRights } from "./controlAccessRights.oa.mjs";
import { desktopProfile } from "./desktopProfile.oa.mjs";
import { groupAttributes } from "./groupAttributes.oa.mjs";
import { groupMembershipSAM } from "./groupMembershipSAM.oa.mjs";
import { managedBy } from "./managedBy.oa.mjs";
import { msDS_AzApplicationData } from "./msDS-AzApplicationData.oa.mjs";
import { msDS_AzBizRule } from "./msDS-AzBizRule.oa.mjs";
import { msDS_AzBizRuleLanguage } from "./msDS-AzBizRuleLanguage.oa.mjs";
import { msDS_AzGenericData } from "./msDS-AzGenericData.oa.mjs";
import { msDS_AzLDAPQuery } from "./msDS-AzLDAPQuery.oa.mjs";
import { msDS_AzLastImportedBizRulePath } from "./msDS-AzLastImportedBizRulePath.oa.mjs";
import { msDS_AzObjectGuid } from "./msDS-AzObjectGuid.oa.mjs";
import { msDS_NonMembers } from "./msDS-NonMembers.oa.mjs";
import { msDS_PrimaryComputer } from "./msDS-PrimaryComputer.oa.mjs";
import { msSFU30Name } from "./msSFU30Name.oa.mjs";
import { msSFU30NisDomain } from "./msSFU30NisDomain.oa.mjs";
import { msSFU30PosixMember } from "./msSFU30PosixMember.oa.mjs";
import { nTGroupMembers } from "./nTGroupMembers.oa.mjs";
import { nonSecurityMember } from "./nonSecurityMember.oa.mjs";
import { operatorCount } from "./operatorCount.oa.mjs";
import { primaryGroupToken } from "./primaryGroupToken.oa.mjs";

/**
 * @summary group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { mstop }
 *   MUST CONTAIN              { groupType }
 *   MAY CONTAIN               { member
 *                               | nTGroupMembers
 *                               | operatorCount
 *                               | adminCount
 *                               | groupAttributes
 *                               | groupMembershipSAM
 *                               | controlAccessRights
 *                               | desktopProfile
 *                               | nonSecurityMember
 *                               | managedBy
 *                               | primaryGroupToken
 *                               | msDS-AzLDAPQuery
 *                               | msDS-NonMembers
 *                               | msDS-AzBizRule
 *                               | msDS-AzBizRuleLanguage
 *                               | msDS-AzLastImportedBizRulePath
 *                               | msDS-AzApplicationData
 *                               | msDS-AzObjectGuid
 *                               | msDS-AzGenericData
 *                               | msDS-PrimaryComputer
 *                               | mail
 *                               | msSFU30Name
 *                               | msSFU30NisDomain
 *                               | msSFU30PosixMember }
 *   LDAP-NAME                 {"group"}
 *   ID                        id-oc-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [mstop] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [groupType] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [member, nTGroupMembers, operatorCount, adminCount, groupAttributes, groupMembershipSAM, controlAccessRights, desktopProfile, nonSecurityMember, managedBy, primaryGroupToken, msDS_AzLDAPQuery, msDS_NonMembers, msDS_AzBizRule, msDS_AzBizRuleLanguage, msDS_AzLastImportedBizRulePath, msDS_AzApplicationData, msDS_AzObjectGuid, msDS_AzGenericData, msDS_PrimaryComputer, mail, msSFU30Name, msSFU30NisDomain, msSFU30PosixMember] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["group"],
    "&id": id_oc_group /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
