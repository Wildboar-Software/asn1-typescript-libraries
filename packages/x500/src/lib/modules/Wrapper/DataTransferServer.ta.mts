/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    DataTransferServerAE,
    _decode_DataTransferServerAE,
    _encode_DataTransferServerAE,
} from "../Wrapper/DataTransferServerAE.ta.mjs";
import {
    DataTransferServerNEA,
    _decode_DataTransferServerNEA,
    _encode_DataTransferServerNEA,
} from "../Wrapper/DataTransferServerNEA.ta.mjs";
/**
 * @summary DataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServer  ::=  CHOICE {
 *   aead     [0] DataTransferServerAE,
 *   non-aead [1] DataTransferServerNEA,
 *   ... }
 * ```
 */
export type DataTransferServer =
    | { aead: DataTransferServerAE } /* CHOICE_ALT_ROOT */
    | { non_aead: DataTransferServerNEA } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DataTransferServer: $.ASN1Decoder<DataTransferServer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServer} The decoded data structure.
 */
export function _decode_DataTransferServer(el: _Element) {
    if (!_cached_decoder_for_DataTransferServer) {
        _cached_decoder_for_DataTransferServer = $._decode_extensible_choice<DataTransferServer>(
            {
                "CONTEXT 0": [
                    "aead",
                    $._decode_implicit<DataTransferServerAE>(
                        () => _decode_DataTransferServerAE
                    ),
                ],
                "CONTEXT 1": [
                    "non_aead",
                    $._decode_implicit<DataTransferServerNEA>(
                        () => _decode_DataTransferServerNEA
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DataTransferServer(el);
}

let _cached_encoder_for_DataTransferServer: $.ASN1Encoder<DataTransferServer> | null = null;

/**
 * @summary Encodes a(n) DataTransferServer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServer(
    value: DataTransferServer,
    elGetter: $.ASN1Encoder<DataTransferServer>
) {
    if (!_cached_encoder_for_DataTransferServer) {
        _cached_encoder_for_DataTransferServer = $._encode_choice<DataTransferServer>(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataTransferServerAE,
                    $.DER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DataTransferServerNEA,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_DataTransferServer(value, elGetter);
}


/* eslint-enable */
