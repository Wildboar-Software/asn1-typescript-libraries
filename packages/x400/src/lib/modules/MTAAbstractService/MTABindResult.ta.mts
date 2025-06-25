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
    MTABindResult_authenticated,
    _decode_MTABindResult_authenticated,
    _encode_MTABindResult_authenticated,
} from '../MTAAbstractService/MTABindResult-authenticated.ta.mjs';
/**
 * @summary MTABindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTABindResult  ::=  CHOICE {
 *   unauthenticated  NULL, -- if no authentication is required
 *   authenticated
 *     [1]  SET {-- if authentication is required--responder-name
 *                                                   [0]  MTAName,
 *                                                 responder-credentials
 *                                                   [1]  ResponderCredentials
 *                                                          (WITH COMPONENTS {
 *                                                             ...,
 *                                                             protected  ABSENT
 *                                                           })}
 * }
 * ```
 */
export type MTABindResult =
    | { unauthenticated: NULL } /* CHOICE_ALT_ROOT */
    | { authenticated: MTABindResult_authenticated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MTABindResult: $.ASN1Decoder<MTABindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTABindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTABindResult} The decoded data structure.
 */
export function _decode_MTABindResult(el: _Element): MTABindResult {
    if (!_cached_decoder_for_MTABindResult) {
        _cached_decoder_for_MTABindResult = $._decode_inextensible_choice<MTABindResult>(
            {
                'UNIVERSAL 5': ['unauthenticated', $._decodeNull],
                'CONTEXT 1': [
                    'authenticated',
                    $._decode_implicit<MTABindResult_authenticated>(
                        () => _decode_MTABindResult_authenticated
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MTABindResult(el);
}

let _cached_encoder_for_MTABindResult: $.ASN1Encoder<MTABindResult> | null = null;

/**
 * @summary Encodes a(n) MTABindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTABindResult, encoded as an ASN.1 Element.
 */
export function _encode_MTABindResult(
    value: MTABindResult,
    elGetter: $.ASN1Encoder<MTABindResult>
): _Element {
    if (!_cached_encoder_for_MTABindResult) {
        _cached_encoder_for_MTABindResult = $._encode_choice<MTABindResult>(
            {
                unauthenticated: $._encodeNull,
                authenticated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MTABindResult_authenticated,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTABindResult(value, elGetter);
}


/* eslint-enable */
