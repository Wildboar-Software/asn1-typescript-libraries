/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { iplanet_am_managed_group } from "../Ldapmigration71sunAm/iplanet-am-managed-group.oa.mjs";
// export { iplanet_am_managed_group } from "../Ldapmigration71sunAm/iplanet-am-managed-group.oa.mjs";
import { id_oc_iplanet_am_managed_static_group } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-static-group.va.mjs";
// export { id_oc_iplanet_am_managed_static_group } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-static-group.va.mjs";


/**
 * @summary iplanet_am_managed_static_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-static-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { iplanet-am-managed-group }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"iplanet-am-managed-static-group"}
 *   LDAP-DESC                 "Managed Static Group OC"
 *   ID                        id-oc-iplanet-am-managed-static-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_static_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ iplanet_am_managed_group, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-static-group" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Static Group OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_static_group /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
