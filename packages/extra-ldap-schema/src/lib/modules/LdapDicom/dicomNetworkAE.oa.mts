/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dicomNetworkAE } from "../LdapDicom/id-oc-dicomNetworkAE.va.mjs";


/**
 * @summary dicomNetworkAE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomNetworkAE OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomAETitle
 *                               | dicomNetworkConnectionReference
 *                               | dicomAssociationInitiator
 *                               | dicomAssociationAcceptor }
 *   MAY CONTAIN               { dicomDescription
 *                               | dicomVendorData
 *                               | dicomApplicationCluster
 *                               | dicomPreferredCalledAETitle
 *                               | dicomPreferredCallingAETitle
 *                               | dicomSupportedCharacterSet
 *                               | dicomInstalled }
 *   LDAP-NAME                 {"dicomNetworkAE"}
 *   LDAP-DESC                 "DICOM Network AE related information"
 *   ID                        id-oc-dicomNetworkAE }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomNetworkAE: OBJECT_CLASS = undefined;

/* eslint-enable */
