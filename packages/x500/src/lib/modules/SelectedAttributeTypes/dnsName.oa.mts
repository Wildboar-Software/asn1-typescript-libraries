/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { dnsNameMatch } from "../SelectedAttributeTypes/dnsNameMatch.oa.mjs";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta.mjs";
import { id_at_dnsName } from "../SelectedAttributeTypes/id-at-dnsName.va.mjs";
/**
 * @summary dnsName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsName ATTRIBUTE ::= {
 *   WITH SYNTAX             DomainName
 *   EQUALITY MATCHING RULE  dnsNameMatch
 *   LDAP-SYNTAX             dnsString.&id
 *   LDAP-NAME               {"DNS name"}
 *   ID                      id-at-dnsName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DomainName>}
 * @implements {ATTRIBUTE<DomainName>}
 */
export const dnsName: ATTRIBUTE<DomainName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&equality-match": dnsNameMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["DNS name"],
    "&id": id_at_dnsName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
