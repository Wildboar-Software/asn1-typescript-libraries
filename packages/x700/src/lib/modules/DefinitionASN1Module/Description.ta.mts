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
    TextualRepresentation,
    _decode_TextualRepresentation,
    _encode_TextualRepresentation,
} from '../DefinitionASN1Module/TextualRepresentation.ta.mjs';

/**
 * @summary Description
 * @description
 *
 * GDMO attribute-group `DESCRIPTION` text (semantics of the grouping,
 * not behaviour). Syntax of `description`. ITU-T Rec. X.750 (10/96)
 * [§8.1.2.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722 (01/92)
 * [§8.8.3.3](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Description  ::=  TextualRepresentation
 * ```
 */
export type Description = TextualRepresentation; // DefinedType


let _cached_decoder_for_Description: $.ASN1Decoder<Description> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Description
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Description} The decoded data structure.
 */
export function _decode_Description(el: _Element): Description {
    if (!_cached_decoder_for_Description) {
        _cached_decoder_for_Description = _decode_TextualRepresentation;
    }
    return _cached_decoder_for_Description(el);
}


let _cached_encoder_for_Description: $.ASN1Encoder<Description> | null = null;


/**
 * @summary Encodes a(n) Description into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Description, encoded as an ASN.1 Element.
 */
export function _encode_Description(
    value: Description,
    elGetter: $.ASN1Encoder<Description>
): _Element {
    if (!_cached_encoder_for_Description) {
        _cached_encoder_for_Description = _encode_TextualRepresentation;
    }
    return _cached_encoder_for_Description(value, elGetter);
}


/* eslint-enable */
