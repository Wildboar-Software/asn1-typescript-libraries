/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetStringOrderingMatch } from "../SelectedAttributeTypes/octetStringOrderingMatch.oa.mjs";
import { octetStringSubstringsMatch } from "../SelectedAttributeTypes/octetStringSubstringsMatch.oa.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";


/**
 * @summary userSMIMECertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * userSMIMECertificate ATTRIBUTE ::= {
 *     WITH SYNTAX                        OCTET STRING
 *     EQUALITY MATCHING RULE            octetStringMatch
 *     ORDERING MATCHING RULE            octetStringOrderingMatch
 *     SUBSTRINGS MATCHING RULE        octetStringSubstringsMatch
 *     LDAP-SYNTAX                        octetString.&id
 *     LDAP-NAME                        {"userSMIMECertificate"}
 *     ID                                { 2 16 840 1 113730 3 1 40 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const userSMIMECertificate: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": octetStringOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": octetStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "userSMIMECertificate" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([2, 16, 840, 1, 113730, 3, 1, 40,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

