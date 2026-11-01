/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mstop } from "../MSUser/id-oc-mstop.va.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { instanceType } from "../MSUser/instanceType.oa.mjs";
import { nTSecurityDescriptor } from "../MSUser/nTSecurityDescriptor.oa.mjs";
import { objectCategory } from "../MSUser/objectCategory.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { whenCreated } from "../MSUser/whenCreated.oa.mjs";
import { whenChanged } from "../MSUser/whenChanged.oa.mjs";
import { subRefs } from "../MSUser/subRefs.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { uSNCreated } from "../MSUser/uSNCreated.oa.mjs";
import { isDeleted } from "../MSUser/isDeleted.oa.mjs";
import { dSASignature } from "../MSUser/dSASignature.oa.mjs";
import { objectVersion } from "../MSUser/objectVersion.oa.mjs";
import { repsTo } from "../MSUser/repsTo.oa.mjs";
import { repsFrom } from "../MSUser/repsFrom.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { ownerBL } from "../MSUser/ownerBL.oa.mjs";
import { uSNChanged } from "../MSUser/uSNChanged.oa.mjs";
import { uSNLastObjRem } from "../MSUser/uSNLastObjRem.oa.mjs";
import { showInAdvancedViewOnly } from "../MSUser/showInAdvancedViewOnly.oa.mjs";
import { adminDisplayName } from "../MSUser/adminDisplayName.oa.mjs";
import { proxyAddresses } from "../MSUser/proxyAddresses.oa.mjs";
import { adminDescription } from "../MSUser/adminDescription.oa.mjs";
import { extensionName } from "../MSUser/extensionName.oa.mjs";
import { uSNDSALastObjRemoved } from "../MSUser/uSNDSALastObjRemoved.oa.mjs";
import { displayNamePrintable } from "../MSUser/displayNamePrintable.oa.mjs";
import { directReports } from "../MSUser/directReports.oa.mjs";
import { wWWHomePage } from "../MSUser/wWWHomePage.oa.mjs";
import { uSNIntersite } from "../MSUser/uSNIntersite.oa.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { objectGUID } from "../MSUser/objectGUID.oa.mjs";
import { replPropertyMetaData } from "../MSUser/replPropertyMetaData.oa.mjs";
import { replUpToDateVector } from "../MSUser/replUpToDateVector.oa.mjs";
import { flags } from "../MSUser/flags.oa.mjs";
import { revision } from "../MSUser/revision.oa.mjs";
import { wbemPath } from "../MSUser/wbemPath.oa.mjs";
import { fSMORoleOwner } from "../MSUser/fSMORoleOwner.oa.mjs";
import { systemFlags } from "../MSUser/systemFlags.oa.mjs";
import { siteObjectBL } from "../MSUser/siteObjectBL.oa.mjs";
import { serverReferenceBL } from "../MSUser/serverReferenceBL.oa.mjs";
import { nonSecurityMemberBL } from "../MSUser/nonSecurityMemberBL.oa.mjs";
import { queryPolicyBL } from "../MSUser/queryPolicyBL.oa.mjs";
import { wellKnownObjects } from "../MSUser/wellKnownObjects.oa.mjs";
import { isPrivilegeHolder } from "../MSUser/isPrivilegeHolder.oa.mjs";
import { partialAttributeSet } from "../MSUser/partialAttributeSet.oa.mjs";
import { managedObjects } from "../MSUser/managedObjects.oa.mjs";
import { partialAttributeDeletionList } from "../MSUser/partialAttributeDeletionList.oa.mjs";
import { url } from "../MSUser/url.oa.mjs";
import { lastKnownParent } from "../MSUser/lastKnownParent.oa.mjs";
import { bridgeheadServerListBL } from "../MSUser/bridgeheadServerListBL.oa.mjs";
import { netbootSCPBL } from "../MSUser/netbootSCPBL.oa.mjs";
import { isCriticalSystemObject } from "../MSUser/isCriticalSystemObject.oa.mjs";
import { frsComputerReferenceBL } from "../MSUser/frsComputerReferenceBL.oa.mjs";
import { fRSMemberReferenceBL } from "../MSUser/fRSMemberReferenceBL.oa.mjs";
import { uSNSource } from "../MSUser/uSNSource.oa.mjs";
import { fromEntry } from "../MSUser/fromEntry.oa.mjs";
import { allowedChildClasses } from "../MSUser/allowedChildClasses.oa.mjs";
import { allowedChildClassesEffective } from "../MSUser/allowedChildClassesEffective.oa.mjs";
import { allowedAttributes } from "../MSUser/allowedAttributes.oa.mjs";
import { allowedAttributesEffective } from "../MSUser/allowedAttributesEffective.oa.mjs";
import { possibleInferiors } from "../MSUser/possibleInferiors.oa.mjs";
import { canonicalName } from "../MSUser/canonicalName.oa.mjs";
import { proxiedObjectName } from "../MSUser/proxiedObjectName.oa.mjs";
import { sDRightsEffective } from "../MSUser/sDRightsEffective.oa.mjs";
import { dSCorePropagationData } from "../MSUser/dSCorePropagationData.oa.mjs";
import { otherWellKnownObjects } from "../MSUser/otherWellKnownObjects.oa.mjs";
import { mS_DS_ConsistencyGuid } from "../MSUser/mS-DS-ConsistencyGuid.oa.mjs";
import { mS_DS_ConsistencyChildCount } from "../MSUser/mS-DS-ConsistencyChildCount.oa.mjs";
import { masteredBy } from "../MSUser/masteredBy.oa.mjs";
import { msCOM_PartitionSetLink } from "../MSUser/msCOM-PartitionSetLink.oa.mjs";
import { msCOM_UserLink } from "../MSUser/msCOM-UserLink.oa.mjs";
import { msDS_Approx_Immed_Subordinates } from "../MSUser/msDS-Approx-Immed-Subordinates.oa.mjs";
import { msDS_NCReplCursors } from "../MSUser/msDS-NCReplCursors.oa.mjs";
import { msDS_NCReplInboundNeighbors } from "../MSUser/msDS-NCReplInboundNeighbors.oa.mjs";
import { msDS_NCReplOutboundNeighbors } from "../MSUser/msDS-NCReplOutboundNeighbors.oa.mjs";
import { msDS_ReplAttributeMetaData } from "../MSUser/msDS-ReplAttributeMetaData.oa.mjs";
import { msDS_ReplValueMetaData } from "../MSUser/msDS-ReplValueMetaData.oa.mjs";
import { msDS_NonMembersBL } from "../MSUser/msDS-NonMembersBL.oa.mjs";
import { msDS_MembersForAzRoleBL } from "../MSUser/msDS-MembersForAzRoleBL.oa.mjs";
import { msDS_OperationsForAzTaskBL } from "../MSUser/msDS-OperationsForAzTaskBL.oa.mjs";
import { msDS_TasksForAzTaskBL } from "../MSUser/msDS-TasksForAzTaskBL.oa.mjs";
import { msDS_OperationsForAzRoleBL } from "../MSUser/msDS-OperationsForAzRoleBL.oa.mjs";
import { msDS_TasksForAzRoleBL } from "../MSUser/msDS-TasksForAzRoleBL.oa.mjs";
import { msDs_masteredBy } from "../MSUser/msDs-masteredBy.oa.mjs";
import { msDS_ObjectReferenceBL } from "../MSUser/msDS-ObjectReferenceBL.oa.mjs";
import { msDS_PrincipalName } from "../MSUser/msDS-PrincipalName.oa.mjs";
import { msDS_RevealedDSAs } from "../MSUser/msDS-RevealedDSAs.oa.mjs";
import { msDS_KrbTgtLinkBl } from "../MSUser/msDS-KrbTgtLinkBl.oa.mjs";
import { msDS_IsFullReplicaFor } from "../MSUser/msDS-IsFullReplicaFor.oa.mjs";
import { msDS_IsDomainFor } from "../MSUser/msDS-IsDomainFor.oa.mjs";
import { msDS_IsPartialReplicaFor } from "../MSUser/msDS-IsPartialReplicaFor.oa.mjs";
import { msDS_AuthenticatedToAccountlist } from "../MSUser/msDS-AuthenticatedToAccountlist.oa.mjs";
import { msDS_NC_RO_Replica_Locations_BL } from "../MSUser/msDS-NC-RO-Replica-Locations-BL.oa.mjs";
import { msDS_RevealedListBL } from "../MSUser/msDS-RevealedListBL.oa.mjs";
import { msDS_PSOApplied } from "../MSUser/msDS-PSOApplied.oa.mjs";
import { msDS_NcType } from "../MSUser/msDS-NcType.oa.mjs";
import { msDS_OIDToGroupLinkBl } from "../MSUser/msDS-OIDToGroupLinkBl.oa.mjs";
import { msDS_HostServiceAccountBL } from "../MSUser/msDS-HostServiceAccountBL.oa.mjs";
import { isRecycled } from "../MSUser/isRecycled.oa.mjs";
import { msDS_LocalEffectiveDeletionTime } from "../MSUser/msDS-LocalEffectiveDeletionTime.oa.mjs";
import { msDS_LocalEffectiveRecycleTime } from "../MSUser/msDS-LocalEffectiveRecycleTime.oa.mjs";
import { msDS_LastKnownRDN } from "../MSUser/msDS-LastKnownRDN.oa.mjs";
import { msDS_EnabledFeatureBL } from "../MSUser/msDS-EnabledFeatureBL.oa.mjs";
import { msDS_ClaimSharesPossibleValuesWithBL } from "../MSUser/msDS-ClaimSharesPossibleValuesWithBL.oa.mjs";
import { msDS_MembersOfResourcePropertyListBL } from "../MSUser/msDS-MembersOfResourcePropertyListBL.oa.mjs";
import { msDS_IsPrimaryComputerFor } from "../MSUser/msDS-IsPrimaryComputerFor.oa.mjs";
import { msDS_ValueTypeReferenceBL } from "../MSUser/msDS-ValueTypeReferenceBL.oa.mjs";
import { msDS_TDOIngressBL } from "../MSUser/msDS-TDOIngressBL.oa.mjs";
import { msDS_TDOEgressBL } from "../MSUser/msDS-TDOEgressBL.oa.mjs";
import { msDS_parentdistname } from "../MSUser/msDS-parentdistname.oa.mjs";
import { msDS_ReplValueMetaDataExt } from "../MSUser/msDS-ReplValueMetaDataExt.oa.mjs";
import { msds_memberOfTransitive } from "../MSUser/msds-memberOfTransitive.oa.mjs";
import { msds_memberTransitive } from "../MSUser/msds-memberTransitive.oa.mjs";
import { msSFU30PosixMemberOf } from "../MSUser/msSFU30PosixMemberOf.oa.mjs";
import { msDFSR_MemberReferenceBL } from "../MSUser/msDFSR-MemberReferenceBL.oa.mjs";
import { msDFSR_ComputerReferenceBL } from "../MSUser/msDFSR-ComputerReferenceBL.oa.mjs";
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
const mstop: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, instanceType, nTSecurityDescriptor, objectCategory, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, description, distinguishedName, whenCreated, whenChanged, subRefs, displayName, uSNCreated, isDeleted, dSASignature, objectVersion, repsTo, repsFrom, memberOf, ownerBL, uSNChanged, uSNLastObjRem, showInAdvancedViewOnly, adminDisplayName, proxyAddresses, adminDescription, extensionName, uSNDSALastObjRemoved, displayNamePrintable, directReports, wWWHomePage, uSNIntersite, name, objectGUID, replPropertyMetaData, replUpToDateVector, flags, revision, wbemPath, fSMORoleOwner, systemFlags, siteObjectBL, serverReferenceBL, nonSecurityMemberBL, queryPolicyBL, wellKnownObjects, isPrivilegeHolder, partialAttributeSet, managedObjects, partialAttributeDeletionList, url, lastKnownParent, bridgeheadServerListBL, netbootSCPBL, isCriticalSystemObject, frsComputerReferenceBL, fRSMemberReferenceBL, uSNSource, fromEntry, allowedChildClasses, allowedChildClassesEffective, allowedAttributes, allowedAttributesEffective, possibleInferiors, canonicalName, proxiedObjectName, sDRightsEffective, dSCorePropagationData, otherWellKnownObjects, mS_DS_ConsistencyGuid, mS_DS_ConsistencyChildCount, masteredBy, msCOM_PartitionSetLink, msCOM_UserLink, msDS_Approx_Immed_Subordinates, msDS_NCReplCursors, msDS_NCReplInboundNeighbors, msDS_NCReplOutboundNeighbors, msDS_ReplAttributeMetaData, msDS_ReplValueMetaData, msDS_NonMembersBL, msDS_MembersForAzRoleBL, msDS_OperationsForAzTaskBL, msDS_TasksForAzTaskBL, msDS_OperationsForAzRoleBL, msDS_TasksForAzRoleBL, msDs_masteredBy, msDS_ObjectReferenceBL, msDS_PrincipalName, msDS_RevealedDSAs, msDS_KrbTgtLinkBl, msDS_IsFullReplicaFor, msDS_IsDomainFor, msDS_IsPartialReplicaFor, msDS_AuthenticatedToAccountlist, msDS_NC_RO_Replica_Locations_BL, msDS_RevealedListBL, msDS_PSOApplied, msDS_NcType, msDS_OIDToGroupLinkBl, msDS_HostServiceAccountBL, isRecycled, msDS_LocalEffectiveDeletionTime, msDS_LocalEffectiveRecycleTime, msDS_LastKnownRDN, msDS_EnabledFeatureBL, msDS_ClaimSharesPossibleValuesWithBL, msDS_MembersOfResourcePropertyListBL, msDS_IsPrimaryComputerFor, msDS_ValueTypeReferenceBL, msDS_TDOIngressBL, msDS_TDOEgressBL, msDS_parentdistname, msDS_ReplValueMetaDataExt, msds_memberOfTransitive, msds_memberTransitive, msSFU30PosixMemberOf, msDFSR_MemberReferenceBL, msDFSR_ComputerReferenceBL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mstop" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mstop /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
