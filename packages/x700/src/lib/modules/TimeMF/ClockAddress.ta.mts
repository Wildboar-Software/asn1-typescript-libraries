/* eslint-disable */
import {
    OCTET_STRING,
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
    ClockAddress_ip,
    _decode_ClockAddress_ip,
    _encode_ClockAddress_ip,
} from '../TimeMF/ClockAddress-ip.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ClockAddress */
/**
 * @summary ClockAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockAddress  ::=  CHOICE {
 *   isoNsap  [1]  OCTET STRING(SIZE (0 | 3..20)),
 *   ip       [2]  SEQUENCE {host  OCTET STRING(SIZE (4)),
 *                           port  INTEGER(0..65536)}
 * }
 * ```
 */
export type ClockAddress =
    | { isoNsap: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { ip: ClockAddress_ip } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ClockAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockAddress */
let _cached_decoder_for_ClockAddress: $.ASN1Decoder<ClockAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockAddress */

/* START_OF_SYMBOL_DEFINITION _decode_ClockAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockAddress} The decoded data structure.
 */
export function _decode_ClockAddress(el: _Element) {
    if (!_cached_decoder_for_ClockAddress) {
        _cached_decoder_for_ClockAddress = $._decode_inextensible_choice<ClockAddress>(
            {
                'CONTEXT 1': [
                    'isoNsap',
                    $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    ),
                ],
                'CONTEXT 2': [
                    'ip',
                    $._decode_implicit<ClockAddress_ip>(
                        () => _decode_ClockAddress_ip
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ClockAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockAddress */
let _cached_encoder_for_ClockAddress: $.ASN1Encoder<ClockAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockAddress */

/* START_OF_SYMBOL_DEFINITION _encode_ClockAddress */
/**
 * @summary Encodes a(n) ClockAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockAddress, encoded as an ASN.1 Element.
 */
export function _encode_ClockAddress(
    value: ClockAddress,
    elGetter: $.ASN1Encoder<ClockAddress>
) {
    if (!_cached_encoder_for_ClockAddress) {
        _cached_encoder_for_ClockAddress = $._encode_choice<ClockAddress>(
            {
                isoNsap: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeOctetString,
                    $.BER
                ),
                ip: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ClockAddress_ip,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ClockAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockAddress */

/* eslint-enable */
