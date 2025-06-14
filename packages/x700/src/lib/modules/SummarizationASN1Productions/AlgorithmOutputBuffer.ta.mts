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
    AlgorithmOutputBuffer_Item,
    _decode_AlgorithmOutputBuffer_Item,
    _encode_AlgorithmOutputBuffer_Item,
} from '../SummarizationASN1Productions/AlgorithmOutputBuffer-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AlgorithmOutputBuffer */
/**
 * @summary AlgorithmOutputBuffer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmOutputBuffer  ::=
 *   SET OF
 *     SEQUENCE {attributeId      AttributeId,
 *               algorithmOutput  SEQUENCE OF ObservedValue}
 * ```
 */
export type AlgorithmOutputBuffer = AlgorithmOutputBuffer_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AlgorithmOutputBuffer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmOutputBuffer */
let _cached_decoder_for_AlgorithmOutputBuffer: $.ASN1Decoder<AlgorithmOutputBuffer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlgorithmOutputBuffer */

/* START_OF_SYMBOL_DEFINITION _decode_AlgorithmOutputBuffer */
/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmOutputBuffer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmOutputBuffer} The decoded data structure.
 */
export function _decode_AlgorithmOutputBuffer(el: _Element) {
    if (!_cached_decoder_for_AlgorithmOutputBuffer) {
        _cached_decoder_for_AlgorithmOutputBuffer = $._decodeSetOf<AlgorithmOutputBuffer_Item>(
            () => _decode_AlgorithmOutputBuffer_Item
        );
    }
    return _cached_decoder_for_AlgorithmOutputBuffer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlgorithmOutputBuffer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmOutputBuffer */
let _cached_encoder_for_AlgorithmOutputBuffer: $.ASN1Encoder<AlgorithmOutputBuffer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlgorithmOutputBuffer */

/* START_OF_SYMBOL_DEFINITION _encode_AlgorithmOutputBuffer */
/**
 * @summary Encodes a(n) AlgorithmOutputBuffer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmOutputBuffer, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmOutputBuffer(
    value: AlgorithmOutputBuffer,
    elGetter: $.ASN1Encoder<AlgorithmOutputBuffer>
) {
    if (!_cached_encoder_for_AlgorithmOutputBuffer) {
        _cached_encoder_for_AlgorithmOutputBuffer = $._encodeSetOf<AlgorithmOutputBuffer_Item>(
            () => _encode_AlgorithmOutputBuffer_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AlgorithmOutputBuffer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlgorithmOutputBuffer */

/* eslint-enable */
