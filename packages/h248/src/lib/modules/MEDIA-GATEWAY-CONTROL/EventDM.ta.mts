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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";
// export { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";
import { DigitMapValue, _decode_DigitMapValue, _encode_DigitMapValue } from "../MEDIA-GATEWAY-CONTROL/DigitMapValue.ta.mjs";
// export { DigitMapValue, _decode_DigitMapValue, _encode_DigitMapValue } from "../MEDIA-GATEWAY-CONTROL/DigitMapValue.ta.mjs";


/**
 * @summary EventDM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventDM  ::=  CHOICE
 *     {
 *         digitMapName            [0] DigitMapName,
 *         digitMapValue            [1] DigitMapValue
 *     }
 * ```
 */
export
type EventDM =
    { digitMapName: DigitMapName } /* CHOICE_ALT_ROOT */
    | { digitMapValue: DigitMapValue } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventDM: $.ASN1Decoder<EventDM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventDM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventDM (el: _Element): EventDM {
    if (!_cached_decoder_for_EventDM) { _cached_decoder_for_EventDM = $._decode_inextensible_choice<EventDM>({
    "CONTEXT 0": [ "digitMapName", $._decode_implicit<DigitMapName>(() => _decode_DigitMapName) ],
    "CONTEXT 1": [ "digitMapValue", $._decode_implicit<DigitMapValue>(() => _decode_DigitMapValue) ]
}); }
    return _cached_decoder_for_EventDM(el);
}

let _cached_encoder_for_EventDM: $.ASN1Encoder<EventDM> | null = null;

/**
 * @summary Encodes a(n) EventDM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventDM, encoded as an ASN.1 Element.
 */
export
function _encode_EventDM (value: EventDM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventDM) { _cached_encoder_for_EventDM = $._encode_choice<EventDM>({
    "digitMapName": $._encode_implicit(_TagClass.context, 0, () => _encode_DigitMapName, $.BER),
    "digitMapValue": $._encode_implicit(_TagClass.context, 1, () => _encode_DigitMapValue, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventDM(value, elGetter);
}


/* eslint-enable */
