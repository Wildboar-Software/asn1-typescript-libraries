/* eslint-disable */
import type { ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta.mjs";
import { id_ckm_key_agree_multiple_encrypt } from "../CMSObjectIdentifiers/id-ckm-key-agree-multiple-encrypt.va.mjs";

/**
 * @summary keyAgreeMultipleEncryptionConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyAgreeMultipleEncryptionConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-agree-multiple-encrypt
 * PARAMS TYPE KeyEncryptionAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 * @implements {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 */
export const keyAgreeMultipleEncryptionConstruction: ALGORITHM<KeyEncryptionAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KeyEncryptionAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_KeyEncryptionAlgorithmIdentifier,
    },
    "&id": id_ckm_key_agree_multiple_encrypt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
