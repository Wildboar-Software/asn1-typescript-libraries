/* eslint-disable */
import {
    BIT_STRING,
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

/**
 * @summary G3FacsimileData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileData  ::=  SEQUENCE OF BIT STRING
 * ```
 */
export type G3FacsimileData = BIT_STRING[]; // SequenceOfType

let _cached_decoder_for_G3FacsimileData: $.ASN1Decoder<G3FacsimileData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileData} The decoded data structure.
 */
export function _decode_G3FacsimileData(el: _Element): G3FacsimileData {
    if (!_cached_decoder_for_G3FacsimileData) {
        _cached_decoder_for_G3FacsimileData = $._decodeSequenceOf<BIT_STRING>(
            () => $._decodeBitString
        );
    }
    return _cached_decoder_for_G3FacsimileData(el);
}

let _cached_encoder_for_G3FacsimileData: $.ASN1Encoder<G3FacsimileData> | null = null;

/**
 * @summary Encodes a(n) G3FacsimileData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileData, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileData(
    value: G3FacsimileData,
    elGetter: $.ASN1Encoder<G3FacsimileData>
): _Element {
    if (!_cached_encoder_for_G3FacsimileData) {
        _cached_encoder_for_G3FacsimileData = $._encodeSequenceOf<BIT_STRING>(
            () => $._encodeBitString,
            $.BER
        );
    }
    return _cached_encoder_for_G3FacsimileData(value, elGetter);
}


/* eslint-enable */
