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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
import { MessageID_text, _decode_MessageID_text, _encode_MessageID_text } from "../IN-CS2-datatypes/MessageID-text.ta.mjs";
// export { MessageID_text, _decode_MessageID_text, _encode_MessageID_text } from "../IN-CS2-datatypes/MessageID-text.ta.mjs";
import { MessageID_variableMessage, _decode_MessageID_variableMessage, _encode_MessageID_variableMessage } from "../IN-CS2-datatypes/MessageID-variableMessage.ta.mjs";
// export { MessageID_variableMessage, _decode_MessageID_variableMessage, _encode_MessageID_variableMessage } from "../IN-CS2-datatypes/MessageID-variableMessage.ta.mjs";


/**
 * @summary MessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageID{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   elementaryMessageID   [0]  Integer4,
 *   text
 *     [1]  SEQUENCE {messageContent
 *                      [0]  IA5String
 *                             (SIZE (bound.&minMessageContentLength..
 *                                      bound.&maxMessageContentLength)),
 *                    attributes
 *                      [1]  OCTET STRING
 *                             (SIZE (bound.&minAttributesLength..
 *                                      bound.&maxAttributesLength)) OPTIONAL
 *   },
 *   elementaryMessageIDs
 *     [29]  SEQUENCE SIZE (1..bound.&numOfMessageIDs) OF Integer4,
 *   variableMessage
 *     [30]  SEQUENCE {elementaryMessageID  [0]  Integer4,
 *                     variableParts
 *                       [1]  SEQUENCE SIZE (1..5) OF VariablePart{bound}
 *   }
 * }
 * ```
 */
export
type MessageID =
    { elementaryMessageID: Integer4 } /* CHOICE_ALT_ROOT */
    | { text: MessageID_text } /* CHOICE_ALT_ROOT */
    | { elementaryMessageIDs: Integer4[] } /* CHOICE_ALT_ROOT */
    | { variableMessage: MessageID_variableMessage } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MessageID: $.ASN1Decoder<MessageID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageID (el: _Element): MessageID {
    if (!_cached_decoder_for_MessageID) { _cached_decoder_for_MessageID = $._decode_inextensible_choice<MessageID>({
    "CONTEXT 0": [ "elementaryMessageID", $._decode_implicit<Integer4>(() => _decode_Integer4) ],
    "CONTEXT 1": [ "text", $._decode_implicit<MessageID_text>(() => _decode_MessageID_text) ],
    "CONTEXT 29": [ "elementaryMessageIDs", $._decode_implicit<Integer4[]>(() => $._decodeSequenceOf<Integer4>(() => _decode_Integer4)) ],
    "CONTEXT 30": [ "variableMessage", $._decode_implicit<MessageID_variableMessage>(() => _decode_MessageID_variableMessage) ]
}); }
    return _cached_decoder_for_MessageID(el);
}

let _cached_encoder_for_MessageID: $.ASN1Encoder<MessageID> | null = null;

/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export
function _encode_MessageID (value: MessageID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageID) { _cached_encoder_for_MessageID = $._encode_choice<MessageID>({
    "elementaryMessageID": $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER),
    "text": $._encode_implicit(_TagClass.context, 1, () => _encode_MessageID_text, $.BER),
    "elementaryMessageIDs": $._encode_implicit(_TagClass.context, 29, () => $._encodeSequenceOf<Integer4>(() => _encode_Integer4, $.BER), $.BER),
    "variableMessage": $._encode_implicit(_TagClass.context, 30, () => _encode_MessageID_variableMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_MessageID(value, elGetter);
}


/* eslint-enable */
