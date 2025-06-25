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
    SupportedChoice,
    _decode_SupportedChoice,
    _encode_SupportedChoice,
} from '../GrmAttributeDefinitionModule/SupportedChoice.ta.mjs';
/**
 * @summary Supports
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Supports  ::=  SET OF SupportedChoice
 * ```
 */
export type Supports = SupportedChoice[]; // SetOfType

let _cached_decoder_for_Supports: $.ASN1Decoder<Supports> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Supports
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Supports} The decoded data structure.
 */
export function _decode_Supports(el: _Element): Supports {
    if (!_cached_decoder_for_Supports) {
        _cached_decoder_for_Supports = $._decodeSetOf<SupportedChoice>(
            () => _decode_SupportedChoice
        );
    }
    return _cached_decoder_for_Supports(el);
}

let _cached_encoder_for_Supports: $.ASN1Encoder<Supports> | null = null;

/**
 * @summary Encodes a(n) Supports into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Supports, encoded as an ASN.1 Element.
 */
export function _encode_Supports(
    value: Supports,
    elGetter: $.ASN1Encoder<Supports>
): _Element {
    if (!_cached_encoder_for_Supports) {
        _cached_encoder_for_Supports = $._encodeSetOf<SupportedChoice>(
            () => _encode_SupportedChoice,
            $.BER
        );
    }
    return _cached_encoder_for_Supports(value, elGetter);
}


/* eslint-enable */
