/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta.mjs";
import {
    AadClientAE,
    _decode_AadClientAE,
    _encode_AadClientAE,
} from "../Wrapper/AadClientAE.ta.mjs";
/**
 * @summary DataTransferClientAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferClientAE  ::=  AUTHEN-ENCRYPT{AadClientAE, WRAPPED-PROT.&Type}
 * ```
 */
export type DataTransferClientAE = AUTHEN_ENCRYPT<AadClientAE, _Element>; // DefinedType

let _cached_decoder_for_DataTransferClientAE: $.ASN1Decoder<DataTransferClientAE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClientAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClientAE} The decoded data structure.
 */
export function _decode_DataTransferClientAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferClientAE) {
        _cached_decoder_for_DataTransferClientAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_decode_AadClientAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferClientAE(el);
}

let _cached_encoder_for_DataTransferClientAE: $.ASN1Encoder<DataTransferClientAE> | null = null;

/**
 * @summary Encodes a(n) DataTransferClientAE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClientAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClientAE(
    value: DataTransferClientAE,
    elGetter: $.ASN1Encoder<DataTransferClientAE>
) {
    if (!_cached_encoder_for_DataTransferClientAE) {
        _cached_encoder_for_DataTransferClientAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_encode_AadClientAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferClientAE(value, elGetter);
}


/* eslint-enable */
