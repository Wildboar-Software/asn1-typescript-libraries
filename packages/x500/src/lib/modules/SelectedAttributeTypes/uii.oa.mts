/* eslint-disable */
import { BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa.mjs";
import { id_at_uii } from "../SelectedAttributeTypes/id-at-uii.va.mjs";
/**
 * @summary uii
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uii ATTRIBUTE ::= {
 *   WITH SYNTAX              BIT STRING
 *   EQUALITY MATCHING RULE   bitStringMatch
 *   LDAP-SYNTAX              bitString.&id
 *   LDAP-NAME                {"uii"}
 *   ID                       id-at-uii }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<BIT_STRING>}
 * @implements {ATTRIBUTE<BIT_STRING>}
 */
export const uii: ATTRIBUTE<BIT_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uii"],
    "&id": id_at_uii /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
