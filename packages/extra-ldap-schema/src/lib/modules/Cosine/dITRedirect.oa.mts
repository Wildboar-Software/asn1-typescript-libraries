/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
// export { distinguishedNameMatch } from "../InformationFramework/distinguishedNameMatch.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_dITRedirect } from "../Cosine/id-at-dITRedirect.va.mjs";
// export { id_at_dITRedirect } from "../Cosine/id-at-dITRedirect.va.mjs";


/**
 * @summary dITRedirect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dITRedirect ATTRIBUTE ::= {
 *     WITH SYNTAX                 DistinguishedName
 *     EQUALITY MATCHING RULE         distinguishedNameMatch
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                     {"dITRedirect"}
 *     LDAP-DESC                    "RFC1274: DIT Redirect."
 *     ID                          id-at-dITRedirect
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const dITRedirect: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&equality-match": distinguishedNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dITRedirect" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: DIT Redirect." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dITRedirect /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
