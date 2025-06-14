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
/* START_OF_SYMBOL_DEFINITION AdditionalInformation */
/**
 * @summary AdditionalInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalInformation  ::=
 *   ADDITIONAL.
 *     &Type
 * ```
 */
export type AdditionalInformation = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalInformation */
let _cached_decoder_for_AdditionalInformation: $.ASN1Decoder<AdditionalInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalInformation} The decoded data structure.
 */
export function _decode_AdditionalInformation(el: _Element) {
    if (!_cached_decoder_for_AdditionalInformation) {
        _cached_decoder_for_AdditionalInformation = $._decodeAny;
    }
    return _cached_decoder_for_AdditionalInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalInformation */
let _cached_encoder_for_AdditionalInformation: $.ASN1Encoder<AdditionalInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalInformation */
/**
 * @summary Encodes a(n) AdditionalInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInformation, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalInformation(
    value: AdditionalInformation,
    elGetter: $.ASN1Encoder<AdditionalInformation>
) {
    if (!_cached_encoder_for_AdditionalInformation) {
        _cached_encoder_for_AdditionalInformation = $._encodeAny;
    }
    return _cached_encoder_for_AdditionalInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalInformation */

/* eslint-enable */
