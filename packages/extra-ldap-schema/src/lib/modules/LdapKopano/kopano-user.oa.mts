/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_kopano_user } from "../LdapKopano/id-oc-kopano-user.va.mjs";


/**
 * @summary kopano_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoQuotaOverride
 *                               | kopanoQuotaWarn
 *                               | kopanoQuotaSoft
 *                               | kopanoSendAsPrivilege
 *                               | kopanoQuotaHard
 *                               | kopanoAdmin
 *                               | kopanoSharedStoreOnly
 *                               | kopanoResourceType
 *                               | kopanoResourceCapacity
 *                               | kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoAliases
 *                               | kopanoUserServer
 *                               | kopanoEnabledFeatures
 *                               | kopanoDisabledFeatures
 *                               | kopanoUserArchiveServers
 *                               | kopanoUserArchiveCouplings
 *                               | uidNumber }
 *   LDAP-NAME                 {"kopano-user"}
 *   LDAP-DESC                 "KOPANO: an user of Kopano"
 *   ID                        id-oc-kopano-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_user: OBJECT_CLASS = undefined;

/* eslint-enable */
