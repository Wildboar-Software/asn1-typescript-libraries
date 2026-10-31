/* eslint-disable */
import {
    type DNSResolverRotation,
    _decode_DNSResolverRotation,
    _encode_DNSResolverRotation,
} from "../DNSFramework/DNSResolverRotation.ta.mjs";
import { id_at_dnsResolverRotation } from "../DNSFramework/id-at-dnsResolverRotation.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";

/**
 * @summary dnsResolverRotation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsResolverRotation ATTRIBUTE ::= {
 *     WITH SYNTAX                DNSResolverRotation
 *     EQUALITY MATCHING RULE  integerMatch
 *     LDAP-SYNTAX                integer.&id
 *     LDAP-NAME                {"dnsResolverRotation"}
 *     LDAP-DESC                "DNS Resolver Rotation Algorithm"
 *     ID                        id-at-dnsResolverRotation
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DNSResolverRotation>}
 * @implements {ATTRIBUTE<DNSResolverRotation>}
 */
export
const dnsResolverRotation: ATTRIBUTE<DNSResolverRotation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DNSResolverRotation,
    },
    encoderFor: {
        "&Type": _encode_DNSResolverRotation,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dnsResolverRotation"],
    "&ldapDesc": "DNS Resolver Rotation Algorithm" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dnsResolverRotation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
