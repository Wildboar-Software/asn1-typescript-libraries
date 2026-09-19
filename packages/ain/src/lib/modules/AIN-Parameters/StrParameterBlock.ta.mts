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
import { AnnouncementBlock, _decode_AnnouncementBlock, _encode_AnnouncementBlock } from "../AIN-Parameters/AnnouncementBlock.ta.mjs";
// export { AnnouncementBlock, _decode_AnnouncementBlock, _encode_AnnouncementBlock } from "../AIN-Parameters/AnnouncementBlock.ta.mjs";
import { AnnouncementDigitBlock, _decode_AnnouncementDigitBlock, _encode_AnnouncementDigitBlock } from "../AIN-Parameters/AnnouncementDigitBlock.ta.mjs";
// export { AnnouncementDigitBlock, _decode_AnnouncementDigitBlock, _encode_AnnouncementDigitBlock } from "../AIN-Parameters/AnnouncementDigitBlock.ta.mjs";
import { FlexParameterBlock, _decode_FlexParameterBlock, _encode_FlexParameterBlock } from "../AIN-Parameters/FlexParameterBlock.ta.mjs";
// export { FlexParameterBlock, _decode_FlexParameterBlock, _encode_FlexParameterBlock } from "../AIN-Parameters/FlexParameterBlock.ta.mjs";


/**
 * @summary StrParameterBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StrParameterBlock  ::=  [50] CHOICE {
 *             announcementBlock       [0] IMPLICIT AnnouncementBlock,
 *             announcementDigitBlock  [1] IMPLICIT AnnouncementDigitBlock,
 *             flexParameterBlock      [2] IMPLICIT FlexParameterBlock
 *     }
 * ```
 */
export
type StrParameterBlock =
    { announcementBlock: AnnouncementBlock } /* CHOICE_ALT_ROOT */
    | { announcementDigitBlock: AnnouncementDigitBlock } /* CHOICE_ALT_ROOT */
    | { flexParameterBlock: FlexParameterBlock } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StrParameterBlock: $.ASN1Decoder<StrParameterBlock> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StrParameterBlock
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StrParameterBlock (el: _Element): StrParameterBlock {
    if (!_cached_decoder_for_StrParameterBlock) { _cached_decoder_for_StrParameterBlock = $._decode_explicit<StrParameterBlock>(() => $._decode_inextensible_choice<StrParameterBlock>({
    "CONTEXT 0": [ "announcementBlock", $._decode_implicit<AnnouncementBlock>(() => _decode_AnnouncementBlock) ],
    "CONTEXT 1": [ "announcementDigitBlock", $._decode_implicit<AnnouncementDigitBlock>(() => _decode_AnnouncementDigitBlock) ],
    "CONTEXT 2": [ "flexParameterBlock", $._decode_implicit<FlexParameterBlock>(() => _decode_FlexParameterBlock) ]
})); }
    return _cached_decoder_for_StrParameterBlock(el);
}

let _cached_encoder_for_StrParameterBlock: $.ASN1Encoder<StrParameterBlock> | null = null;

/**
 * @summary Encodes a(n) StrParameterBlock into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StrParameterBlock, encoded as an ASN.1 Element.
 */
export
function _encode_StrParameterBlock (value: StrParameterBlock, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StrParameterBlock) { _cached_encoder_for_StrParameterBlock = $._encode_explicit(_TagClass.context, 50, () => $._encode_choice<StrParameterBlock>({
    "announcementBlock": $._encode_implicit(_TagClass.context, 0, () => _encode_AnnouncementBlock, $.BER),
    "announcementDigitBlock": $._encode_implicit(_TagClass.context, 1, () => _encode_AnnouncementDigitBlock, $.BER),
    "flexParameterBlock": $._encode_implicit(_TagClass.context, 2, () => _encode_FlexParameterBlock, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_StrParameterBlock(value, elGetter);
}


/* eslint-enable */
