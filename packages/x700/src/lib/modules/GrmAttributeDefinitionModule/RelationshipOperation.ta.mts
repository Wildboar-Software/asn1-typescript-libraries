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
import {
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta.mjs';
import {
    OptionalIdentifierAndRole,
    _decode_OptionalIdentifierAndRole,
    _encode_OptionalIdentifierAndRole,
} from '../GrmAttributeDefinitionModule/OptionalIdentifierAndRole.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RelationshipOperation */
/**
 * @summary RelationshipOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipOperation  ::=  CHOICE {
 *   establish    [0] EXPLICIT OptionalIdentifier,
 *   terminate    [1] EXPLICIT OptionalIdentifier,
 *   query        [2]  OptionalIdentifierAndRole,
 *   notify       [3] EXPLICIT OptionalIdentifier,
 *   userDefined  [4] EXPLICIT OptionalIdentifier,
 *   bind         [5]  OptionalIdentifierAndRole,
 *   unbind       [6]  OptionalIdentifierAndRole
 * }
 * ```
 */
export type RelationshipOperation =
    | { establish: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { terminate: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { query: OptionalIdentifierAndRole } /* CHOICE_ALT_ROOT */
    | { notify: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { userDefined: OptionalIdentifier } /* CHOICE_ALT_ROOT */
    | { bind: OptionalIdentifierAndRole } /* CHOICE_ALT_ROOT */
    | { unbind: OptionalIdentifierAndRole } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RelationshipOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipOperation */
let _cached_decoder_for_RelationshipOperation: $.ASN1Decoder<RelationshipOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelationshipOperation */

/* START_OF_SYMBOL_DEFINITION _decode_RelationshipOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) RelationshipOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelationshipOperation} The decoded data structure.
 */
export function _decode_RelationshipOperation(el: _Element) {
    if (!_cached_decoder_for_RelationshipOperation) {
        _cached_decoder_for_RelationshipOperation = $._decode_inextensible_choice<RelationshipOperation>(
            {
                'CONTEXT 0': [
                    'establish',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 1': [
                    'terminate',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 2': [
                    'query',
                    $._decode_implicit<OptionalIdentifierAndRole>(
                        () => _decode_OptionalIdentifierAndRole
                    ),
                ],
                'CONTEXT 3': [
                    'notify',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 4': [
                    'userDefined',
                    $._decode_explicit<OptionalIdentifier>(
                        () => _decode_OptionalIdentifier
                    ),
                ],
                'CONTEXT 5': [
                    'bind',
                    $._decode_implicit<OptionalIdentifierAndRole>(
                        () => _decode_OptionalIdentifierAndRole
                    ),
                ],
                'CONTEXT 6': [
                    'unbind',
                    $._decode_implicit<OptionalIdentifierAndRole>(
                        () => _decode_OptionalIdentifierAndRole
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RelationshipOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelationshipOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipOperation */
let _cached_encoder_for_RelationshipOperation: $.ASN1Encoder<RelationshipOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelationshipOperation */

/* START_OF_SYMBOL_DEFINITION _encode_RelationshipOperation */
/**
 * @summary Encodes a(n) RelationshipOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipOperation, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipOperation(
    value: RelationshipOperation,
    elGetter: $.ASN1Encoder<RelationshipOperation>
) {
    if (!_cached_encoder_for_RelationshipOperation) {
        _cached_encoder_for_RelationshipOperation = $._encode_choice<RelationshipOperation>(
            {
                establish: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                terminate: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                query: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_OptionalIdentifierAndRole,
                    $.BER
                ),
                notify: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                userDefined: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_OptionalIdentifier,
                    $.BER
                ),
                bind: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_OptionalIdentifierAndRole,
                    $.BER
                ),
                unbind: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_OptionalIdentifierAndRole,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RelationshipOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelationshipOperation */

/* eslint-enable */
