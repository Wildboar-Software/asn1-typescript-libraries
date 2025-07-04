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
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip';
/**
 * @summary SoftwareProcessingFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SoftwareProcessingFailure  ::=  SET OF Attribute
 * ```
 */
export type SoftwareProcessingFailure = Attribute[]; // SetOfType

let _cached_decoder_for_SoftwareProcessingFailure: $.ASN1Decoder<SoftwareProcessingFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SoftwareProcessingFailure
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SoftwareProcessingFailure} The decoded data structure.
 */
export function _decode_SoftwareProcessingFailure(el: _Element): SoftwareProcessingFailure {
    if (!_cached_decoder_for_SoftwareProcessingFailure) {
        _cached_decoder_for_SoftwareProcessingFailure = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SoftwareProcessingFailure(el);
}

let _cached_encoder_for_SoftwareProcessingFailure: $.ASN1Encoder<SoftwareProcessingFailure> | null = null;

/**
 * @summary Encodes a(n) SoftwareProcessingFailure into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SoftwareProcessingFailure, encoded as an ASN.1 Element.
 */
export function _encode_SoftwareProcessingFailure(
    value: SoftwareProcessingFailure,
    elGetter: $.ASN1Encoder<SoftwareProcessingFailure>
): _Element {
    if (!_cached_encoder_for_SoftwareProcessingFailure) {
        _cached_encoder_for_SoftwareProcessingFailure = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_SoftwareProcessingFailure(value, elGetter);
}


/* eslint-enable */
