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
 * @summary SupportedRelationshipClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedRelationshipClassList  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export type SupportedRelationshipClassList = OBJECT_IDENTIFIER[]; // SetOfType

let _cached_decoder_for_SupportedRelationshipClassList: $.ASN1Decoder<SupportedRelationshipClassList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedRelationshipClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedRelationshipClassList} The decoded data structure.
 */
export function _decode_SupportedRelationshipClassList(el: _Element) {
    if (!_cached_decoder_for_SupportedRelationshipClassList) {
        _cached_decoder_for_SupportedRelationshipClassList = $._decodeSetOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_SupportedRelationshipClassList(el);
}

let _cached_encoder_for_SupportedRelationshipClassList: $.ASN1Encoder<SupportedRelationshipClassList> | null = null;

/**
 * @summary Encodes a(n) SupportedRelationshipClassList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedRelationshipClassList, encoded as an ASN.1 Element.
 */
export function _encode_SupportedRelationshipClassList(
    value: SupportedRelationshipClassList,
    elGetter: $.ASN1Encoder<SupportedRelationshipClassList>
) {
    if (!_cached_encoder_for_SupportedRelationshipClassList) {
        _cached_encoder_for_SupportedRelationshipClassList = $._encodeSetOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedRelationshipClassList(value, elGetter);
}


/* eslint-enable */
