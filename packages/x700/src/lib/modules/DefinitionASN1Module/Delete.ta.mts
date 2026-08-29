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
    DeleteSpecification,
    _decode_DeleteSpecification,
    _encode_DeleteSpecification,
} from '../DefinitionASN1Module/DeleteSpecification.ta.mjs';

/**
 * @summary Delete
 * @description
 *
 * GDMO name-binding `DELETE` construct. `present` holds the delete
 * element; `absent` (`NULL`) means the template has no DELETE. If no
 * delete element is present, the `delete` attribute shall be null.
 * ITU-T Rec. X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 * GDMO: X.722 (01/92)
 * [§8.6.3.6](https://www.itu.int/rec/T-REC-X.722-199201-I).
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


let _cached_decoder_for_Delete: $.ASN1Decoder<Delete> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Delete
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Delete} The decoded data structure.
 */
export function _decode_Delete(el: _Element): Delete {
    if (!_cached_decoder_for_Delete) {
        _cached_decoder_for_Delete = $._decode_inextensible_choice<Delete>({
            'UNIVERSAL 16': ['present', _decode_DeleteSpecification],
            'UNIVERSAL 5': ['absent', $._decodeNull],
        });
    }
    return _cached_decoder_for_Delete(el);
}


let _cached_encoder_for_Delete: $.ASN1Encoder<Delete> | null = null;


/**
 * @summary Encodes a(n) Delete into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Delete, encoded as an ASN.1 Element.
 */
export function _encode_Delete(value: Delete, elGetter: $.ASN1Encoder<Delete>): _Element {
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


/* eslint-enable */
