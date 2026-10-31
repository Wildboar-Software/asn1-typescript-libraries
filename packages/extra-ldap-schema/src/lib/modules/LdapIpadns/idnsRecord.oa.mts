/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { idnsName } from "../LdapIpadns/idnsName.oa.mjs";
// export { id_oc_idnsRecord } from "../LdapIpadns/id-oc-idnsRecord.va.mjs";


/**
 * @summary idnsRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsRecord OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { idnsName }
 *   MAY CONTAIN               { commonName
 *                               | idnsAllowDynUpdate
 *                               | dNSTTL
 *                               | dNSClass
 *                               | aRecord
 *                               | aAAARecord
 *                               | a6Record
 *                               | nSRecord
 *                               | cNAMERecord
 *                               | pTRRecord
 *                               | sRVRecord
 *                               | tXTRecord
 *                               | mxRecord
 *                               | mDRecord
 *                               | hInfoRecord
 *                               | mInfoRecord
 *                               | aFSDBRecord
 *                               | sigRecord
 *                               | keyRecord
 *                               | locRecord
 *                               | nXTRecord
 *                               | nAPTRRecord
 *                               | kXRecord
 *                               | certRecord
 *                               | dNameRecord
 *                               | dSRecord
 *                               | sSHFPRecord
 *                               | rRSIGRecord
 *                               | nSECRecord }
 *   LDAP-NAME                 {"idnsRecord"}
 *   LDAP-DESC                 "dns Record, usually a host"
 *   ID                        id-oc-idnsRecord }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsRecord: OBJECT_CLASS = undefined;

/* eslint-enable */
