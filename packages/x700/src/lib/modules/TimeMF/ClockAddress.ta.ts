/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ClockAddress_ip,
    _decode_ClockAddress_ip,
    _encode_ClockAddress_ip,
} from '../TimeMF/ClockAddress-ip.ta';
export {
    ClockAddress_ip,
    _decode_ClockAddress_ip,
    _encode_ClockAddress_ip,
} from '../TimeMF/ClockAddress-ip.ta';

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
