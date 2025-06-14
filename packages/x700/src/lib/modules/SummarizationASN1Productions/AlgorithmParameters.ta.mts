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
    ObservedValue,
    _decode_ObservedValue,
    _encode_ObservedValue,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ObservedValue.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlgorithmParameters */
/**
 * @summary AlgorithmParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmParameters  ::=  SEQUENCE OF ObservedValue
 * ```
 */
export type AlgorithmParameters = ObservedValue[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AlgorithmParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmParameters */
let _cached_decoder_for_AlgorithmParameters: $.ASN1Decoder<AlgorithmParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmParameters */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmParameters} The decoded data structure.
 */
export function _decode_AlgorithmParameters(el: _Element) {
    if (!_cached_decoder_for_AlgorithmParameters) {
        _cached_decoder_for_AlgorithmParameters = $._decodeSequenceOf<ObservedValue>(
            () => _decode_ObservedValue
        );
    }
    return _cached_decoder_for_AlgorithmParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmParameters */
let _cached_encoder_for_AlgorithmParameters: $.ASN1Encoder<AlgorithmParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmParameters */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmParameters */
/**
 * @summary Encodes a(n) AlgorithmParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmParameters, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmParameters(
    value: AlgorithmParameters,
    elGetter: $.ASN1Encoder<AlgorithmParameters>
) {
    if (!_cached_encoder_for_AlgorithmParameters) {
        _cached_encoder_for_AlgorithmParameters = $._encodeSequenceOf<ObservedValue>(
            () => _encode_ObservedValue,
            $.BER
        );
    }
    return _cached_encoder_for_AlgorithmParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmParameters */

/* eslint-enable */
