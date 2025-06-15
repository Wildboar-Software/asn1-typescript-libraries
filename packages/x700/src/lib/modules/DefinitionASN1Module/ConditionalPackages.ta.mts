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
    ConditionalPackages_Item,
    _decode_ConditionalPackages_Item,
    _encode_ConditionalPackages_Item,
} from '../DefinitionASN1Module/ConditionalPackages-Item.ta.mjs';

/**
 * @summary ConditionalPackages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConditionalPackages  ::=
 *   SET OF SEQUENCE {label      TemplateLabel,
 *                    condition  GraphicString}
 * ```
 */
export type ConditionalPackages = ConditionalPackages_Item[]; // SetOfType


let _cached_decoder_for_ConditionalPackages: $.ASN1Decoder<ConditionalPackages> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConditionalPackages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConditionalPackages} The decoded data structure.
 */
export function _decode_ConditionalPackages(el: _Element) {
    if (!_cached_decoder_for_ConditionalPackages) {
        _cached_decoder_for_ConditionalPackages = $._decodeSetOf<ConditionalPackages_Item>(
            () => _decode_ConditionalPackages_Item
        );
    }
    return _cached_decoder_for_ConditionalPackages(el);
}


let _cached_encoder_for_ConditionalPackages: $.ASN1Encoder<ConditionalPackages> | null = null;


/**
 * @summary Encodes a(n) ConditionalPackages into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConditionalPackages, encoded as an ASN.1 Element.
 */
export function _encode_ConditionalPackages(
    value: ConditionalPackages,
    elGetter: $.ASN1Encoder<ConditionalPackages>
) {
    if (!_cached_encoder_for_ConditionalPackages) {
        _cached_encoder_for_ConditionalPackages = $._encodeSetOf<ConditionalPackages_Item>(
            () => _encode_ConditionalPackages_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConditionalPackages(value, elGetter);
}


/* eslint-enable */
