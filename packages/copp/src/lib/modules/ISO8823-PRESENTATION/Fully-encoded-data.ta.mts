/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    PDV_list,
    _decode_PDV_list,
    _encode_PDV_list,
} from '../ISO8823-PRESENTATION/PDV-list.ta.mjs';

/**
 * @summary Fully_encoded_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fully-encoded-data  ::=  SEQUENCE SIZE (1, ..., 2..MAX) OF PDV-list
 * ```
 */
export type Fully_encoded_data = PDV_list[]; // SequenceOfType


let _cached_decoder_for_Fully_encoded_data: $.ASN1Decoder<Fully_encoded_data> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Fully_encoded_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Fully_encoded_data} The decoded data structure.
 */
export function _decode_Fully_encoded_data(el: _Element): Fully_encoded_data {
    if (!_cached_decoder_for_Fully_encoded_data) {
        _cached_decoder_for_Fully_encoded_data = $._decodeSequenceOf<PDV_list>(
            () => _decode_PDV_list
        );
    }
    return _cached_decoder_for_Fully_encoded_data(el);
}


let _cached_encoder_for_Fully_encoded_data: $.ASN1Encoder<Fully_encoded_data> | null = null;


/**
 * @summary Encodes a(n) Fully_encoded_data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Fully_encoded_data, encoded as an ASN.1 Element.
 */
export function _encode_Fully_encoded_data(
    value: Fully_encoded_data,
    elGetter: $.ASN1Encoder<Fully_encoded_data>
): _Element {
    if (!_cached_encoder_for_Fully_encoded_data) {
        _cached_encoder_for_Fully_encoded_data = $._encodeSequenceOf<PDV_list>(
            () => _encode_PDV_list,
            $.BER
        );
    }
    return _cached_encoder_for_Fully_encoded_data(value, elGetter);
}


/* eslint-enable */
