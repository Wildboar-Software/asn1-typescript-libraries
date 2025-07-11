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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BodyPart,
    _decode_BodyPart,
    _encode_BodyPart,
} from '../IPMSInformationObjects/BodyPart.ta.mjs';
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

let _cached_decoder_for_Body: $.ASN1Decoder<Body> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Body} The decoded data structure.
 */
export function _decode_Body(el: _Element): Body {
    if (!_cached_decoder_for_Body) {
        _cached_decoder_for_Body = $._decodeSequenceOf<BodyPart>(
            () => _decode_BodyPart
        );
    }
    return _cached_decoder_for_Body(el);
}

let _cached_encoder_for_Body: $.ASN1Encoder<Body> | null = null;

/**
 * @summary Encodes a(n) Body into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Body, encoded as an ASN.1 Element.
 */
export function _encode_Body(value: Body, elGetter: $.ASN1Encoder<Body>): _Element {
    if (!_cached_encoder_for_Body) {
        _cached_encoder_for_Body = $._encodeSequenceOf<BodyPart>(
            () => _encode_BodyPart,
            $.BER
        );
    }
    return _cached_encoder_for_Body(value, elGetter);
}


/* eslint-enable */
