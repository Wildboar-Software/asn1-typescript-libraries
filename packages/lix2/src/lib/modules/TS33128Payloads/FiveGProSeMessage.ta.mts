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
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary FiveGProSeMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeMessage  ::=  CHOICE
 * {
 *     fiveGProSeDirectDiscoveryMessage        [1] XMLType,
 *     fiveGProSeUsageInformationReportMessage [2] XMLType
 * }
 * ```
 */
export
type FiveGProSeMessage =
    { fiveGProSeDirectDiscoveryMessage: XMLType } /* CHOICE_ALT_ROOT */
    | { fiveGProSeUsageInformationReportMessage: XMLType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FiveGProSeMessage: $.ASN1Decoder<FiveGProSeMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGProSeMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGProSeMessage (el: _Element): FiveGProSeMessage {
    if (!_cached_decoder_for_FiveGProSeMessage) { _cached_decoder_for_FiveGProSeMessage = $._decode_inextensible_choice<FiveGProSeMessage>({
    "CONTEXT 1": [ "fiveGProSeDirectDiscoveryMessage", $._decode_implicit<XMLType>(() => _decode_XMLType) ],
    "CONTEXT 2": [ "fiveGProSeUsageInformationReportMessage", $._decode_implicit<XMLType>(() => _decode_XMLType) ]
}); }
    return _cached_decoder_for_FiveGProSeMessage(el);
}

let _cached_encoder_for_FiveGProSeMessage: $.ASN1Encoder<FiveGProSeMessage> | null = null;

/**
 * @summary Encodes a(n) FiveGProSeMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGProSeMessage, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGProSeMessage (value: FiveGProSeMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGProSeMessage) { _cached_encoder_for_FiveGProSeMessage = $._encode_choice<FiveGProSeMessage>({
    "fiveGProSeDirectDiscoveryMessage": $._encode_implicit(_TagClass.context, 1, () => _encode_XMLType, $.BER),
    "fiveGProSeUsageInformationReportMessage": $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER),
}, $.BER); }
    return _cached_encoder_for_FiveGProSeMessage(value, elGetter);
}


/* eslint-enable */
