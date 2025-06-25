/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ExtendedEncodedInformationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedEncodedInformationType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ExtendedEncodedInformationType = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_ExtendedEncodedInformationType: $.ASN1Decoder<ExtendedEncodedInformationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedEncodedInformationType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedEncodedInformationType} The decoded data structure.
 */
export function _decode_ExtendedEncodedInformationType(el: _Element): ExtendedEncodedInformationType {
    if (!_cached_decoder_for_ExtendedEncodedInformationType) {
        _cached_decoder_for_ExtendedEncodedInformationType =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ExtendedEncodedInformationType(el);
}

let _cached_encoder_for_ExtendedEncodedInformationType: $.ASN1Encoder<ExtendedEncodedInformationType> | null = null;

/**
 * @summary Encodes a(n) ExtendedEncodedInformationType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedEncodedInformationType, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedEncodedInformationType(
    value: ExtendedEncodedInformationType,
    elGetter: $.ASN1Encoder<ExtendedEncodedInformationType>
): _Element {
    if (!_cached_encoder_for_ExtendedEncodedInformationType) {
        _cached_encoder_for_ExtendedEncodedInformationType =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ExtendedEncodedInformationType(value, elGetter);
}


/* eslint-enable */
