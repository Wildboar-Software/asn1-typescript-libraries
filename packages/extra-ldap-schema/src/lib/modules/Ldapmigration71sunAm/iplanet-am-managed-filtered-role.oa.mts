/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { iplanet_am_managed_role } from "../Ldapmigration71sunAm/iplanet-am-managed-role.oa.mjs";
// export { iplanet_am_managed_role } from "../Ldapmigration71sunAm/iplanet-am-managed-role.oa.mjs";
import { id_oc_iplanet_am_managed_filtered_role } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-filtered-role.va.mjs";
// export { id_oc_iplanet_am_managed_filtered_role } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-filtered-role.va.mjs";


/**
 * @summary iplanet_am_managed_filtered_role
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-filtered-role OBJECT-CLASS ::= {
 *   SUBCLASS OF               { iplanet-am-managed-role }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"iplanet-am-managed-filtered-role"}
 *   LDAP-DESC                 "Managed Filtered Role OC"
 *   ID                        id-oc-iplanet-am-managed-filtered-role }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_filtered_role: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ iplanet_am_managed_role, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-filtered-role" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Filtered Role OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_filtered_role /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
