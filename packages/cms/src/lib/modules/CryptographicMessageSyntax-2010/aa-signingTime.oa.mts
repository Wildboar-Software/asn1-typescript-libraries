/* eslint-disable */
import { id_signingTime } from "../CryptographicMessageSyntax-2010/id-signingTime.va.mjs";
import {
    SigningTime,
    _decode_SigningTime,
    _encode_SigningTime,
} from "../CryptographicMessageSyntax-2010/SigningTime.ta.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";

/**
 * @summary aa_signingTime
 * @description
 *
 * ATTRIBUTE information object for the signing-time attribute
 * ([RFC 5652 §11.3](https://datatracker.ietf.org/doc/html/rfc5652#section-11.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-signingTime ATTRIBUTE ::= { TYPE SigningTime IDENTIFIED BY id-signingTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SigningTime>}
 * @implements {ATTRIBUTE<SigningTime>}
 */
export const aa_signingTime: ATTRIBUTE<SigningTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SigningTime,
    },
    encoderFor: {
        "&Type": _encode_SigningTime,
    },
    "&id": id_signingTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
