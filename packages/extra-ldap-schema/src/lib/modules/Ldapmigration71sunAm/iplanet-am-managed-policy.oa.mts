/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { iplanet_am_named_policy_dn } from "../Ldapmigration71sunAm/iplanet-am-named-policy-dn.oa.mjs";
import { id_oc_iplanet_am_managed_policy } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-policy.va.mjs";


/**
 * @summary iplanet_am_managed_policy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-policy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-named-policy-dn }
 *   LDAP-NAME                 {"iplanet-am-managed-policy"}
 *   LDAP-DESC                 "Managed Name Policy OC"
 *   ID                        id-oc-iplanet-am-managed-policy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_policy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_named_policy_dn, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-policy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Name Policy OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_policy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

