/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js";
import { octetStringMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/octetStringMatch.oa.js";
import { pkcs_9_at_randomNonce } from "../PKCS-9/pkcs-9-at-randomNonce.va.js";
import {
    RandomNonce,
    _decode_RandomNonce,
    _encode_RandomNonce,
} from "../PKCS-9/RandomNonce.ta.js";

/* START_OF_SYMBOL_DEFINITION randomNonce */
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
/* END_OF_SYMBOL_DEFINITION randomNonce */

/* eslint-enable */
