/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mstop } from "../MSUser/id-oc-mstop.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { adminDescription } from "./adminDescription.oa.mjs";
import { adminDisplayName } from "./adminDisplayName.oa.mjs";
import { allowedAttributes } from "./allowedAttributes.oa.mjs";
import { allowedAttributesEffective } from "./allowedAttributesEffective.oa.mjs";
import { allowedChildClasses } from "./allowedChildClasses.oa.mjs";
import { allowedChildClassesEffective } from "./allowedChildClassesEffective.oa.mjs";
import { bridgeheadServerListBL } from "./bridgeheadServerListBL.oa.mjs";
import { canonicalName } from "./canonicalName.oa.mjs";
import { dSASignature } from "./dSASignature.oa.mjs";
import { dSCorePropagationData } from "./dSCorePropagationData.oa.mjs";
import { directReports } from "./directReports.oa.mjs";
import { displayNamePrintable } from "./displayNamePrintable.oa.mjs";
import { extensionName } from "./extensionName.oa.mjs";
import { fRSMemberReferenceBL } from "./fRSMemberReferenceBL.oa.mjs";
import { fSMORoleOwner } from "./fSMORoleOwner.oa.mjs";
import { flags } from "./flags.oa.mjs";
import { fromEntry } from "./fromEntry.oa.mjs";
import { frsComputerReferenceBL } from "./frsComputerReferenceBL.oa.mjs";
import { instanceType } from "./instanceType.oa.mjs";
import { isCriticalSystemObject } from "./isCriticalSystemObject.oa.mjs";
import { isDeleted } from "./isDeleted.oa.mjs";
import { isPrivilegeHolder } from "./isPrivilegeHolder.oa.mjs";
import { isRecycled } from "./isRecycled.oa.mjs";
import { lastKnownParent } from "./lastKnownParent.oa.mjs";
import { mS_DS_ConsistencyChildCount } from "./mS-DS-ConsistencyChildCount.oa.mjs";
import { mS_DS_ConsistencyGuid } from "./mS-DS-ConsistencyGuid.oa.mjs";
import { managedObjects } from "./managedObjects.oa.mjs";
import { masteredBy } from "./masteredBy.oa.mjs";
import { memberOf } from "./memberOf.oa.mjs";
import { msCOM_PartitionSetLink } from "./msCOM-PartitionSetLink.oa.mjs";
import { msCOM_UserLink } from "./msCOM-UserLink.oa.mjs";
import { msDFSR_ComputerReferenceBL } from "./msDFSR-ComputerReferenceBL.oa.mjs";
import { msDFSR_MemberReferenceBL } from "./msDFSR-MemberReferenceBL.oa.mjs";
import { msDS_Approx_Immed_Subordinates } from "./msDS-Approx-Immed-Subordinates.oa.mjs";
import { msDS_AuthenticatedToAccountlist } from "./msDS-AuthenticatedToAccountlist.oa.mjs";
import { msDS_ClaimSharesPossibleValuesWithBL } from "./msDS-ClaimSharesPossibleValuesWithBL.oa.mjs";
import { msDS_EnabledFeatureBL } from "./msDS-EnabledFeatureBL.oa.mjs";
import { msDS_HostServiceAccountBL } from "./msDS-HostServiceAccountBL.oa.mjs";
import { msDS_IsDomainFor } from "./msDS-IsDomainFor.oa.mjs";
import { msDS_IsFullReplicaFor } from "./msDS-IsFullReplicaFor.oa.mjs";
import { msDS_IsPartialReplicaFor } from "./msDS-IsPartialReplicaFor.oa.mjs";
import { msDS_IsPrimaryComputerFor } from "./msDS-IsPrimaryComputerFor.oa.mjs";
import { msDS_KrbTgtLinkBl } from "./msDS-KrbTgtLinkBl.oa.mjs";
import { msDS_LastKnownRDN } from "./msDS-LastKnownRDN.oa.mjs";
import { msDS_LocalEffectiveDeletionTime } from "./msDS-LocalEffectiveDeletionTime.oa.mjs";
import { msDS_LocalEffectiveRecycleTime } from "./msDS-LocalEffectiveRecycleTime.oa.mjs";
import { msDS_MembersForAzRoleBL } from "./msDS-MembersForAzRoleBL.oa.mjs";
import { msDS_MembersOfResourcePropertyListBL } from "./msDS-MembersOfResourcePropertyListBL.oa.mjs";
import { msDS_NC_RO_Replica_Locations_BL } from "./msDS-NC-RO-Replica-Locations-BL.oa.mjs";
import { msDS_NCReplCursors } from "./msDS-NCReplCursors.oa.mjs";
import { msDS_NCReplInboundNeighbors } from "./msDS-NCReplInboundNeighbors.oa.mjs";
import { msDS_NCReplOutboundNeighbors } from "./msDS-NCReplOutboundNeighbors.oa.mjs";
import { msDS_NcType } from "./msDS-NcType.oa.mjs";
import { msDS_NonMembersBL } from "./msDS-NonMembersBL.oa.mjs";
import { msDS_OIDToGroupLinkBl } from "./msDS-OIDToGroupLinkBl.oa.mjs";
import { msDS_ObjectReferenceBL } from "./msDS-ObjectReferenceBL.oa.mjs";
import { msDS_OperationsForAzRoleBL } from "./msDS-OperationsForAzRoleBL.oa.mjs";
import { msDS_OperationsForAzTaskBL } from "./msDS-OperationsForAzTaskBL.oa.mjs";
import { msDS_PSOApplied } from "./msDS-PSOApplied.oa.mjs";
import { msDS_PrincipalName } from "./msDS-PrincipalName.oa.mjs";
import { msDS_ReplAttributeMetaData } from "./msDS-ReplAttributeMetaData.oa.mjs";
import { msDS_ReplValueMetaData } from "./msDS-ReplValueMetaData.oa.mjs";
import { msDS_ReplValueMetaDataExt } from "./msDS-ReplValueMetaDataExt.oa.mjs";
import { msDS_RevealedDSAs } from "./msDS-RevealedDSAs.oa.mjs";
import { msDS_RevealedListBL } from "./msDS-RevealedListBL.oa.mjs";
import { msDS_TDOEgressBL } from "./msDS-TDOEgressBL.oa.mjs";
import { msDS_TDOIngressBL } from "./msDS-TDOIngressBL.oa.mjs";
import { msDS_TasksForAzRoleBL } from "./msDS-TasksForAzRoleBL.oa.mjs";
import { msDS_TasksForAzTaskBL } from "./msDS-TasksForAzTaskBL.oa.mjs";
import { msDS_ValueTypeReferenceBL } from "./msDS-ValueTypeReferenceBL.oa.mjs";
import { msDS_parentdistname } from "./msDS-parentdistname.oa.mjs";
import { msDs_masteredBy } from "./msDs-masteredBy.oa.mjs";
import { msSFU30PosixMemberOf } from "./msSFU30PosixMemberOf.oa.mjs";
import { msds_memberOfTransitive } from "./msds-memberOfTransitive.oa.mjs";
import { msds_memberTransitive } from "./msds-memberTransitive.oa.mjs";
import { nTSecurityDescriptor } from "./nTSecurityDescriptor.oa.mjs";
import { netbootSCPBL } from "./netbootSCPBL.oa.mjs";
import { nonSecurityMemberBL } from "./nonSecurityMemberBL.oa.mjs";
import { objectCategory } from "./objectCategory.oa.mjs";
import { objectGUID } from "./objectGUID.oa.mjs";
import { objectVersion } from "./objectVersion.oa.mjs";
import { otherWellKnownObjects } from "./otherWellKnownObjects.oa.mjs";
import { ownerBL } from "./ownerBL.oa.mjs";
import { partialAttributeDeletionList } from "./partialAttributeDeletionList.oa.mjs";
import { partialAttributeSet } from "./partialAttributeSet.oa.mjs";
import { possibleInferiors } from "./possibleInferiors.oa.mjs";
import { proxiedObjectName } from "./proxiedObjectName.oa.mjs";
import { proxyAddresses } from "./proxyAddresses.oa.mjs";
import { queryPolicyBL } from "./queryPolicyBL.oa.mjs";
import { replPropertyMetaData } from "./replPropertyMetaData.oa.mjs";
import { replUpToDateVector } from "./replUpToDateVector.oa.mjs";
import { repsFrom } from "./repsFrom.oa.mjs";
import { repsTo } from "./repsTo.oa.mjs";
import { revision } from "./revision.oa.mjs";
import { sDRightsEffective } from "./sDRightsEffective.oa.mjs";
import { serverReferenceBL } from "./serverReferenceBL.oa.mjs";
import { showInAdvancedViewOnly } from "./showInAdvancedViewOnly.oa.mjs";
import { siteObjectBL } from "./siteObjectBL.oa.mjs";
import { subRefs } from "./subRefs.oa.mjs";
import { systemFlags } from "./systemFlags.oa.mjs";
import { uSNChanged } from "./uSNChanged.oa.mjs";
import { uSNCreated } from "./uSNCreated.oa.mjs";
import { uSNDSALastObjRemoved } from "./uSNDSALastObjRemoved.oa.mjs";
import { uSNIntersite } from "./uSNIntersite.oa.mjs";
import { uSNLastObjRem } from "./uSNLastObjRem.oa.mjs";
import { uSNSource } from "./uSNSource.oa.mjs";
import { url } from "./url.oa.mjs";
import { wWWHomePage } from "./wWWHomePage.oa.mjs";
import { wbemPath } from "./wbemPath.oa.mjs";
import { wellKnownObjects } from "./wellKnownObjects.oa.mjs";
import { whenChanged } from "./whenChanged.oa.mjs";
import { whenCreated } from "./whenCreated.oa.mjs";

