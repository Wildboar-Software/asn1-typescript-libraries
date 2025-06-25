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
    RandomNumber,
    _decode_RandomNumber,
    _encode_RandomNumber,
} from '../MTSAbstractService/RandomNumber.ta.mjs';
/**
 * @summary BindTokenSignedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindTokenSignedData  ::=  RandomNumber
 * ```
 */
export type BindTokenSignedData = RandomNumber; // DefinedType

let _cached_decoder_for_BindTokenSignedData: $.ASN1Decoder<BindTokenSignedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindTokenSignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindTokenSignedData} The decoded data structure.
 */
export function _decode_BindTokenSignedData(el: _Element): BindTokenSignedData {
    if (!_cached_decoder_for_BindTokenSignedData) {
        _cached_decoder_for_BindTokenSignedData = _decode_RandomNumber;
    }
    return _cached_decoder_for_BindTokenSignedData(el);
}

let _cached_encoder_for_BindTokenSignedData: $.ASN1Encoder<BindTokenSignedData> | null = null;

/**
 * @summary Encodes a(n) BindTokenSignedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindTokenSignedData, encoded as an ASN.1 Element.
 */
export function _encode_BindTokenSignedData(
    value: BindTokenSignedData,
    elGetter: $.ASN1Encoder<BindTokenSignedData>
): _Element {
    if (!_cached_encoder_for_BindTokenSignedData) {
        _cached_encoder_for_BindTokenSignedData = _encode_RandomNumber;
    }
    return _cached_encoder_for_BindTokenSignedData(value, elGetter);
}


/* eslint-enable */
