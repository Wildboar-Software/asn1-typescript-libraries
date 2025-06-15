/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ICV_Invoke,
    _get_decoder_for_ICV_Invoke,
    _get_encoder_for_ICV_Invoke,
} from "../CryptoTools/ICV-Invoke.ta.mjs";
import {
    TbpDataTransferServer,
    _decode_TbpDataTransferServer,
    _encode_TbpDataTransferServer,
} from "../Wrapper/TbpDataTransferServer.ta.mjs";
/**
 * @summary DataTransferServerNEA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServerNEA  ::=  ICV-Invoke{TbpDataTransferServer}
 * ```
 */
export type DataTransferServerNEA = ICV_Invoke<TbpDataTransferServer>; // DefinedType

let _cached_decoder_for_DataTransferServerNEA: $.ASN1Decoder<DataTransferServerNEA> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServerNEA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServerNEA} The decoded data structure.
 */
export function _decode_DataTransferServerNEA(el: _Element) {
    if (!_cached_decoder_for_DataTransferServerNEA) {
        _cached_decoder_for_DataTransferServerNEA = _get_decoder_for_ICV_Invoke<TbpDataTransferServer>(
            _decode_TbpDataTransferServer
        );
    }
    return _cached_decoder_for_DataTransferServerNEA(el);
}

let _cached_encoder_for_DataTransferServerNEA: $.ASN1Encoder<DataTransferServerNEA> | null = null;

/**
 * @summary Encodes a(n) DataTransferServerNEA into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServerNEA, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServerNEA(
    value: DataTransferServerNEA,
    elGetter: $.ASN1Encoder<DataTransferServerNEA>
) {
    if (!_cached_encoder_for_DataTransferServerNEA) {
        _cached_encoder_for_DataTransferServerNEA = _get_encoder_for_ICV_Invoke<TbpDataTransferServer>(
            _encode_TbpDataTransferServer
        );
    }
    return _cached_encoder_for_DataTransferServerNEA(value, elGetter);
}


/* eslint-enable */
