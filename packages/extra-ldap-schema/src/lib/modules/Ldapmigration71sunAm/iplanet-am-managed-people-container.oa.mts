/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_people_container } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-people-container.va.mjs";


/**
 * @summary iplanet_am_managed_people_container
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-people-container OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"iplanet-am-managed-people-container"}
 *   LDAP-DESC                 "Managed People Container OC"
 *   ID                        id-oc-iplanet-am-managed-people-container }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_people_container: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-people-container" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed People Container OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_people_container /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

