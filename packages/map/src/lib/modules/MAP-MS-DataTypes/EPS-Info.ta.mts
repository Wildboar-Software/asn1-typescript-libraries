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
import { PDN_GW_Update, _decode_PDN_GW_Update, _encode_PDN_GW_Update } from "../MAP-MS-DataTypes/PDN-GW-Update.ta.mjs";
import { ISR_Information, ISR_Information_updateLocation /* IMPORTED_LONG_NAMED_BIT */, updateLocation /* IMPORTED_SHORT_NAMED_BIT */, ISR_Information_cancelSGSN /* IMPORTED_LONG_NAMED_BIT */, cancelSGSN /* IMPORTED_SHORT_NAMED_BIT */, ISR_Information_initialAttachIndicator /* IMPORTED_LONG_NAMED_BIT */, initialAttachIndicator /* IMPORTED_SHORT_NAMED_BIT */, _decode_ISR_Information, _encode_ISR_Information } from "../MAP-MS-DataTypes/ISR-Information.ta.mjs";


/**
 * @summary EPS_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-Info  ::=  CHOICE{
 *     pdn-gw-update    [0] PDN-GW-Update,
 *     isr-Information    [1] ISR-Information }
 * ```
 */
export
type EPS_Info =
    { pdn_gw_update: PDN_GW_Update } /* CHOICE_ALT_ROOT */
    | { isr_Information: ISR_Information } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EPS_Info: $.ASN1Decoder<EPS_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_Info (el: _Element): EPS_Info {
    if (!_cached_decoder_for_EPS_Info) { _cached_decoder_for_EPS_Info = $._decode_inextensible_choice<EPS_Info>({
    "CONTEXT 0": [ "pdn_gw_update", $._decode_implicit<PDN_GW_Update>(() => _decode_PDN_GW_Update) ],
    "CONTEXT 1": [ "isr_Information", $._decode_implicit<ISR_Information>(() => _decode_ISR_Information) ]
}); }
    return _cached_decoder_for_EPS_Info(el);
}

let _cached_encoder_for_EPS_Info: $.ASN1Encoder<EPS_Info> | null = null;

/**
 * @summary Encodes a(n) EPS_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_Info, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_Info (value: EPS_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_Info) { _cached_encoder_for_EPS_Info = $._encode_choice<EPS_Info>({
    "pdn_gw_update": $._encode_implicit(_TagClass.context, 0, () => _encode_PDN_GW_Update, $.BER),
    "isr_Information": $._encode_implicit(_TagClass.context, 1, () => _encode_ISR_Information, $.BER),
}, $.BER); }
    return _cached_encoder_for_EPS_Info(value, elGetter);
}


/* eslint-enable */
