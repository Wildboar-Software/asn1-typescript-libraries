/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    type MessageDigest,
    _decode_MessageDigest,
    _encode_MessageDigest,
} from "../PKCS-9/MessageDigest.ta.mjs";
import { pkcs_9_at_messageDigest } from "../PKCS-9/pkcs-9-at-messageDigest.va.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";

/**
 * @summary messageDigest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * messageDigest ATTRIBUTE ::= {
 *         WITH SYNTAX MessageDigest
 *         EQUALITY MATCHING RULE octetStringMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-messageDigest
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MessageDigest>}
 * @implements {ATTRIBUTE<MessageDigest>}
 */
export
const messageDigest: ATTRIBUTE<MessageDigest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageDigest,
    },
    encoderFor: {
        "&Type": _encode_MessageDigest,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
