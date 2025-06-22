/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta.mjs";
import {
    AadServerAE,
    _decode_AadServerAE,
    _encode_AadServerAE,
} from "../Wrapper/AadServerAE.ta.mjs";
/**
 * @summary DataTransferServerAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServerAE  ::=  AUTHEN-ENCRYPT{AadServerAE, WRAPPED-PROT.&Type}
 * ```
 */
export type DataTransferServerAE = AUTHEN_ENCRYPT<AadServerAE, _Element>; // DefinedType

let _cached_decoder_for_DataTransferServerAE: $.ASN1Decoder<DataTransferServerAE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServerAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServerAE} The decoded data structure.
 */
export function _decode_DataTransferServerAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferServerAE) {
        _cached_decoder_for_DataTransferServerAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_decode_AadServerAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferServerAE(el);
}

let _cached_encoder_for_DataTransferServerAE: $.ASN1Encoder<DataTransferServerAE> | null = null;

/**
 * @summary Encodes a(n) DataTransferServerAE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServerAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServerAE(
    value: DataTransferServerAE,
    elGetter: $.ASN1Encoder<DataTransferServerAE>
) {
    if (!_cached_encoder_for_DataTransferServerAE) {
        _cached_encoder_for_DataTransferServerAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_encode_AadServerAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferServerAE(value, elGetter);
}


/* eslint-enable */
