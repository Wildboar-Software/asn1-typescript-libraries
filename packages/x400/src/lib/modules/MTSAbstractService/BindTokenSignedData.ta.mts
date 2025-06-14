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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RandomNumber,
    _decode_RandomNumber,
    _encode_RandomNumber,
} from '../MTSAbstractService/RandomNumber.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BindTokenSignedData */
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
/* END_OF_SYMBOL_DEFINITION BindTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindTokenSignedData */
let _cached_decoder_for_BindTokenSignedData: $.ASN1Decoder<BindTokenSignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _decode_BindTokenSignedData */
/**
 * @summary Decodes an ASN.1 element into a(n) BindTokenSignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindTokenSignedData} The decoded data structure.
 */
export function _decode_BindTokenSignedData(el: _Element) {
    if (!_cached_decoder_for_BindTokenSignedData) {
        _cached_decoder_for_BindTokenSignedData = _decode_RandomNumber;
    }
    return _cached_decoder_for_BindTokenSignedData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindTokenSignedData */
let _cached_encoder_for_BindTokenSignedData: $.ASN1Encoder<BindTokenSignedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindTokenSignedData */

/* START_OF_SYMBOL_DEFINITION _encode_BindTokenSignedData */
/**
 * @summary Encodes a(n) BindTokenSignedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindTokenSignedData, encoded as an ASN.1 Element.
 */
export function _encode_BindTokenSignedData(
    value: BindTokenSignedData,
    elGetter: $.ASN1Encoder<BindTokenSignedData>
) {
    if (!_cached_encoder_for_BindTokenSignedData) {
        _cached_encoder_for_BindTokenSignedData = _encode_RandomNumber;
    }
    return _cached_encoder_for_BindTokenSignedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindTokenSignedData */

/* eslint-enable */
