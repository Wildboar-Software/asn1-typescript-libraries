/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { caseIgnoreIA5SubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreIA5SubstringsMatch.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";


/**
 * @summary defaultSearchScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * defaultSearchScope ATTRIBUTE ::= {
 *     WITH SYNTAX                 IA5String
 *     EQUALITY MATCHING RULE         caseIgnoreIA5Match
 *     SUBSTRINGS MATCHING RULE     caseIgnoreIA5SubstringsMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 ia5String.&id
 *     LDAP-NAME                     {"defaultSearchScope"}
 *     LDAP-DESC "Default search scope used by a DUA"
 *     ID { duaConfSchemaOID 1 12 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const defaultSearchScope: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreIA5SubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "defaultSearchScope" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Default search scope used by a DUA" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 12,], duaConfSchemaOID) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

