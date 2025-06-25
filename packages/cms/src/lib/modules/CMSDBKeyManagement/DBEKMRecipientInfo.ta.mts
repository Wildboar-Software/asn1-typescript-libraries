/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DatabaseServerToKeyManager,
    _decode_DatabaseServerToKeyManager,
    _encode_DatabaseServerToKeyManager,
} from "../CMSDBKeyManagement/DatabaseServerToKeyManager.ta.mjs";
import {
    MasterKeyEncryptedHMACkey,
    _decode_MasterKeyEncryptedHMACkey,
    _encode_MasterKeyEncryptedHMACkey,
} from "../CMSDBKeyManagement/MasterKeyEncryptedHMACkey.ta.mjs";

/**
 * @summary DBEKMRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DBEKMRecipientInfo     ::=  CHOICE {
 * keyManager        MasterKeyEncryptedHMACkey,
 * server        DatabaseServerToKeyManager
 * }
 * ```
 */
export type DBEKMRecipientInfo =
    | { keyManager: MasterKeyEncryptedHMACkey } /* CHOICE_ALT_ROOT */
    | { server: DatabaseServerToKeyManager } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_DBEKMRecipientInfo: $.ASN1Decoder<DBEKMRecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DBEKMRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DBEKMRecipientInfo} The decoded data structure.
 */
export function _decode_DBEKMRecipientInfo(el: _Element): DBEKMRecipientInfo {
    if (!_cached_decoder_for_DBEKMRecipientInfo) {
        _cached_decoder_for_DBEKMRecipientInfo = $._decode_inextensible_choice<DBEKMRecipientInfo>(
            {
                "CONTEXT 0": ["keyManager", _decode_MasterKeyEncryptedHMACkey],
                "CONTEXT 1": ["server", _decode_DatabaseServerToKeyManager],
            }
        );
    }
    return _cached_decoder_for_DBEKMRecipientInfo(el);
}


let _cached_encoder_for_DBEKMRecipientInfo: $.ASN1Encoder<DBEKMRecipientInfo> | null = null;


/**
 * @summary Encodes a(n) DBEKMRecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DBEKMRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_DBEKMRecipientInfo(
    value: DBEKMRecipientInfo,
    elGetter: $.ASN1Encoder<DBEKMRecipientInfo>
): _Element {
    if (!_cached_encoder_for_DBEKMRecipientInfo) {
        _cached_encoder_for_DBEKMRecipientInfo = $._encode_choice<DBEKMRecipientInfo>(
            {
                keyManager: _encode_MasterKeyEncryptedHMACkey,
                server: _encode_DatabaseServerToKeyManager,
            },
            $.DER
        );
    }
    return _cached_encoder_for_DBEKMRecipientInfo(value, elGetter);
}


/* eslint-enable */
