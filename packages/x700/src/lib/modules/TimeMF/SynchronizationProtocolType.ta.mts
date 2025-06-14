/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION SynchronizationProtocolType */
/**
 * @summary SynchronizationProtocolType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SynchronizationProtocolType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type SynchronizationProtocolType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION SynchronizationProtocolType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizationProtocolType */
let _cached_decoder_for_SynchronizationProtocolType: $.ASN1Decoder<SynchronizationProtocolType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SynchronizationProtocolType */

/* START_OF_SYMBOL_DEFINITION _decode_SynchronizationProtocolType */
/**
 * @summary Decodes an ASN.1 element into a(n) SynchronizationProtocolType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SynchronizationProtocolType} The decoded data structure.
 */
export function _decode_SynchronizationProtocolType(el: _Element) {
    if (!_cached_decoder_for_SynchronizationProtocolType) {
        _cached_decoder_for_SynchronizationProtocolType =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SynchronizationProtocolType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SynchronizationProtocolType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizationProtocolType */
let _cached_encoder_for_SynchronizationProtocolType: $.ASN1Encoder<SynchronizationProtocolType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SynchronizationProtocolType */

/* START_OF_SYMBOL_DEFINITION _encode_SynchronizationProtocolType */
/**
 * @summary Encodes a(n) SynchronizationProtocolType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynchronizationProtocolType, encoded as an ASN.1 Element.
 */
export function _encode_SynchronizationProtocolType(
    value: SynchronizationProtocolType,
    elGetter: $.ASN1Encoder<SynchronizationProtocolType>
) {
    if (!_cached_encoder_for_SynchronizationProtocolType) {
        _cached_encoder_for_SynchronizationProtocolType =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SynchronizationProtocolType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SynchronizationProtocolType */

/* eslint-enable */
