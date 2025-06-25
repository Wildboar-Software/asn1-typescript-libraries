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
 * @summary PrecedencePolicyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrecedencePolicyIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PrecedencePolicyIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_PrecedencePolicyIdentifier: $.ASN1Decoder<PrecedencePolicyIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrecedencePolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrecedencePolicyIdentifier} The decoded data structure.
 */
export function _decode_PrecedencePolicyIdentifier(el: _Element): PrecedencePolicyIdentifier {
    if (!_cached_decoder_for_PrecedencePolicyIdentifier) {
        _cached_decoder_for_PrecedencePolicyIdentifier =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_PrecedencePolicyIdentifier(el);
}

let _cached_encoder_for_PrecedencePolicyIdentifier: $.ASN1Encoder<PrecedencePolicyIdentifier> | null = null;

/**
 * @summary Encodes a(n) PrecedencePolicyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrecedencePolicyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrecedencePolicyIdentifier(
    value: PrecedencePolicyIdentifier,
    elGetter: $.ASN1Encoder<PrecedencePolicyIdentifier>
): _Element {
    if (!_cached_encoder_for_PrecedencePolicyIdentifier) {
        _cached_encoder_for_PrecedencePolicyIdentifier =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_PrecedencePolicyIdentifier(value, elGetter);
}


/* eslint-enable */
