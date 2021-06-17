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
    ClockAddress,
    _decode_ClockAddress,
    _encode_ClockAddress,
} from '../TimeMF/ClockAddress.ta';
export {
    ClockAddress,
    _decode_ClockAddress,
    _encode_ClockAddress,
} from '../TimeMF/ClockAddress.ta';
import {
    ReferenceClockType,
    ReferenceClockType_unspecifiedOrUnknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecifiedOrUnknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_calibratedAtomicClock /* IMPORTED_LONG_NAMED_INTEGER */,
    calibratedAtomicClock /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioVLForLF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioVLForLF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioHF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioHF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioUHF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioUHF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_localNet /* IMPORTED_LONG_NAMED_INTEGER */,
    localNet /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_synch /* IMPORTED_LONG_NAMED_INTEGER */,
    synch /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_wallclock /* IMPORTED_LONG_NAMED_INTEGER */,
    wallclock /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_telephoneModem /* IMPORTED_LONG_NAMED_INTEGER */,
    telephoneModem /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_gps /* IMPORTED_LONG_NAMED_INTEGER */,
    gps /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_loranC /* IMPORTED_LONG_NAMED_INTEGER */,
    loranC /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ReferenceClockType,
    _encode_ReferenceClockType,
} from '../TimeMF/ReferenceClockType.ta';
export {
    ReferenceClockType,
    ReferenceClockType_unspecifiedOrUnknown /* IMPORTED_LONG_NAMED_INTEGER */,
    unspecifiedOrUnknown /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_calibratedAtomicClock /* IMPORTED_LONG_NAMED_INTEGER */,
    calibratedAtomicClock /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioVLForLF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioVLForLF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioHF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioHF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_radioUHF /* IMPORTED_LONG_NAMED_INTEGER */,
    radioUHF /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_localNet /* IMPORTED_LONG_NAMED_INTEGER */,
    localNet /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_synch /* IMPORTED_LONG_NAMED_INTEGER */,
    synch /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_wallclock /* IMPORTED_LONG_NAMED_INTEGER */,
    wallclock /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_telephoneModem /* IMPORTED_LONG_NAMED_INTEGER */,
    telephoneModem /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_gps /* IMPORTED_LONG_NAMED_INTEGER */,
    gps /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_loranC /* IMPORTED_LONG_NAMED_INTEGER */,
    loranC /* IMPORTED_SHORT_NAMED_INTEGER */,
    ReferenceClockType_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ReferenceClockType,
    _encode_ReferenceClockType,
} from '../TimeMF/ReferenceClockType.ta';

/* START_OF_SYMBOL_DEFINITION CurrSynchSourceAddress */
/**
 * @summary CurrSynchSourceAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CurrSynchSourceAddress  ::=  CHOICE {
 *   refPeerAssoc  [0]  ClockAddress,
 *   refClockID    [1]  ReferenceClockType
 * }
 * ```
 */
export type CurrSynchSourceAddress =
    | { refPeerAssoc: ClockAddress } /* CHOICE_ALT_ROOT */
    | { refClockID: ReferenceClockType } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CurrSynchSourceAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrSynchSourceAddress */
let _cached_decoder_for_CurrSynchSourceAddress: $.ASN1Decoder<CurrSynchSourceAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CurrSynchSourceAddress */

/* START_OF_SYMBOL_DEFINITION _decode_CurrSynchSourceAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) CurrSynchSourceAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CurrSynchSourceAddress} The decoded data structure.
 */
export function _decode_CurrSynchSourceAddress(el: _Element) {
    if (!_cached_decoder_for_CurrSynchSourceAddress) {
        _cached_decoder_for_CurrSynchSourceAddress = $._decode_inextensible_choice<CurrSynchSourceAddress>(
            {
                'CONTEXT 0': [
                    'refPeerAssoc',
                    $._decode_explicit<ClockAddress>(
                        () => _decode_ClockAddress
                    ),
                ],
                'CONTEXT 1': [
                    'refClockID',
                    $._decode_implicit<ReferenceClockType>(
                        () => _decode_ReferenceClockType
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CurrSynchSourceAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CurrSynchSourceAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrSynchSourceAddress */
let _cached_encoder_for_CurrSynchSourceAddress: $.ASN1Encoder<CurrSynchSourceAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CurrSynchSourceAddress */

/* START_OF_SYMBOL_DEFINITION _encode_CurrSynchSourceAddress */
/**
 * @summary Encodes a(n) CurrSynchSourceAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrSynchSourceAddress, encoded as an ASN.1 Element.
 */
export function _encode_CurrSynchSourceAddress(
    value: CurrSynchSourceAddress,
    elGetter: $.ASN1Encoder<CurrSynchSourceAddress>
) {
    if (!_cached_encoder_for_CurrSynchSourceAddress) {
        _cached_encoder_for_CurrSynchSourceAddress = $._encode_choice<CurrSynchSourceAddress>(
            {
                refPeerAssoc: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ClockAddress,
                    $.BER
                ),
                refClockID: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ReferenceClockType,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CurrSynchSourceAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CurrSynchSourceAddress */

/* eslint-enable */
