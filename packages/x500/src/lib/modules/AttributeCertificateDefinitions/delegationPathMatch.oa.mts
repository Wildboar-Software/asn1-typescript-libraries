/* eslint-disable */
import {
    DelMatchSyntax,
    _decode_DelMatchSyntax,
    _encode_DelMatchSyntax,
} from "../AttributeCertificateDefinitions/DelMatchSyntax.ta.mjs";
import { id_mr_delegationPathMatch } from "../AttributeCertificateDefinitions/id-mr-delegationPathMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary delegationPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPathMatch MATCHING-RULE ::= {
 *   SYNTAX  DelMatchSyntax
 *   ID      id-mr-delegationPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<DelMatchSyntax>}
 * @implements {MATCHING_RULE<DelMatchSyntax>}
 */
export const delegationPathMatch: MATCHING_RULE<DelMatchSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DelMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_DelMatchSyntax,
    },
    "&id": id_mr_delegationPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
