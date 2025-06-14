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
    DeleteSpecification,
    _decode_DeleteSpecification,
    _encode_DeleteSpecification,
} from '../DefinitionASN1Module/DeleteSpecification.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Delete */
/**
 * @summary Delete
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Delete  ::=  CHOICE {present  DeleteSpecification,
 *                    absent   NULL
 * }
 * ```
 */
export type Delete =
    | { present: DeleteSpecification } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Delete */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Delete */
let _cached_decoder_for_Delete: $.ASN1Decoder<Delete> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Delete */

/* START_OF_SYMBOL_DEFINITION _decode_Delete */
/**
 * @summary Decodes an ASN.1 element into a(n) Delete
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Delete} The decoded data structure.
 */
export function _decode_Delete(el: _Element) {
    if (!_cached_decoder_for_Delete) {
        _cached_decoder_for_Delete = $._decode_inextensible_choice<Delete>({
            'UNIVERSAL 16': ['present', _decode_DeleteSpecification],
            'UNIVERSAL 5': ['absent', $._decodeNull],
        });
    }
    return _cached_decoder_for_Delete(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Delete */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Delete */
let _cached_encoder_for_Delete: $.ASN1Encoder<Delete> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Delete */

/* START_OF_SYMBOL_DEFINITION _encode_Delete */
/**
 * @summary Encodes a(n) Delete into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Delete, encoded as an ASN.1 Element.
 */
export function _encode_Delete(value: Delete, elGetter: $.ASN1Encoder<Delete>) {
    if (!_cached_encoder_for_Delete) {
        _cached_encoder_for_Delete = $._encode_choice<Delete>(
            {
                present: _encode_DeleteSpecification,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Delete(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Delete */

/* eslint-enable */
