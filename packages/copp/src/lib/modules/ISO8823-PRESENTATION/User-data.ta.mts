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
    Simply_encoded_data,
    _decode_Simply_encoded_data,
    _encode_Simply_encoded_data,
} from '../ISO8823-PRESENTATION/Simply-encoded-data.ta.mjs';
import {
    Fully_encoded_data,
    _decode_Fully_encoded_data,
    _encode_Fully_encoded_data,
} from '../ISO8823-PRESENTATION/Fully-encoded-data.ta.mjs';

/**
 * @summary User_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-data  ::=  CHOICE {
 *   simply-encoded-data  [APPLICATION 0] IMPLICIT Simply-encoded-data,
 *   fully-encoded-data   [APPLICATION 1] IMPLICIT Fully-encoded-data,
 *   ...
 * }
 * ```
 */
export type User_data =
    | { simply_encoded_data: Simply_encoded_data } /* CHOICE_ALT_ROOT */
    | { fully_encoded_data: Fully_encoded_data } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_User_data: $.ASN1Decoder<User_data> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) User_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_data} The decoded data structure.
 */
export function _decode_User_data(el: _Element) {
    if (!_cached_decoder_for_User_data) {
        _cached_decoder_for_User_data = $._decode_extensible_choice<User_data>({
            'APPLICATION 0': [
                'simply_encoded_data',
                $._decode_implicit<Simply_encoded_data>(
                    () => _decode_Simply_encoded_data
                ),
            ],
            'APPLICATION 1': [
                'fully_encoded_data',
                $._decode_implicit<Fully_encoded_data>(
                    () => _decode_Fully_encoded_data
                ),
            ],
        });
    }
    return _cached_decoder_for_User_data(el);
}


let _cached_encoder_for_User_data: $.ASN1Encoder<User_data> | null = null;


/**
 * @summary Encodes a(n) User_data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_data, encoded as an ASN.1 Element.
 */
export function _encode_User_data(
    value: User_data,
    elGetter: $.ASN1Encoder<User_data>
) {
    if (!_cached_encoder_for_User_data) {
        _cached_encoder_for_User_data = $._encode_choice<User_data>(
            {
                simply_encoded_data: $._encode_implicit(
                    _TagClass.application,
                    0,
                    () => _encode_Simply_encoded_data,
                    $.BER
                ),
                fully_encoded_data: $._encode_implicit(
                    _TagClass.application,
                    1,
                    () => _encode_Fully_encoded_data,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_User_data(value, elGetter);
}


/* eslint-enable */
