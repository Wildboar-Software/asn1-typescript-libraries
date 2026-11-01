/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
// export { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
// export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_enrolledBy } from "../Ldap60basev2/id-at-enrolledBy.va.mjs";
// export { id_at_enrolledBy } from "../Ldap60basev2/id-at-enrolledBy.va.mjs";


/**
 * @summary enrolledBy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * enrolledBy ATTRIBUTE ::= {
 *   SUBTYPE OF                distinguishedName
 *   WITH SYNTAX               DistinguishedName
 *   EQUALITY MATCHING RULE    distinguishedNameMatch
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"enrolledBy"}
 *   LDAP-DESC                 "DN of administrator who performed manual enrollment of the host"
 *   ID                        id-at-enrolledBy }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const enrolledBy: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "enrolledBy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DN of administrator who performed manual enrollment of the host" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_enrolledBy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
