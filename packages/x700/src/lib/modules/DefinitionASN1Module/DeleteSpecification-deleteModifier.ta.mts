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
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary DeleteSpecification_deleteModifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteSpecification-deleteModifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export enum _enum_for_DeleteSpecification_deleteModifier {
    onlyIfNoContainedObjects = 0,
    deletesContainedObjects = 1,
}


/**
 * @summary DeleteSpecification_deleteModifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteSpecification-deleteModifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type DeleteSpecification_deleteModifier = _enum_for_DeleteSpecification_deleteModifier;


/**
 * @summary DeleteSpecification_deleteModifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteSpecification-deleteModifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export const DeleteSpecification_deleteModifier = _enum_for_DeleteSpecification_deleteModifier;


/**
 * @summary DeleteSpecification_deleteModifier_onlyIfNoContainedObjects
 * @constant
 * @type {number}
 */
export const DeleteSpecification_deleteModifier_onlyIfNoContainedObjects: DeleteSpecification_deleteModifier =
    DeleteSpecification_deleteModifier.onlyIfNoContainedObjects; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary onlyIfNoContainedObjects
 * @constant
 * @type {number}
 */
export const onlyIfNoContainedObjects: DeleteSpecification_deleteModifier =
    DeleteSpecification_deleteModifier.onlyIfNoContainedObjects; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteSpecification_deleteModifier_deletesContainedObjects
 * @constant
 * @type {number}
 */
export const DeleteSpecification_deleteModifier_deletesContainedObjects: DeleteSpecification_deleteModifier =
    DeleteSpecification_deleteModifier.deletesContainedObjects; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary deletesContainedObjects
 * @constant
 * @type {number}
 */
export const deletesContainedObjects: DeleteSpecification_deleteModifier =
    DeleteSpecification_deleteModifier.deletesContainedObjects; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_DeleteSpecification_deleteModifier: $.ASN1Decoder<DeleteSpecification_deleteModifier> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSpecification_deleteModifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteSpecification_deleteModifier} The decoded data structure.
 */
export function _decode_DeleteSpecification_deleteModifier(el: _Element) {
    if (!_cached_decoder_for_DeleteSpecification_deleteModifier) {
        _cached_decoder_for_DeleteSpecification_deleteModifier =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DeleteSpecification_deleteModifier(el);
}


let _cached_encoder_for_DeleteSpecification_deleteModifier: $.ASN1Encoder<DeleteSpecification_deleteModifier> | null = null;


/**
 * @summary Encodes a(n) DeleteSpecification_deleteModifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSpecification_deleteModifier, encoded as an ASN.1 Element.
 */
export function _encode_DeleteSpecification_deleteModifier(
    value: DeleteSpecification_deleteModifier,
    elGetter: $.ASN1Encoder<DeleteSpecification_deleteModifier>
) {
    if (!_cached_encoder_for_DeleteSpecification_deleteModifier) {
        _cached_encoder_for_DeleteSpecification_deleteModifier =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DeleteSpecification_deleteModifier(
        value,
        elGetter
    );
}


/* eslint-enable */
