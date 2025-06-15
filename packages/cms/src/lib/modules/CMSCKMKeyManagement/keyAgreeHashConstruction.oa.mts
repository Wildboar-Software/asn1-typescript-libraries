/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs";
import { id_ckm_key_agree_hash } from "../CMSObjectIdentifiers/id-ckm-key-agree-hash.va.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs";

/**
 * @summary keyAgreeHashConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyAgreeHashConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-agree-hash
 * PARAMS TYPE DigestAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<DigestAlgorithmIdentifier>}
 * @implements {ALGORITHM<DigestAlgorithmIdentifier>}
 */
export const keyAgreeHashConstruction: ALGORITHM<DigestAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_DigestAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_DigestAlgorithmIdentifier,
    },
    "&id": id_ckm_key_agree_hash /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
