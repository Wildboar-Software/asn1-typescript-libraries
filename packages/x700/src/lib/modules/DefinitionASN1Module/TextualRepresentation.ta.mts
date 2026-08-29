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
    LineImage,
    _decode_LineImage,
    _encode_LineImage,
} from '../DefinitionASN1Module/LineImage.ta.mjs';
/**
 * @summary TextualRepresentation
 * @description
 *
 * Sequence of line images. Used for module contents, behaviour text,
 * descriptions, document/template text, and the
 * `getTextualRepresentation` reply (which may be split across linked
 * replies; concatenating them yields the same value as a Get of a
 * `TextualRepresentation` attribute). ITU-T Rec. X.750 (10/96)
 * [§8.3.1.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.4](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.5](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TextualRepresentation  ::=  SEQUENCE OF LineImage
 * ```
 */
export type TextualRepresentation = LineImage[]; // SequenceOfType

let _cached_decoder_for_TextualRepresentation: $.ASN1Decoder<TextualRepresentation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TextualRepresentation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TextualRepresentation} The decoded data structure.
 */
export function _decode_TextualRepresentation(el: _Element): TextualRepresentation {
    if (!_cached_decoder_for_TextualRepresentation) {
        _cached_decoder_for_TextualRepresentation = $._decodeSequenceOf<LineImage>(
            () => _decode_LineImage
        );
    }
    return _cached_decoder_for_TextualRepresentation(el);
}

let _cached_encoder_for_TextualRepresentation: $.ASN1Encoder<TextualRepresentation> | null = null;

/**
 * @summary Encodes a(n) TextualRepresentation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TextualRepresentation, encoded as an ASN.1 Element.
 */
export function _encode_TextualRepresentation(
    value: TextualRepresentation,
    elGetter: $.ASN1Encoder<TextualRepresentation>
): _Element {
    if (!_cached_encoder_for_TextualRepresentation) {
        _cached_encoder_for_TextualRepresentation = $._encodeSequenceOf<LineImage>(
            () => _encode_LineImage,
            $.BER
        );
    }
    return _cached_encoder_for_TextualRepresentation(value, elGetter);
}


/* eslint-enable */
