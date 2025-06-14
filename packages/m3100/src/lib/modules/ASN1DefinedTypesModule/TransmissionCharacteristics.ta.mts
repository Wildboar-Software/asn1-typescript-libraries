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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics */
/**
 * @summary TransmissionCharacteristics
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransmissionCharacteristics  ::=  BIT STRING {
 *   satellite(0), dCME(1), echoControl(2)}
 * ```
 */
export type TransmissionCharacteristics = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_satellite */
/**
 * @summary TransmissionCharacteristics_satellite
 * @constant
 */
export const TransmissionCharacteristics_satellite: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_satellite */

/* START_OF_SYMBOL_DEFINITION satellite */
/**
 * @summary satellite
 * @constant
 */
export const satellite: number = TransmissionCharacteristics_satellite; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION satellite */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_dCME */
/**
 * @summary TransmissionCharacteristics_dCME
 * @constant
 */
export const TransmissionCharacteristics_dCME: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_dCME */

/* START_OF_SYMBOL_DEFINITION dCME */
/**
 * @summary dCME
 * @constant
 */
export const dCME: number = TransmissionCharacteristics_dCME; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dCME */

/* START_OF_SYMBOL_DEFINITION TransmissionCharacteristics_echoControl */
/**
 * @summary TransmissionCharacteristics_echoControl
 * @constant
 */
export const TransmissionCharacteristics_echoControl: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION TransmissionCharacteristics_echoControl */

/* START_OF_SYMBOL_DEFINITION echoControl */
/**
 * @summary echoControl
 * @constant
 */
export const echoControl: number = TransmissionCharacteristics_echoControl; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION echoControl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransmissionCharacteristics */
let _cached_decoder_for_TransmissionCharacteristics: $.ASN1Decoder<TransmissionCharacteristics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _decode_TransmissionCharacteristics */
/**
 * @summary Decodes an ASN.1 element into a(n) TransmissionCharacteristics
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransmissionCharacteristics} The decoded data structure.
 */
export function _decode_TransmissionCharacteristics(el: _Element) {
    if (!_cached_decoder_for_TransmissionCharacteristics) {
        _cached_decoder_for_TransmissionCharacteristics = $._decodeBitString;
    }
    return _cached_decoder_for_TransmissionCharacteristics(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransmissionCharacteristics */
let _cached_encoder_for_TransmissionCharacteristics: $.ASN1Encoder<TransmissionCharacteristics> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransmissionCharacteristics */

/* START_OF_SYMBOL_DEFINITION _encode_TransmissionCharacteristics */
/**
 * @summary Encodes a(n) TransmissionCharacteristics into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransmissionCharacteristics, encoded as an ASN.1 Element.
 */
export function _encode_TransmissionCharacteristics(
    value: TransmissionCharacteristics,
    elGetter: $.ASN1Encoder<TransmissionCharacteristics>
) {
    if (!_cached_encoder_for_TransmissionCharacteristics) {
        _cached_encoder_for_TransmissionCharacteristics = $._encodeBitString;
    }
    return _cached_encoder_for_TransmissionCharacteristics(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransmissionCharacteristics */

/* eslint-enable */
