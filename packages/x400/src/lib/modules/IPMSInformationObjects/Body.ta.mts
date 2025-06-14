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
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Body */
/**
 * @summary Body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Body  ::=  SEQUENCE OF BodyPart
 * ```
 */
export type Body = BodyPart[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Body */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Body */
let _cached_decoder_for_Body: $.ASN1Decoder<Body> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Body */

/* START_OF_SYMBOL_DEFINITION _decode_Body */
/**
 * @summary Decodes an ASN.1 element into a(n) Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Body} The decoded data structure.
 */
export function _decode_Body(el: _Element) {
    if (!_cached_decoder_for_Body) {
        _cached_decoder_for_Body = $._decodeSequenceOf<BodyPart>(
            () => _decode_BodyPart
        );
    }
    return _cached_decoder_for_Body(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Body */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Body */
let _cached_encoder_for_Body: $.ASN1Encoder<Body> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Body */

/* START_OF_SYMBOL_DEFINITION _encode_Body */
/**
 * @summary Encodes a(n) Body into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Body, encoded as an ASN.1 Element.
 */
export function _encode_Body(value: Body, elGetter: $.ASN1Encoder<Body>) {
    if (!_cached_encoder_for_Body) {
        _cached_encoder_for_Body = $._encodeSequenceOf<BodyPart>(
            () => _encode_BodyPart,
            $.BER
        );
    }
    return _cached_encoder_for_Body(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Body */

/* eslint-enable */
