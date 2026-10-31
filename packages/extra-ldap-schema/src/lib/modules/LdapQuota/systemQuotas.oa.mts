/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { posixAccount } from "../NIS/posixAccount.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { quota } from "../LdapQuota/quota.oa.mjs";
// export { id_oc_systemQuotas } from "../LdapQuota/id-oc-systemQuotas.va.mjs";


/**
 * @summary systemQuotas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemQuotas OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixAccount }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { quota }
 *   LDAP-NAME                 {"systemQuotas"}
 *   LDAP-DESC                 "System Quotas"
 *   ID                        id-oc-systemQuotas }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const systemQuotas: OBJECT_CLASS = undefined;

/* eslint-enable */
