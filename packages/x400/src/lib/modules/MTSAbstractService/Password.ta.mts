/* eslint-disable */
import {
    OCTET_STRING,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Password
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Password  ::=  CHOICE {
 *   ia5-string    IA5String(SIZE (0..ub-password-length)),
 *   octet-string  OCTET STRING(SIZE (0..ub-password-length))
 * }
 * ```
 */
export type Password =
    | { ia5_string: IA5String } /* CHOICE_ALT_ROOT */
    | { octet_string: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Password: $.ASN1Decoder<Password> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Password
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Password} The decoded data structure.
 */
export function _decode_Password(el: _Element) {
    if (!_cached_decoder_for_Password) {
        _cached_decoder_for_Password = $._decode_inextensible_choice<Password>({
            'UNIVERSAL 22': ['ia5_string', $._decodeIA5String],
            'UNIVERSAL 4': ['octet_string', $._decodeOctetString],
        });
    }
    return _cached_decoder_for_Password(el);
}

let _cached_encoder_for_Password: $.ASN1Encoder<Password> | null = null;

/**
 * @summary Encodes a(n) Password into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Password, encoded as an ASN.1 Element.
 */
export function _encode_Password(
    value: Password,
    elGetter: $.ASN1Encoder<Password>
) {
    if (!_cached_encoder_for_Password) {
        _cached_encoder_for_Password = $._encode_choice<Password>(
            {
                ia5_string: $._encodeIA5String,
                octet_string: $._encodeOctetString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Password(value, elGetter);
}


/* eslint-enable */