/**
 * @summary mstop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mstop OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { objectClass
 *                               | instanceType
 *                               | nTSecurityDescriptor
 *                               | objectCategory }
 *   MAY CONTAIN               { commonName
 *                               | description
 *                               | distinguishedName
 *                               | whenCreated
 *                               | whenChanged
 *                               | subRefs
 *                               | displayName
 *                               | uSNCreated
 *                               | isDeleted
 *                               | dSASignature
 *                               | objectVersion
 *                               | repsTo
 *                               | repsFrom
 *                               | memberOf
 *                               | ownerBL
 *                               | uSNChanged
 *                               | uSNLastObjRem
 *                               | showInAdvancedViewOnly
 *                               | adminDisplayName
 *                               | proxyAddresses
 *                               | adminDescription
 *                               | extensionName
 *                               | uSNDSALastObjRemoved
 *                               | displayNamePrintable
 *                               | directReports
 *                               | wWWHomePage
 *                               | uSNIntersite
 *                               | name
 *                               | objectGUID
 *                               | replPropertyMetaData
 *                               | replUpToDateVector
 *                               | flags
 *                               | revision
 *                               | wbemPath
 *                               | fSMORoleOwner
 *                               | systemFlags
 *                               | siteObjectBL
 *                               | serverReferenceBL
 *                               | nonSecurityMemberBL
 *                               | queryPolicyBL
 *                               | wellKnownObjects
 *                               | isPrivilegeHolder
 *                               | partialAttributeSet
 *                               | managedObjects
 *                               | partialAttributeDeletionList
 *                               | url
 *                               | lastKnownParent
 *                               | bridgeheadServerListBL
 *                               | netbootSCPBL
 *                               | isCriticalSystemObject
 *                               | frsComputerReferenceBL
 *                               | fRSMemberReferenceBL
 *                               | uSNSource
 *                               | fromEntry
 *                               | allowedChildClasses
 *                               | allowedChildClassesEffective
 *                               | allowedAttributes
 *                               | allowedAttributesEffective
 *                               | possibleInferiors
 *                               | canonicalName
 *                               | proxiedObjectName
 *                               | sDRightsEffective
 *                               | dSCorePropagationData
 *                               | otherWellKnownObjects
 *                               | mS-DS-ConsistencyGuid
 *                               | mS-DS-ConsistencyChildCount
 *                               | masteredBy
 *                               | msCOM-PartitionSetLink
 *                               | msCOM-UserLink
 *                               | msDS-Approx-Immed-Subordinates
 *                               | msDS-NCReplCursors
 *                               | msDS-NCReplInboundNeighbors
 *                               | msDS-NCReplOutboundNeighbors
 *                               | msDS-ReplAttributeMetaData
 *                               | msDS-ReplValueMetaData
 *                               | msDS-NonMembersBL
 *                               | msDS-MembersForAzRoleBL
 *                               | msDS-OperationsForAzTaskBL
 *                               | msDS-TasksForAzTaskBL
 *                               | msDS-OperationsForAzRoleBL
 *                               | msDS-TasksForAzRoleBL
 *                               | msDs-masteredBy
 *                               | msDS-ObjectReferenceBL
 *                               | msDS-PrincipalName
 *                               | msDS-RevealedDSAs
 *                               | msDS-KrbTgtLinkBl
 *                               | msDS-IsFullReplicaFor
 *                               | msDS-IsDomainFor
 *                               | msDS-IsPartialReplicaFor
 *                               | msDS-AuthenticatedToAccountlist
 *                               | msDS-NC-RO-Replica-Locations-BL
 *                               | msDS-RevealedListBL
 *                               | msDS-PSOApplied
 *                               | msDS-NcType
 *                               | msDS-OIDToGroupLinkBl
 *                               | msDS-HostServiceAccountBL
 *                               | isRecycled
 *                               | msDS-LocalEffectiveDeletionTime
 *                               | msDS-LocalEffectiveRecycleTime
 *                               | msDS-LastKnownRDN
 *                               | msDS-EnabledFeatureBL
 *                               | msDS-ClaimSharesPossibleValuesWithBL
 *                               | msDS-MembersOfResourcePropertyListBL
 *                               | msDS-IsPrimaryComputerFor
 *                               | msDS-ValueTypeReferenceBL
 *                               | msDS-TDOIngressBL
 *                               | msDS-TDOEgressBL
 *                               | msDS-parentdistname
 *                               | msDS-ReplValueMetaDataExt
 *                               | msds-memberOfTransitive
 *                               | msds-memberTransitive
 *                               | msSFU30PosixMemberOf
 *                               | msDFSR-MemberReferenceBL
 *                               | msDFSR-ComputerReferenceBL }
 *   LDAP-NAME                 {"mstop"}
 *   ID                        id-oc-mstop }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mstop: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass, instanceType, nTSecurityDescriptor, objectCategory] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, description, distinguishedName, whenCreated, whenChanged, subRefs, displayName, uSNCreated, isDeleted, dSASignature, objectVersion, repsTo, repsFrom, memberOf, ownerBL, uSNChanged, uSNLastObjRem, showInAdvancedViewOnly, adminDisplayName, proxyAddresses, adminDescription, extensionName, uSNDSALastObjRemoved, displayNamePrintable, directReports, wWWHomePage, uSNIntersite, name, objectGUID, replPropertyMetaData, replUpToDateVector, flags, revision, wbemPath, fSMORoleOwner, systemFlags, siteObjectBL, serverReferenceBL, nonSecurityMemberBL, queryPolicyBL, wellKnownObjects, isPrivilegeHolder, partialAttributeSet, managedObjects, partialAttributeDeletionList, url, lastKnownParent, bridgeheadServerListBL, netbootSCPBL, isCriticalSystemObject, frsComputerReferenceBL, fRSMemberReferenceBL, uSNSource, fromEntry, allowedChildClasses, allowedChildClassesEffective, allowedAttributes, allowedAttributesEffective, possibleInferiors, canonicalName, proxiedObjectName, sDRightsEffective, dSCorePropagationData, otherWellKnownObjects, mS_DS_ConsistencyGuid, mS_DS_ConsistencyChildCount, masteredBy, msCOM_PartitionSetLink, msCOM_UserLink, msDS_Approx_Immed_Subordinates, msDS_NCReplCursors, msDS_NCReplInboundNeighbors, msDS_NCReplOutboundNeighbors, msDS_ReplAttributeMetaData, msDS_ReplValueMetaData, msDS_NonMembersBL, msDS_MembersForAzRoleBL, msDS_OperationsForAzTaskBL, msDS_TasksForAzTaskBL, msDS_OperationsForAzRoleBL, msDS_TasksForAzRoleBL, msDs_masteredBy, msDS_ObjectReferenceBL, msDS_PrincipalName, msDS_RevealedDSAs, msDS_KrbTgtLinkBl, msDS_IsFullReplicaFor, msDS_IsDomainFor, msDS_IsPartialReplicaFor, msDS_AuthenticatedToAccountlist, msDS_NC_RO_Replica_Locations_BL, msDS_RevealedListBL, msDS_PSOApplied, msDS_NcType, msDS_OIDToGroupLinkBl, msDS_HostServiceAccountBL, isRecycled, msDS_LocalEffectiveDeletionTime, msDS_LocalEffectiveRecycleTime, msDS_LastKnownRDN, msDS_EnabledFeatureBL, msDS_ClaimSharesPossibleValuesWithBL, msDS_MembersOfResourcePropertyListBL, msDS_IsPrimaryComputerFor, msDS_ValueTypeReferenceBL, msDS_TDOIngressBL, msDS_TDOEgressBL, msDS_parentdistname, msDS_ReplValueMetaDataExt, msds_memberOfTransitive, msds_memberTransitive, msSFU30PosixMemberOf, msDFSR_MemberReferenceBL, msDFSR_ComputerReferenceBL] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mstop"],
    "&id": id_oc_mstop /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
