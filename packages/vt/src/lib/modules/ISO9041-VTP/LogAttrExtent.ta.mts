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
import { LogAttrExtent_address, _decode_LogAttrExtent_address, _encode_LogAttrExtent_address } from "../ISO9041-VTP/LogAttrExtent-address.ta.mjs";
// export { LogAttrExtent_address, _decode_LogAttrExtent_address, _encode_LogAttrExtent_address } from "../ISO9041-VTP/LogAttrExtent-address.ta.mjs";


/**
 * @summary LogAttrExtent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogAttrExtent  ::=  CHOICE {
 *     global  [0] IMPLICIT NULL,
 *     address [1] IMPLICIT SEQUENCE {
 *         beginning LogPointer,
 *         ending LogPointer
 *     },
 *     modal   [2] IMPLICIT NULL
 * }
 * ```
 */
export
type LogAttrExtent =
    { global: NULL } /* CHOICE_ALT_ROOT */
    | { address: LogAttrExtent_address } /* CHOICE_ALT_ROOT */
    | { modal: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LogAttrExtent: $.ASN1Decoder<LogAttrExtent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogAttrExtent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogAttrExtent (el: _Element): LogAttrExtent {
    if (!_cached_decoder_for_LogAttrExtent) { _cached_decoder_for_LogAttrExtent = $._decode_inextensible_choice<LogAttrExtent>({
    "CONTEXT 0": [ "global", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "address", $._decode_implicit<LogAttrExtent_address>(() => _decode_LogAttrExtent_address) ],
    "CONTEXT 2": [ "modal", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_LogAttrExtent(el);
}

let _cached_encoder_for_LogAttrExtent: $.ASN1Encoder<LogAttrExtent> | null = null;

/**
 * @summary Encodes a(n) LogAttrExtent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogAttrExtent, encoded as an ASN.1 Element.
 */
export
function _encode_LogAttrExtent (value: LogAttrExtent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogAttrExtent) { _cached_encoder_for_LogAttrExtent = $._encode_choice<LogAttrExtent>({
    "global": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "address": $._encode_implicit(_TagClass.context, 1, () => _encode_LogAttrExtent_address, $.BER),
    "modal": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_LogAttrExtent(value, elGetter);
}


/* eslint-enable */
