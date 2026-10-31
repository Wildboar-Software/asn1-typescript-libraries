/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_role } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-role.va.mjs";
import { iplanet_am_role_aci_description } from "./iplanet-am-role-aci-description.oa.mjs";
import { iplanet_am_role_aci_list } from "./iplanet-am-role-aci-list.oa.mjs";
import { iplanet_am_role_any_options } from "./iplanet-am-role-any-options.oa.mjs";
import { iplanet_am_role_description } from "./iplanet-am-role-description.oa.mjs";
import { iplanet_am_role_display_options } from "./iplanet-am-role-display-options.oa.mjs";
import { iplanet_am_role_managed_container_dn } from "./iplanet-am-role-managed-container-dn.oa.mjs";
import { iplanet_am_role_service_options } from "./iplanet-am-role-service-options.oa.mjs";
import { iplanet_am_role_type } from "./iplanet-am-role-type.oa.mjs";

/**
 * @summary iplanet_am_managed_role
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-role OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-role-type
 *                               | iplanet-am-role-description
 *                               | iplanet-am-role-aci-description
 *                               | iplanet-am-role-aci-list
 *                               | iplanet-am-role-service-options
 *                               | iplanet-am-role-any-options
 *                               | iplanet-am-role-managed-container-dn
 *                               | iplanet-am-role-display-options }
 *   LDAP-NAME                 {"iplanet-am-managed-role"}
 *   LDAP-DESC                 "Managed Role OC"
 *   ID                        id-oc-iplanet-am-managed-role }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_role: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iplanet_am_role_type, iplanet_am_role_description, iplanet_am_role_aci_description, iplanet_am_role_aci_list, iplanet_am_role_service_options, iplanet_am_role_any_options, iplanet_am_role_managed_container_dn, iplanet_am_role_display_options] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iplanet-am-managed-role"],
    "&ldapDesc": "Managed Role OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_role /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
