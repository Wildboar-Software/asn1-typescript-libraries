/* eslint-disable */
import {
    OCTET_STRING,
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

/**
 * @summary ComponentDataElementSeparator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComponentDataElementSeparator  ::=  OCTET STRING(SIZE (1))
 * ```
 */
export type ComponentDataElementSeparator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ComponentDataElementSeparator: $.ASN1Decoder<ComponentDataElementSeparator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentDataElementSeparator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentDataElementSeparator} The decoded data structure.
 */
export function _decode_ComponentDataElementSeparator(el: _Element) {
    if (!_cached_decoder_for_ComponentDataElementSeparator) {
        _cached_decoder_for_ComponentDataElementSeparator =
            $._decodeOctetString;
    }
    return _cached_decoder_for_ComponentDataElementSeparator(el);
}

let _cached_encoder_for_ComponentDataElementSeparator: $.ASN1Encoder<ComponentDataElementSeparator> | null = null;

/**
 * @summary Encodes a(n) ComponentDataElementSeparator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentDataElementSeparator, encoded as an ASN.1 Element.
 */
export function _encode_ComponentDataElementSeparator(
    value: ComponentDataElementSeparator,
    elGetter: $.ASN1Encoder<ComponentDataElementSeparator>
) {
    if (!_cached_encoder_for_ComponentDataElementSeparator) {
        _cached_encoder_for_ComponentDataElementSeparator =
            $._encodeOctetString;
    }
    return _cached_encoder_for_ComponentDataElementSeparator(value, elGetter);
}


/* eslint-enable */
