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
import { Ext_ForwInfo, _decode_Ext_ForwInfo, _encode_Ext_ForwInfo } from "../MAP-MS-DataTypes/Ext-ForwInfo.ta.mjs";
import { Ext_CallBarInfo, _decode_Ext_CallBarInfo, _encode_Ext_CallBarInfo } from "../MAP-MS-DataTypes/Ext-CallBarInfo.ta.mjs";
import { CUG_Info, _decode_CUG_Info, _encode_CUG_Info } from "../MAP-MS-DataTypes/CUG-Info.ta.mjs";
import { Ext_SS_Data, _decode_Ext_SS_Data, _encode_Ext_SS_Data } from "../MAP-MS-DataTypes/Ext-SS-Data.ta.mjs";
import { EMLPP_Info, _decode_EMLPP_Info, _encode_EMLPP_Info } from "../MAP-CommonDataTypes/EMLPP-Info.ta.mjs";


/**
 * @summary Ext_SS_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SS-Info  ::=  CHOICE {
 *     forwardingInfo    [0] Ext-ForwInfo,
 *     callBarringInfo    [1] Ext-CallBarInfo,
 *     cug-Info    [2] CUG-Info,
 *     ss-Data    [3] Ext-SS-Data,
 *     emlpp-Info    [4] EMLPP-Info}
 * ```
 */
export
type Ext_SS_Info =
    { forwardingInfo: Ext_ForwInfo } /* CHOICE_ALT_ROOT */
    | { callBarringInfo: Ext_CallBarInfo } /* CHOICE_ALT_ROOT */
    | { cug_Info: CUG_Info } /* CHOICE_ALT_ROOT */
    | { ss_Data: Ext_SS_Data } /* CHOICE_ALT_ROOT */
    | { emlpp_Info: EMLPP_Info } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Ext_SS_Info: $.ASN1Decoder<Ext_SS_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SS_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SS_Info (el: _Element): Ext_SS_Info {
    if (!_cached_decoder_for_Ext_SS_Info) { _cached_decoder_for_Ext_SS_Info = $._decode_inextensible_choice<Ext_SS_Info>({
    "CONTEXT 0": [ "forwardingInfo", $._decode_implicit<Ext_ForwInfo>(() => _decode_Ext_ForwInfo) ],
    "CONTEXT 1": [ "callBarringInfo", $._decode_implicit<Ext_CallBarInfo>(() => _decode_Ext_CallBarInfo) ],
    "CONTEXT 2": [ "cug_Info", $._decode_implicit<CUG_Info>(() => _decode_CUG_Info) ],
    "CONTEXT 3": [ "ss_Data", $._decode_implicit<Ext_SS_Data>(() => _decode_Ext_SS_Data) ],
    "CONTEXT 4": [ "emlpp_Info", $._decode_implicit<EMLPP_Info>(() => _decode_EMLPP_Info) ]
}); }
    return _cached_decoder_for_Ext_SS_Info(el);
}

let _cached_encoder_for_Ext_SS_Info: $.ASN1Encoder<Ext_SS_Info> | null = null;

/**
 * @summary Encodes a(n) Ext_SS_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SS_Info, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SS_Info (value: Ext_SS_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SS_Info) { _cached_encoder_for_Ext_SS_Info = $._encode_choice<Ext_SS_Info>({
    "forwardingInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_ForwInfo, $.BER),
    "callBarringInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_CallBarInfo, $.BER),
    "cug_Info": $._encode_implicit(_TagClass.context, 2, () => _encode_CUG_Info, $.BER),
    "ss_Data": $._encode_implicit(_TagClass.context, 3, () => _encode_Ext_SS_Data, $.BER),
    "emlpp_Info": $._encode_implicit(_TagClass.context, 4, () => _encode_EMLPP_Info, $.BER),
}, $.BER); }
    return _cached_encoder_for_Ext_SS_Info(value, elGetter);
}


/* eslint-enable */
