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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
 * Presentation User data: one or more PDVs. Encoding choice is specified
 * in X.226 §8.4 (when `User-data` is nested in another type, BER/PER
 * still wrap this CHOICE; when it is the entire SS-user data of S-DATA,
 * S-CAPABILITY-DATA, S-EXPEDITED-DATA, simple encoding omits identifier
 * and length octets).
 *
 * **Simply-encoded:** default context; or DCS has exactly one member and
 * context-management is not selected (X.226 §8.4.1). Also when
 * `nominated-context` is selected and all PDVs are from the sender's
 * nominated context (X.226/Amd.1 §8.4.1.3 bis). Not used in CP User data
 * except when the default context is in use.
 *
 * **Fully-encoded:** otherwise, including CP/CPC unless default context
 * is in use; or DCS has more than one member; or context-management is
 * selected (unless nominated-context applies) (X.226 §8.4.2; Amd.1
 * §8.4.2.2).
 *
 * TE PPDU User data is always from the default context (X.226 §6.1.1;
 * X.216 §10.1). Other primitives follow DCS rules in X.226 §6.1.2 /
 * X.216 §10.1. Session version 1 may reject request/response User data
 * that does not fit SS-user data, except `P-U-ABORT` (X.226 §6.1 Note).
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
export function _decode_User_data(el: _Element): User_data {
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
): _Element {
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
