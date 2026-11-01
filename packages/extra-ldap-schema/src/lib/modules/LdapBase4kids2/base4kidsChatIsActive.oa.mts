/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
// export { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { id_at_base4kidsChatIsActive } from "../LdapBase4kids2/id-at-base4kidsChatIsActive.va.mjs";
// export { id_at_base4kidsChatIsActive } from "../LdapBase4kids2/id-at-base4kidsChatIsActive.va.mjs";


/**
 * @summary base4kidsChatIsActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsChatIsActive ATTRIBUTE ::= {
 *   SUBTYPE OF                base4kidsIsActive
 *   LDAP-NAME                 {"base4kidsChatIsActive"}
 *   LDAP-DESC                 "Determines whether chat access is active"
 *   ID                        id-at-base4kidsChatIsActive }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const base4kidsChatIsActive: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": base4kidsIsActive /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsChatIsActive" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Determines whether chat access is active" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_base4kidsChatIsActive /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
