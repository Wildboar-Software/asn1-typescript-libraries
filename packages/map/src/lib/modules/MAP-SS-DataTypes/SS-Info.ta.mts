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
import { ForwardingInfo, _decode_ForwardingInfo, _encode_ForwardingInfo } from "../MAP-SS-DataTypes/ForwardingInfo.ta.mjs";
import { CallBarringInfo, _decode_CallBarringInfo, _encode_CallBarringInfo } from "../MAP-SS-DataTypes/CallBarringInfo.ta.mjs";
import { SS_Data, _decode_SS_Data, _encode_SS_Data } from "../MAP-SS-DataTypes/SS-Data.ta.mjs";


/**
 * @summary SS_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-Info  ::=  CHOICE {
 *     forwardingInfo    [0] ForwardingInfo,
 *     callBarringInfo    [1] CallBarringInfo,
 *     ss-Data    [3] SS-Data}
 * ```
 */
export
type SS_Info =
    { forwardingInfo: ForwardingInfo } /* CHOICE_ALT_ROOT */
    | { callBarringInfo: CallBarringInfo } /* CHOICE_ALT_ROOT */
    | { ss_Data: SS_Data } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SS_Info: $.ASN1Decoder<SS_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_Info (el: _Element): SS_Info {
    if (!_cached_decoder_for_SS_Info) { _cached_decoder_for_SS_Info = $._decode_inextensible_choice<SS_Info>({
    "CONTEXT 0": [ "forwardingInfo", $._decode_implicit<ForwardingInfo>(() => _decode_ForwardingInfo) ],
    "CONTEXT 1": [ "callBarringInfo", $._decode_implicit<CallBarringInfo>(() => _decode_CallBarringInfo) ],
    "CONTEXT 3": [ "ss_Data", $._decode_implicit<SS_Data>(() => _decode_SS_Data) ]
}); }
    return _cached_decoder_for_SS_Info(el);
}

let _cached_encoder_for_SS_Info: $.ASN1Encoder<SS_Info> | null = null;

/**
 * @summary Encodes a(n) SS_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_Info, encoded as an ASN.1 Element.
 */
export
function _encode_SS_Info (value: SS_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_Info) { _cached_encoder_for_SS_Info = $._encode_choice<SS_Info>({
    "forwardingInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_ForwardingInfo, $.BER),
    "callBarringInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_CallBarringInfo, $.BER),
    "ss_Data": $._encode_implicit(_TagClass.context, 3, () => _encode_SS_Data, $.BER),
}, $.BER); }
    return _cached_encoder_for_SS_Info(value, elGetter);
}


/* eslint-enable */
