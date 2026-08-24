/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_storedPrefixMatch } from "../SelectedAttributeTypes/id-mr-storedPrefixMatch.va.mjs";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary storedPrefixMatch
 * @description
 *
 * Prep both: Transcode→Map (case-fold)→Normalize KC→Prohibit→bidi→
 * insignificant space removal. Any step fail ⇒ UNDEFINED. Empty after
 * prohibit ⇒ UNDEFINED. All-spaces after space-removal ⇒ single SPACE,
 * not empty. Prepared strings ephemeral.
 * TRUE iff stored is a prefix of presented (inverse of usual prefix match).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * storedPrefixMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   ID           id-mr-storedPrefixMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UnboundedDirectoryString>}
 * @implements {MATCHING_RULE<UnboundedDirectoryString>}
 */
export const storedPrefixMatch: MATCHING_RULE<UnboundedDirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&id": id_mr_storedPrefixMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
