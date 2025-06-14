/* eslint-disable */
import { signcrypted_envelope } from "../CMSObjectIdentifiers/signcrypted-envelope.va.mjs";
import {
    SigncryptedKey,
    _decode_SigncryptedKey,
    _encode_SigncryptedKey,
} from "../CMSSigncryption/SigncryptedKey.ta.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
/* START_OF_SYMBOL_DEFINITION signcryptedEnvelope */
/**
 * @summary signcryptedEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryptedEnvelope ATTRIBUTE ::= {
 * TYPE SigncryptedKey IDENTIFIED BY signcrypted-envelope
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SigncryptedKey>}
 * @implements {ATTRIBUTE<SigncryptedKey>}
 */
export const signcryptedEnvelope: ATTRIBUTE<SigncryptedKey> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SigncryptedKey,
    },
    encoderFor: {
        "&Type": _encode_SigncryptedKey,
    },
    "&id": signcrypted_envelope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION signcryptedEnvelope */

/* eslint-enable */
