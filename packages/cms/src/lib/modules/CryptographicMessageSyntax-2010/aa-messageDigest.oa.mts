/* eslint-disable */
import { id_messageDigest } from "../CryptographicMessageSyntax-2010/id-messageDigest.va.mjs";
import {
    MessageDigest,
    _decode_MessageDigest,
    _encode_MessageDigest,
} from "../CryptographicMessageSyntax-2010/MessageDigest.ta.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary aa_messageDigest
 * @description
 *
 * ATTRIBUTE information object for the message-digest attribute: digest of
 * the content (or of authenticated attributes when those are used)
 * ([RFC 5652 §11.2](https://datatracker.ietf.org/doc/html/rfc5652#section-11.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-messageDigest ATTRIBUTE ::= { TYPE MessageDigest IDENTIFIED BY id-messageDigest}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MessageDigest>}
 * @implements {ATTRIBUTE<MessageDigest>}
 */
export const aa_messageDigest: ATTRIBUTE<MessageDigest> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MessageDigest,
    },
    encoderFor: {
        "&Type": _encode_MessageDigest,
    },
    "&id": id_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
