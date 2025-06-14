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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DeleteResult_delete_result_94,
    _decode_DeleteResult_delete_result_94,
    _encode_DeleteResult_delete_result_94,
} from '../MSAbstractService/DeleteResult-delete-result-94.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeleteResult */
/**
 * @summary DeleteResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteResult  ::=  CHOICE {
 *   delete-result-88  NULL,
 *   -- 1994 extension
 *   delete-result-94
 *     SET {entries-deleted
 *            [0]  SEQUENCE SIZE (1..ub-messages) OF SequenceNumber OPTIONAL,
 *          delete-result-extensions  [1]  MSExtensions OPTIONAL}
 * }
 * ```
 */
export type DeleteResult =
    | { delete_result_88: NULL } /* CHOICE_ALT_ROOT */
    | { delete_result_94: DeleteResult_delete_result_94 } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DeleteResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteResult */
let _cached_decoder_for_DeleteResult: $.ASN1Decoder<DeleteResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteResult */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteResult} The decoded data structure.
 */
export function _decode_DeleteResult(el: _Element) {
    if (!_cached_decoder_for_DeleteResult) {
        _cached_decoder_for_DeleteResult = $._decode_inextensible_choice<DeleteResult>(
            {
                'UNIVERSAL 5': ['delete_result_88', $._decodeNull],
                'UNIVERSAL 17': [
                    'delete_result_94',
                    _decode_DeleteResult_delete_result_94,
                ],
            }
        );
    }
    return _cached_decoder_for_DeleteResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteResult */
let _cached_encoder_for_DeleteResult: $.ASN1Encoder<DeleteResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteResult */
/**
 * @summary Encodes a(n) DeleteResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResult, encoded as an ASN.1 Element.
 */
export function _encode_DeleteResult(
    value: DeleteResult,
    elGetter: $.ASN1Encoder<DeleteResult>
) {
    if (!_cached_encoder_for_DeleteResult) {
        _cached_encoder_for_DeleteResult = $._encode_choice<DeleteResult>(
            {
                delete_result_88: $._encodeNull,
                delete_result_94: _encode_DeleteResult_delete_result_94,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeleteResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteResult */

/* eslint-enable */
