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
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta.mjs';

/**
 * @summary JoinXCInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinXCInfo  ::=  SEQUENCE OF CoincidentUnidirectionalConnections
 * ```
 */
export type JoinXCInfo = CoincidentUnidirectionalConnections[]; // SequenceOfType


let _cached_decoder_for_JoinXCInfo: $.ASN1Decoder<JoinXCInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) JoinXCInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinXCInfo} The decoded data structure.
 */
export function _decode_JoinXCInfo(el: _Element) {
    if (!_cached_decoder_for_JoinXCInfo) {
        _cached_decoder_for_JoinXCInfo = $._decodeSequenceOf<CoincidentUnidirectionalConnections>(
            () => _decode_CoincidentUnidirectionalConnections
        );
    }
    return _cached_decoder_for_JoinXCInfo(el);
}


let _cached_encoder_for_JoinXCInfo: $.ASN1Encoder<JoinXCInfo> | null = null;


/**
 * @summary Encodes a(n) JoinXCInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinXCInfo, encoded as an ASN.1 Element.
 */
export function _encode_JoinXCInfo(
    value: JoinXCInfo,
    elGetter: $.ASN1Encoder<JoinXCInfo>
) {
    if (!_cached_encoder_for_JoinXCInfo) {
        _cached_encoder_for_JoinXCInfo = $._encodeSequenceOf<CoincidentUnidirectionalConnections>(
            () => _encode_CoincidentUnidirectionalConnections,
            $.BER
        );
    }
    return _cached_encoder_for_JoinXCInfo(value, elGetter);
}


/* eslint-enable */
