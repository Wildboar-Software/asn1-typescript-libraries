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
import { SIMPLE_MESSAGE } from '../E-health-send-and-ack/SIMPLE-MESSAGE.oca';
export { SIMPLE_MESSAGE } from '../E-health-send-and-ack/SIMPLE-MESSAGE.oca';
import { Simple_Messages } from '../E-health-send-and-ack/Simple-Messages.osa';
export { Simple_Messages } from '../E-health-send-and-ack/Simple-Messages.osa';
import { CR_SEQUENCE } from '../E-health-command-response/CR-SEQUENCE.oca';
export { CR_SEQUENCE } from '../E-health-command-response/CR-SEQUENCE.oca';
import { CR_Sequences } from '../E-health-command-response/CR-Sequences.osa';
export { CR_Sequences } from '../E-health-command-response/CR-Sequences.osa';

/* START_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Request */
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
/* END_OF_SYMBOL_DEFINITION E_health_SetUp_Message_Request */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Request */
let _cached_decoder_for_E_health_SetUp_Message_Request: $.ASN1Decoder<E_health_SetUp_Message_Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_E_health_SetUp_Message_Request */

/* START_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Request */
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
/* END_OF_SYMBOL_DEFINITION _decode_E_health_SetUp_Message_Request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Request */
let _cached_encoder_for_E_health_SetUp_Message_Request: $.ASN1Encoder<E_health_SetUp_Message_Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_E_health_SetUp_Message_Request */

/* START_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Request */
/**
 * @summary Encodes a(n) E_health_SetUp_Message_Request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_E_health_SetUp_Message_Request */

/* eslint-enable */
