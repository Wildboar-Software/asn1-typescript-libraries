/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.js";
import { octetStringMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/octetStringMatch.oa.js";
import { pkcs_9_at_localKeyId } from "../PKCS-9/pkcs-9-at-localKeyId.va.js";

/* START_OF_SYMBOL_DEFINITION localKeyId */
/**
 * @summary localKeyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localKeyId ATTRIBUTE ::= {
 *         WITH SYNTAX OCTET STRING
 *         EQUALITY MATCHING RULE octetStringMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-localKeyId
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export const localKeyId: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_localKeyId /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION localKeyId */

/* eslint-enable */
