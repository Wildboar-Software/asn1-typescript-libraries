/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DomainName, _decode_DomainName, _encode_DomainName } from "../SelectedAttributeTypes/DomainName.ta.mjs";
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../SelectedAttributeTypes/DomainName.ta.mjs";
import { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa.mjs";
// export { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa.mjs";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
// export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
import { id_at_dnsSearchDomain } from "../DNSFramework/id-at-dnsSearchDomain.va.mjs";
// export { id_at_dnsSearchDomain } from "../DNSFramework/id-at-dnsSearchDomain.va.mjs";


/**
 * @summary dnsSearchDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsSearchDomain ATTRIBUTE ::= {
 *     WITH SYNTAX             DomainName
 *     EQUALITY MATCHING RULE  dnsNameMatch
 *     LDAP-SYNTAX             dnsString.&id
 *     LDAP-NAME               {"DNS search domain"}
 *     ID                      id-at-dnsSearchDomain
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DomainName>}
 * @implements {ATTRIBUTE<DomainName>}
 */
export
const dnsSearchDomain: ATTRIBUTE<DomainName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&equality-match": dnsNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DNS search domain" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dnsSearchDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
