/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { pkcs_9_ub_match } from "../PKCS-9/pkcs-9-ub-match.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { PKCS9String, _decode_PKCS9String, _encode_PKCS9String } from "../PKCS-9/PKCS9String.ta.mjs";
// export { pkcs_9_ub_match } from "../PKCS-9/pkcs-9-ub-match.va.mjs";
import { pkcs_9_mr_caseIgnoreMatch } from "../PKCS-9/pkcs-9-mr-caseIgnoreMatch.va.mjs";
// export { pkcs_9_mr_caseIgnoreMatch } from "../PKCS-9/pkcs-9-mr-caseIgnoreMatch.va.mjs";


/**
 * @summary pkcs9CaseIgnoreMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkcs9CaseIgnoreMatch MATCHING-RULE ::= {
 *         SYNTAX PKCS9String {pkcs-9-ub-match}
 *         ID pkcs-9-mr-caseIgnoreMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<PKCS9String>}
 * @implements {MATCHING_RULE<PKCS9String>}
 */
const _decode_pkcs9CaseIgnoreMatch_AssertionType = (el: _Element): PKCS9String => {
    const value = _decode_PKCS9String(el);
    let text: string;
    if ("ia5String" in value) {
        text = value.ia5String;
    } else {
        if ("teletexString" in value.directoryString) {
            text = value.directoryString.teletexString;
        } else if ("printableString" in value.directoryString) {
            text = value.directoryString.printableString;
        } else if ("bmpString" in value.directoryString) {
            text = value.directoryString.bmpString;
        } else if ("universalString" in value.directoryString) {
            text = value.directoryString.universalString;
        } else {
            text = value.directoryString.uTF8String;
        }
    }
    if (text.length < 1 || (typeof pkcs_9_ub_match === "bigint" ? BigInt(text.length) > pkcs_9_ub_match : text.length > pkcs_9_ub_match)) {
        throw new ASN1SizeError("pkcs9CaseIgnoreMatch violates SIZE constraint");
    }
    return value;
};

export
const pkcs9CaseIgnoreMatch: MATCHING_RULE<PKCS9String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_pkcs9CaseIgnoreMatch_AssertionType,
    },
    encoderFor: {
        "&AssertionType": _encode_PKCS9String,
    },
    "&id": pkcs_9_mr_caseIgnoreMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
