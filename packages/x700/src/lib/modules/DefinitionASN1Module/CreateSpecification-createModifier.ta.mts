/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary CreateSpecification_createModifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateSpecification-createModifier ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CreateSpecification_createModifier = BIT_STRING;


/**
 * @summary CreateSpecification_createModifier_withReferenceObject
 * @constant
 */
export const CreateSpecification_createModifier_withReferenceObject: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary withReferenceObject
 * @constant
 */
export const withReferenceObject: number = CreateSpecification_createModifier_withReferenceObject; /* SHORT_NAMED_BIT */


/**
 * @summary CreateSpecification_createModifier_withAutomaticInstanceNaming
 * @constant
 */
export const CreateSpecification_createModifier_withAutomaticInstanceNaming: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary withAutomaticInstanceNaming
 * @constant
 */
export const withAutomaticInstanceNaming: number = CreateSpecification_createModifier_withAutomaticInstanceNaming; /* SHORT_NAMED_BIT */


let _cached_decoder_for_CreateSpecification_createModifier: $.ASN1Decoder<CreateSpecification_createModifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CreateSpecification_createModifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateSpecification_createModifier} The decoded data structure.
 */
export function _decode_CreateSpecification_createModifier(el: _Element) {
    if (!_cached_decoder_for_CreateSpecification_createModifier) {
        _cached_decoder_for_CreateSpecification_createModifier =
            $._decodeBitString;
    }
    return _cached_decoder_for_CreateSpecification_createModifier(el);
}


let _cached_encoder_for_CreateSpecification_createModifier: $.ASN1Encoder<CreateSpecification_createModifier> | null = null;


/**
 * @summary Encodes a(n) CreateSpecification_createModifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateSpecification_createModifier, encoded as an ASN.1 Element.
 */
export function _encode_CreateSpecification_createModifier(
    value: CreateSpecification_createModifier,
    elGetter: $.ASN1Encoder<CreateSpecification_createModifier>
) {
    if (!_cached_encoder_for_CreateSpecification_createModifier) {
        _cached_encoder_for_CreateSpecification_createModifier =
            $._encodeBitString;
    }
    return _cached_encoder_for_CreateSpecification_createModifier(
        value,
        elGetter
    );
}


/* eslint-enable */
