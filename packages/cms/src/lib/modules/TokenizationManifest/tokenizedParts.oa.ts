import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js";
import {
    id_tokenizedParts,
} from "../CMSObjectIdentifiers/id-tokenizedParts.va.js";
import {
    TokenizedParts,
    _decode_TokenizedParts,
    _encode_TokenizedParts,
} from "./TokenizedParts.ta.js";

// This module was created manually, because the ASN.1 compiler did not output it
// for some reason.

/**
 * @summary tokenizedParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tokenizedParts ATTRIBUTE ::= { TYPE TokenizedParts IDENTIFIED BY id-tokenizedParts }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TokenizedParts>}
 * @implements {ATTRIBUTE<TokenizedParts>}
 */
export const tokenizedParts: ATTRIBUTE<TokenizedParts> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TokenizedParts,
    },
    encoderFor: {
        "&Type": _encode_TokenizedParts,
    },
    "&id": id_tokenizedParts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
