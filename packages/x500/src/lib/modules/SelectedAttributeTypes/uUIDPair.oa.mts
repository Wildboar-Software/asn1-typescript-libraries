/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_uuidpair } from "../SelectedAttributeTypes/id-at-uuidpair.va.mjs";
import {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta.mjs";
import { uUIDPairMatch } from "../SelectedAttributeTypes/uUIDPairMatch.oa.mjs";
/**
 * @summary uUIDPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPair ATTRIBUTE ::= {
 *   WITH SYNTAX             UUIDPair
 *   EQUALITY MATCHING RULE  uUIDPairMatch
 *   ID                      id-at-uuidpair }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UUIDPair>}
 * @implements {ATTRIBUTE<UUIDPair>}
 */
export const uUIDPair: ATTRIBUTE<UUIDPair> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UUIDPair,
    },
    encoderFor: {
        "&Type": _encode_UUIDPair,
    },
    "&equality-match": uUIDPairMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_uuidpair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
