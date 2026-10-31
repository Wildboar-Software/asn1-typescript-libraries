/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_iplanet_am_managed_org_unit } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-org-unit.va.mjs";


/**
 * @summary iplanet_am_managed_org_unit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-org-unit OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunPreferredDomain
 *                               | associatedDomain
 *                               | sunPreferredOrganization
 *                               | sunAdditionalTemplates
 *                               | sunOverrideTemplates
 *                               | sunRegisteredServiceName
 *                               | sunIdentityServerSupportedTypes }
 *   LDAP-NAME                 {"iplanet-am-managed-org-unit"}
 *   LDAP-DESC                 "Managed OrganizationalUnit OC"
 *   ID                        id-oc-iplanet-am-managed-org-unit }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_org_unit: OBJECT_CLASS = undefined;

/* eslint-enable */
