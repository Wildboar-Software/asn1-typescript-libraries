/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_group_container } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-group-container.va.mjs";


/**
 * @summary iplanet_am_managed_group_container
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-group-container OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"iplanet-am-managed-group-container"}
 *   LDAP-DESC                 "Managed Group Container OC"
 *   ID                        id-oc-iplanet-am-managed-group-container }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_group_container: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-group-container" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Group Container OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_group_container /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

