/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_systemQuotas } from "../LdapQuota/id-oc-systemQuotas.va.mjs";
import { quota } from "../LdapQuota/quota.oa.mjs";
import { posixAccount } from "../NIS/posixAccount.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [posixAccount] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [quota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["systemQuotas"],
    "&ldapDesc": "System Quotas" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_systemQuotas /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
