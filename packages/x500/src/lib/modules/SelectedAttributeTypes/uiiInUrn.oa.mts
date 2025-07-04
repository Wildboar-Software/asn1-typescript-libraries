/* eslint-disable */
import { UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_uiiInUrn } from "../SelectedAttributeTypes/id-at-uiiInUrn.va.mjs";
/**
 * @summary uiiInUrn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiInUrn ATTRIBUTE ::= {
 *   WITH SYNTAX              UTF8String
 *   EQUALITY MATCHING RULE   caseExactMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uiiInUrn"}
 *   ID                       id-at-uiiInUrn }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UTF8String>}
 * @implements {ATTRIBUTE<UTF8String>}
 */
export const uiiInUrn: ATTRIBUTE<UTF8String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uiiInUrn"],
    "&id": id_at_uiiInUrn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
