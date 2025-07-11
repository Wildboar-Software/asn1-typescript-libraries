/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { octetStringMatch } from "@wildboar/x500/SelectedAttributeTypes";
import { pkcs_9_at_randomNonce } from "../PKCS-9/pkcs-9-at-randomNonce.va.mjs";
import {
    RandomNonce,
    _decode_RandomNonce,
    _encode_RandomNonce,
} from "../PKCS-9/RandomNonce.ta.mjs";


/**
 * @summary randomNonce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * randomNonce ATTRIBUTE ::= {
 *         WITH SYNTAX RandomNonce
 *         EQUALITY MATCHING RULE octetStringMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-randomNonce
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RandomNonce>}
 * @implements {ATTRIBUTE<RandomNonce>}
 */
export const randomNonce: ATTRIBUTE<RandomNonce> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_RandomNonce,
    },
    encoderFor: {
        "&Type": _encode_RandomNonce,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_randomNonce /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
