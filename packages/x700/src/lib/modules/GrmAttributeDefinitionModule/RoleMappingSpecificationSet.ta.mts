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
    RoleMappingSpecification,
    _decode_RoleMappingSpecification,
    _encode_RoleMappingSpecification,
} from '../GrmAttributeDefinitionModule/RoleMappingSpecification.ta.mjs';
/**
 * @summary RoleMappingSpecificationSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleMappingSpecificationSet  ::=  SET OF RoleMappingSpecification
 * ```
 */
export type RoleMappingSpecificationSet = RoleMappingSpecification[]; // SetOfType

let _cached_decoder_for_RoleMappingSpecificationSet: $.ASN1Decoder<RoleMappingSpecificationSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleMappingSpecificationSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleMappingSpecificationSet} The decoded data structure.
 */
export function _decode_RoleMappingSpecificationSet(el: _Element) {
    if (!_cached_decoder_for_RoleMappingSpecificationSet) {
        _cached_decoder_for_RoleMappingSpecificationSet = $._decodeSetOf<RoleMappingSpecification>(
            () => _decode_RoleMappingSpecification
        );
    }
    return _cached_decoder_for_RoleMappingSpecificationSet(el);
}

let _cached_encoder_for_RoleMappingSpecificationSet: $.ASN1Encoder<RoleMappingSpecificationSet> | null = null;

/**
 * @summary Encodes a(n) RoleMappingSpecificationSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleMappingSpecificationSet, encoded as an ASN.1 Element.
 */
export function _encode_RoleMappingSpecificationSet(
    value: RoleMappingSpecificationSet,
    elGetter: $.ASN1Encoder<RoleMappingSpecificationSet>
) {
    if (!_cached_encoder_for_RoleMappingSpecificationSet) {
        _cached_encoder_for_RoleMappingSpecificationSet = $._encodeSetOf<RoleMappingSpecification>(
            () => _encode_RoleMappingSpecification,
            $.BER
        );
    }
    return _cached_encoder_for_RoleMappingSpecificationSet(value, elGetter);
}


/* eslint-enable */
