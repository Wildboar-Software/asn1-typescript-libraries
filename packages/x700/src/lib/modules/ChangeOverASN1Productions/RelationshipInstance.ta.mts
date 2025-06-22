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
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary RelationshipInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipInstance  ::=  SET OF ObjectInstance
 * ```
 */
export type RelationshipInstance = ObjectInstance[]; // SetOfType

let _cached_decoder_for_RelationshipInstance: $.ASN1Decoder<RelationshipInstance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelationshipInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelationshipInstance} The decoded data structure.
 */
export function _decode_RelationshipInstance(el: _Element) {
    if (!_cached_decoder_for_RelationshipInstance) {
        _cached_decoder_for_RelationshipInstance = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_RelationshipInstance(el);
}

let _cached_encoder_for_RelationshipInstance: $.ASN1Encoder<RelationshipInstance> | null = null;

/**
 * @summary Encodes a(n) RelationshipInstance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipInstance, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipInstance(
    value: RelationshipInstance,
    elGetter: $.ASN1Encoder<RelationshipInstance>
) {
    if (!_cached_encoder_for_RelationshipInstance) {
        _cached_encoder_for_RelationshipInstance = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_RelationshipInstance(value, elGetter);
}


/* eslint-enable */
