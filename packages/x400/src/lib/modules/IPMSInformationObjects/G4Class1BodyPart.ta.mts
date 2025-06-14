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
    ASN1Element,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION G4Class1BodyPart */
/**
 * @summary G4Class1BodyPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G4Class1BodyPart  ::=  SEQUENCE OF Interchange-Data-Element
 * ```
 */
export type G4Class1BodyPart = ASN1Element[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION G4Class1BodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_G4Class1BodyPart */
let _cached_decoder_for_G4Class1BodyPart: $.ASN1Decoder<G4Class1BodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_G4Class1BodyPart */

/* START_OF_SYMBOL_DEFINITION _decode_G4Class1BodyPart */
/**
 * @summary Decodes an ASN.1 element into a(n) G4Class1BodyPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G4Class1BodyPart} The decoded data structure.
 */
export function _decode_G4Class1BodyPart(el: _Element) {
    if (!_cached_decoder_for_G4Class1BodyPart) {
        _cached_decoder_for_G4Class1BodyPart = $._decodeSequenceOf<ASN1Element>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_G4Class1BodyPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_G4Class1BodyPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_G4Class1BodyPart */
let _cached_encoder_for_G4Class1BodyPart: $.ASN1Encoder<G4Class1BodyPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_G4Class1BodyPart */

/* START_OF_SYMBOL_DEFINITION _encode_G4Class1BodyPart */
/**
 * @summary Encodes a(n) G4Class1BodyPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G4Class1BodyPart, encoded as an ASN.1 Element.
 */
export function _encode_G4Class1BodyPart(
    value: G4Class1BodyPart,
    elGetter: $.ASN1Encoder<G4Class1BodyPart>
) {
    if (!_cached_encoder_for_G4Class1BodyPart) {
        _cached_encoder_for_G4Class1BodyPart = $._encodeSequenceOf<ASN1Element>(
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_G4Class1BodyPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_G4Class1BodyPart */

/* eslint-enable */
