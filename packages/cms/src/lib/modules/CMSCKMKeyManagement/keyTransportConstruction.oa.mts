/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta.mjs";
import { id_ckm_key_transport } from "../CMSObjectIdentifiers/id-ckm-key-transport.va.mjs";
/* START_OF_SYMBOL_DEFINITION keyTransportConstruction */
/**
 * @summary keyTransportConstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyTransportConstruction ALGORITHM ::= {
 * IDENTIFIER id-ckm-key-transport
 * PARAMS TYPE KeyEncryptionAlgorithmIdentifier ARE required
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 * @implements {ALGORITHM<KeyEncryptionAlgorithmIdentifier>}
 */
export const keyTransportConstruction: ALGORITHM<KeyEncryptionAlgorithmIdentifier> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KeyEncryptionAlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_KeyEncryptionAlgorithmIdentifier,
    },
    "&id": id_ckm_key_transport /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION keyTransportConstruction */

/* eslint-enable */
