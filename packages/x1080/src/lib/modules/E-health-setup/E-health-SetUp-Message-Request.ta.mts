/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary E_health_SetUp_Message_Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * E-health-SetUp-Message-Request  ::=  CHOICE {
 *   simple       SIMPLE-MESSAGE.&id({Simple-Messages}),
 *   interactive  CR-SEQUENCE.&id({CR-Sequences}),
 *   ...
 * }
 * ```
 */
export type E_health_SetUp_Message_Request =
    | { simple: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { interactive: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_E_health_SetUp_Message_Request: $.ASN1Decoder<E_health_SetUp_Message_Request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) E_health_SetUp_Message_Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {E_health_SetUp_Message_Request} The decoded data structure.
 */
export function _decode_E_health_SetUp_Message_Request(el: _Element) {
    if (!_cached_decoder_for_E_health_SetUp_Message_Request) {
        _cached_decoder_for_E_health_SetUp_Message_Request = $._decode_extensible_choice<E_health_SetUp_Message_Request>(
            {
                'CONTEXT 0': ['simple', $._decodeObjectIdentifier],
                'CONTEXT 1': ['interactive', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_E_health_SetUp_Message_Request(el);
}


let _cached_encoder_for_E_health_SetUp_Message_Request: $.ASN1Encoder<E_health_SetUp_Message_Request> | null = null;


/**
 * @summary Encodes a(n) E_health_SetUp_Message_Request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_health_SetUp_Message_Request, encoded as an ASN.1 Element.
 */
export function _encode_E_health_SetUp_Message_Request(
    value: E_health_SetUp_Message_Request,
    elGetter: $.ASN1Encoder<E_health_SetUp_Message_Request>
) {
    if (!_cached_encoder_for_E_health_SetUp_Message_Request) {
        _cached_encoder_for_E_health_SetUp_Message_Request = $._encode_choice<E_health_SetUp_Message_Request>(
            {
                simple: $._encodeObjectIdentifier,
                interactive: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_E_health_SetUp_Message_Request(value, elGetter);
}


/* eslint-enable */
