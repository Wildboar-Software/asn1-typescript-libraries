/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_solarisAuditUser } from "../LdapNisclient/id-oc-solarisAuditUser.va.mjs";
import { solarisAuditAlways } from "../LdapNisclient/solarisAuditAlways.oa.mjs";
import { solarisAuditNever } from "../LdapNisclient/solarisAuditNever.oa.mjs";
// export { id_oc_solarisAuditUser } from "../LdapNisclient/id-oc-solarisAuditUser.va.mjs";


/**
 * @summary solarisAuditUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * solarisAuditUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { solarisAuditAlways
 *                               | solarisAuditNever }
 *   LDAP-NAME                 {"SolarisAuditUser"}
 *   ID                        id-oc-solarisAuditUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const solarisAuditUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ solarisAuditAlways, solarisAuditNever, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SolarisAuditUser" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_solarisAuditUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
