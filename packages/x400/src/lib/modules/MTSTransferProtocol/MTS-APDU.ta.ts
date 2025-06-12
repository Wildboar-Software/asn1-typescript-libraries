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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Message,
    _decode_Message,
    _encode_Message,
} from '../MTAAbstractService/Message.ta.js';
export {
    Message,
    _decode_Message,
    _encode_Message,
} from '../MTAAbstractService/Message.ta.js';
import {
    Probe,
    _decode_Probe,
    _encode_Probe,
} from '../MTAAbstractService/Probe.ta.js';
export {
    Probe,
    _decode_Probe,
    _encode_Probe,
} from '../MTAAbstractService/Probe.ta.js';
import {
    Report,
    _decode_Report,
    _encode_Report,
} from '../MTAAbstractService/Report.ta.js';
export {
    Report,
    _decode_Report,
    _encode_Report,
} from '../MTAAbstractService/Report.ta.js';

/* START_OF_SYMBOL_DEFINITION MTS_APDU */
/**
 * @summary MTS_APDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTS-APDU  ::=  CHOICE {
 *   message  [0]  Message,
 *   probe    [2]  Probe,
 *   report   [1]  Report
 * }
 * ```
 */
export type MTS_APDU =
    | { message: Message } /* CHOICE_ALT_ROOT */
    | { probe: Probe } /* CHOICE_ALT_ROOT */
    | { report: Report } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MTS_APDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTS_APDU */
let _cached_decoder_for_MTS_APDU: $.ASN1Decoder<MTS_APDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTS_APDU */

/* START_OF_SYMBOL_DEFINITION _decode_MTS_APDU */
/**
 * @summary Decodes an ASN.1 element into a(n) MTS_APDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTS_APDU} The decoded data structure.
 */
export function _decode_MTS_APDU(el: _Element) {
    if (!_cached_decoder_for_MTS_APDU) {
        _cached_decoder_for_MTS_APDU = $._decode_inextensible_choice<MTS_APDU>({
            'CONTEXT 0': [
                'message',
                $._decode_implicit<Message>(() => _decode_Message),
            ],
            'CONTEXT 2': [
                'probe',
                $._decode_implicit<Probe>(() => _decode_Probe),
            ],
            'CONTEXT 1': [
                'report',
                $._decode_implicit<Report>(() => _decode_Report),
            ],
        });
    }
    return _cached_decoder_for_MTS_APDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTS_APDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTS_APDU */
let _cached_encoder_for_MTS_APDU: $.ASN1Encoder<MTS_APDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTS_APDU */

/* START_OF_SYMBOL_DEFINITION _encode_MTS_APDU */
/**
 * @summary Encodes a(n) MTS_APDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTS_APDU, encoded as an ASN.1 Element.
 */
export function _encode_MTS_APDU(
    value: MTS_APDU,
    elGetter: $.ASN1Encoder<MTS_APDU>
) {
    if (!_cached_encoder_for_MTS_APDU) {
        _cached_encoder_for_MTS_APDU = $._encode_choice<MTS_APDU>(
            {
                message: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Message,
                    $.BER
                ),
                probe: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Probe,
                    $.BER
                ),
                report: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Report,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTS_APDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTS_APDU */

/* eslint-enable */
