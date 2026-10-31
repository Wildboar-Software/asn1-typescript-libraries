/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { nextcloudEnabled } from "../LdapNextcloud/nextcloudEnabled.oa.mjs";
// export { id_oc_nextcloudGroup } from "../LdapNextcloud/id-oc-nextcloudGroup.va.mjs";


/**
 * @summary nextcloudGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nextcloudGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nextcloudEnabled }
 *   LDAP-NAME                 {"nextcloudGroup"}
 *   LDAP-DESC                 "A Nextcloud group"
 *   ID                        id-oc-nextcloudGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nextcloudGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
