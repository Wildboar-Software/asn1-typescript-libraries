/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { posixAccount } from "../NIS/posixAccount.oa.mjs";
// export { posixAccount } from "../NIS/posixAccount.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { quota } from "../LdapQuota/quota.oa.mjs";
// export { quota } from "../LdapQuota/quota.oa.mjs";
import { id_oc_systemQuotas } from "../LdapQuota/id-oc-systemQuotas.va.mjs";
// export { id_oc_systemQuotas } from "../LdapQuota/id-oc-systemQuotas.va.mjs";


/**
 * @summary systemQuotas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemQuotas OBJECT-CLASS ::= {
 *   SUBCLASS OF               { posixAccount }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { quota }
 *   LDAP-NAME                 {"systemQuotas"}
 *   LDAP-DESC                 "System Quotas"
 *   ID                        id-oc-systemQuotas }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const systemQuotas: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ posixAccount, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ quota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "systemQuotas" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "System Quotas" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_systemQuotas /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
