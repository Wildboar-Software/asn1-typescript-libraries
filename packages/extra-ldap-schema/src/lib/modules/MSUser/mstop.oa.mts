/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mstop } from "../MSUser/id-oc-mstop.va.mjs";


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
const mstop: OBJECT_CLASS = undefined;

/* eslint-enable */
