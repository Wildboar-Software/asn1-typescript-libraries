/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs";
import {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from "../PKCS-9/ContentType.ta.mjs";
import { pkcs_9_at_contentType } from "../PKCS-9/pkcs-9-at-contentType.va.mjs";


/**
 * @summary contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentType ATTRIBUTE ::= {
 *         WITH SYNTAX ContentType
 *         EQUALITY MATCHING RULE objectIdentifierMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-contentType
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContentType>}
 * @implements {ATTRIBUTE<ContentType>}
 */
export const contentType: ATTRIBUTE<ContentType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContentType,
    },
    encoderFor: {
        "&Type": _encode_ContentType,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_contentType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
