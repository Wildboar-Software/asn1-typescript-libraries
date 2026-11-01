/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_person } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-person.va.mjs";
import { iplanet_am_modifiable_by } from "../Ldapmigration71sunAm/iplanet-am-modifiable-by.oa.mjs";
import { iplanet_am_static_group_dn } from "../Ldapmigration71sunAm/iplanet-am-static-group-dn.oa.mjs";
import { iplanet_am_user_account_life } from "../Ldapmigration71sunAm/iplanet-am-user-account-life.oa.mjs";


/**
 * @summary iplanet_am_managed_person
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-person OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-modifiable-by
 *                               | iplanet-am-static-group-dn
 *                               | iplanet-am-user-account-life }
 *   LDAP-NAME                 {"iplanet-am-managed-person"}
 *   LDAP-DESC                 "Managed Person OC"
 *   ID                        id-oc-iplanet-am-managed-person }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_person: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_modifiable_by, iplanet_am_static_group_dn, iplanet_am_user_account_life, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-person" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Person OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_person /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

