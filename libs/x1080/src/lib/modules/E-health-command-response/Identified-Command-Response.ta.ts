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
    Identified_Command_Response_command,
    _decode_Identified_Command_Response_command,
    _encode_Identified_Command_Response_command,
} from '../E-health-command-response/Identified-Command-Response-command.ta';
export {
    Identified_Command_Response_command,
    _decode_Identified_Command_Response_command,
    _encode_Identified_Command_Response_command,
} from '../E-health-command-response/Identified-Command-Response-command.ta';
import {
    Identified_Command_Response_response,
    _decode_Identified_Command_Response_response,
    _encode_Identified_Command_Response_response,
} from '../E-health-command-response/Identified-Command-Response-response.ta';
export {
    Identified_Command_Response_response,
    _decode_Identified_Command_Response_response,
    _encode_Identified_Command_Response_response,
} from '../E-health-command-response/Identified-Command-Response-response.ta';

/* START_OF_SYMBOL_DEFINITION Identified_Command_Response */
/**
 * @summary Identified_Command_Response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identified-Command-Response{INTERACTIVE-MESSAGE:Messages}  ::=  CHOICE {
 *   command
 *     SEQUENCE {message-id
 *                 INTERACTIVE-MESSAGE.&id({Messages})
 *                   (CONSTRAINED BY {-- direction shall be command -- }),
 *               message-content
 *                 INTERACTIVE-MESSAGE.&Type({Messages}{@.message-id})
 *   },
 *   response
 *     SEQUENCE {message-id
 *                 INTERACTIVE-MESSAGE.&id({Messages})
 *                   (CONSTRAINED BY {-- id shall be equal to ---- expected-response of the command --
 *                      }),
 *               message-content
 *                 INTERACTIVE-MESSAGE.&Type({Messages}{@.message-id})
 *   }
 * }
 * ```
 */
export type Identified_Command_Response =
    | { command: Identified_Command_Response_command } /* CHOICE_ALT_ROOT */
    | { response: Identified_Command_Response_response } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Identified_Command_Response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Command_Response */
let _cached_decoder_for_Identified_Command_Response: $.ASN1Decoder<Identified_Command_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identified_Command_Response */

/* START_OF_SYMBOL_DEFINITION _decode_Identified_Command_Response */
/**
 * @summary Decodes an ASN.1 element into a(n) Identified_Command_Response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identified_Command_Response} The decoded data structure.
 */
export function _decode_Identified_Command_Response(el: _Element) {
    if (!_cached_decoder_for_Identified_Command_Response) {
        _cached_decoder_for_Identified_Command_Response = $._decode_inextensible_choice<Identified_Command_Response>(
            {
                'CONTEXT 0': [
                    'command',
                    _decode_Identified_Command_Response_command,
                ],
                'CONTEXT 1': [
                    'response',
                    _decode_Identified_Command_Response_response,
                ],
            }
        );
    }
    return _cached_decoder_for_Identified_Command_Response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identified_Command_Response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Command_Response */
let _cached_encoder_for_Identified_Command_Response: $.ASN1Encoder<Identified_Command_Response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identified_Command_Response */

/* START_OF_SYMBOL_DEFINITION _encode_Identified_Command_Response */
/**
 * @summary Encodes a(n) Identified_Command_Response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identified_Command_Response, encoded as an ASN.1 Element.
 */
export function _encode_Identified_Command_Response(
    value: Identified_Command_Response,
    elGetter: $.ASN1Encoder<Identified_Command_Response>
) {
    if (!_cached_encoder_for_Identified_Command_Response) {
        _cached_encoder_for_Identified_Command_Response = $._encode_choice<Identified_Command_Response>(
            {
                command: _encode_Identified_Command_Response_command,
                response: _encode_Identified_Command_Response_response,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Identified_Command_Response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identified_Command_Response */

/* eslint-enable */
