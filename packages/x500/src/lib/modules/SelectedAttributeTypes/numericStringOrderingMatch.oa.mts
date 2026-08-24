/* eslint-disable */
import { NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
/**
 * @summary numericStringOrderingMatch
 * @description
 *
 * Prep both: Transcode→Map (case-fold)→Normalize KC→Prohibit→bidi→all
 * spaces removed. Any step fail ⇒ UNDEFINED. All-spaces ⇒ empty ⇒
 * UNDEFINED. Prepared strings ephemeral.
 * TRUE iff stored is less/earlier than presented (Unicode code-point
 * order). Not less-or-equal.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringOrderingMatch"}
 *   ID           id-mr-numericStringOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NumericString>}
 * @implements {MATCHING_RULE<NumericString>}
 */
export const numericStringOrderingMatch: MATCHING_RULE<NumericString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["numericStringOrderingMatch"],
    "&id": id_mr_numericStringOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
