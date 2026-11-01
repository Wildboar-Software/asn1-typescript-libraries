/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { iplanet_am_managed_group } from "../Ldapmigration71sunAm/iplanet-am-managed-group.oa.mjs";
import { id_oc_iplanet_am_managed_assignable_group } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-assignable-group.va.mjs";


/**
 * @summary iplanet_am_managed_assignable_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-assignable-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { iplanet-am-managed-group }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"iplanet-am-managed-assignable-group"}
 *   LDAP-DESC                 "Managed Assignable Group OC"
 *   ID                        id-oc-iplanet-am-managed-assignable-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_assignable_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ iplanet_am_managed_group, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-assignable-group" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Assignable Group OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_assignable_group /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

