/* eslint-disable */
import {
    NULL,
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
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
/**
 * @summary RoleOrRelationshipObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleOrRelationshipObject  ::=  CHOICE {
 *   role                Identifier,
 *   relationshipObject  NULL
 * }
 * ```
 */
export type RoleOrRelationshipObject =
    | { role: Identifier } /* CHOICE_ALT_ROOT */
    | { relationshipObject: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RoleOrRelationshipObject: $.ASN1Decoder<RoleOrRelationshipObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleOrRelationshipObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleOrRelationshipObject} The decoded data structure.
 */
export function _decode_RoleOrRelationshipObject(el: _Element) {
    if (!_cached_decoder_for_RoleOrRelationshipObject) {
        _cached_decoder_for_RoleOrRelationshipObject = $._decode_inextensible_choice<RoleOrRelationshipObject>(
            {
                'UNIVERSAL 19': ['role', _decode_Identifier],
                'UNIVERSAL 5': ['relationshipObject', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_RoleOrRelationshipObject(el);
}

let _cached_encoder_for_RoleOrRelationshipObject: $.ASN1Encoder<RoleOrRelationshipObject> | null = null;

/**
 * @summary Encodes a(n) RoleOrRelationshipObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleOrRelationshipObject, encoded as an ASN.1 Element.
 */
export function _encode_RoleOrRelationshipObject(
    value: RoleOrRelationshipObject,
    elGetter: $.ASN1Encoder<RoleOrRelationshipObject>
) {
    if (!_cached_encoder_for_RoleOrRelationshipObject) {
        _cached_encoder_for_RoleOrRelationshipObject = $._encode_choice<RoleOrRelationshipObject>(
            {
                role: _encode_Identifier,
                relationshipObject: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RoleOrRelationshipObject(value, elGetter);
}


/* eslint-enable */
