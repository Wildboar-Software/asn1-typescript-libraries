/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dicomHostname } from "../LdapDicom/dicomHostname.oa.mjs";
// export { id_oc_dicomNetworkConnection } from "../LdapDicom/id-oc-dicomNetworkConnection.va.mjs";


/**
 * @summary dicomNetworkConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomNetworkConnection OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomHostname }
 *   MAY CONTAIN               { commonName
 *                               | dicomPort
 *                               | dicomTLSCipherSuite
 *                               | dicomInstalled }
 *   LDAP-NAME                 {"dicomNetworkConnection"}
 *   LDAP-DESC                 "DICOM Network Connection information"
 *   ID                        id-oc-dicomNetworkConnection }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomNetworkConnection: OBJECT_CLASS = undefined;

/* eslint-enable */
