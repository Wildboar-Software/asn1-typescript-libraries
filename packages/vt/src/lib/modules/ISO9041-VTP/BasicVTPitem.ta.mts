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
import { ASQcontent, _decode_ASQcontent, _encode_ASQcontent } from "../ISO9041-VTP/ASQcontent.ta.mjs";
// export { ASQcontent, _decode_ASQcontent, _encode_ASQcontent } from "../ISO9041-VTP/ASQcontent.ta.mjs";
import { ASRcontent, _decode_ASRcontent, _encode_ASRcontent } from "../ISO9041-VTP/ASRcontent.ta.mjs";
// export { ASRcontent, _decode_ASRcontent, _encode_ASRcontent } from "../ISO9041-VTP/ASRcontent.ta.mjs";
import { Result2, _decode_Result2, _encode_Result2 } from "../G/Result2.ta.mjs";
// export { Result2, _decode_Result2, _encode_Result2 } from "../G/Result2.ta.mjs";
import { COupdate, _decode_COupdate, _encode_COupdate } from "../G/COupdate.ta.mjs";
// export { COupdate, _decode_COupdate, _encode_COupdate } from "../G/COupdate.ta.mjs";
import { NDQcontent, _decode_NDQcontent, _encode_NDQcontent } from "../ISO9041-VTP/NDQcontent.ta.mjs";
// export { NDQcontent, _decode_NDQcontent, _encode_NDQcontent } from "../ISO9041-VTP/NDQcontent.ta.mjs";
import { BKQcontent, _decode_BKQcontent, _encode_BKQcontent } from "../ISO9041-VTP/BKQcontent.ta.mjs";
// export { BKQcontent, _decode_BKQcontent, _encode_BKQcontent } from "../ISO9041-VTP/BKQcontent.ta.mjs";
import { Profile, _decode_Profile, _encode_Profile } from "../G/Profile.ta.mjs";
// export { Profile, _decode_Profile, _encode_Profile } from "../G/Profile.ta.mjs";
import { SNRcontent, _decode_SNRcontent, _encode_SNRcontent } from "../ISO9041-VTP/SNRcontent.ta.mjs";
// export { SNRcontent, _decode_SNRcontent, _encode_SNRcontent } from "../ISO9041-VTP/SNRcontent.ta.mjs";
import { ENQcontent, _decode_ENQcontent, _encode_ENQcontent } from "../ISO9041-VTP/ENQcontent.ta.mjs";
// export { ENQcontent, _decode_ENQcontent, _encode_ENQcontent } from "../ISO9041-VTP/ENQcontent.ta.mjs";
import { ENRcontent, _decode_ENRcontent, _encode_ENRcontent } from "../ISO9041-VTP/ENRcontent.ta.mjs";
// export { ENRcontent, _decode_ENRcontent, _encode_ENRcontent } from "../ISO9041-VTP/ENRcontent.ta.mjs";
import { ParamIdentList, _decode_ParamIdentList, _encode_ParamIdentList } from "../G/ParamIdentList.ta.mjs";
// export { ParamIdentList, _decode_ParamIdentList, _encode_ParamIdentList } from "../G/ParamIdentList.ta.mjs";
import { ParamOfferList, _decode_ParamOfferList, _encode_ParamOfferList } from "../G/ParamOfferList.ta.mjs";
// export { ParamOfferList, _decode_ParamOfferList, _encode_ParamOfferList } from "../G/ParamOfferList.ta.mjs";
import { ParamValueList, _decode_ParamValueList, _encode_ParamValueList } from "../G/ParamValueList.ta.mjs";
// export { ParamValueList, _decode_ParamValueList, _encode_ParamValueList } from "../G/ParamValueList.ta.mjs";
import { EXQcontent, _decode_EXQcontent, _encode_EXQcontent } from "../ISO9041-VTP/EXQcontent.ta.mjs";
// export { EXQcontent, _decode_EXQcontent, _encode_EXQcontent } from "../ISO9041-VTP/EXQcontent.ta.mjs";
import { SPQ2content, _decode_SPQ2content, _encode_SPQ2content } from "../ISO9041-VTP/SPQ2content.ta.mjs";
// export { SPQ2content, _decode_SPQ2content, _encode_SPQ2content } from "../ISO9041-VTP/SPQ2content.ta.mjs";
import { SPR2content, _decode_SPR2content, _encode_SPR2content } from "../ISO9041-VTP/SPR2content.ta.mjs";
// export { SPR2content, _decode_SPR2content, _encode_SPR2content } from "../ISO9041-VTP/SPR2content.ta.mjs";


/**
 * @summary BasicVTPitem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicVTPitem  ::=  CHOICE {
 *     asq-pdu   [0]  IMPLICIT ASQcontent,
 *     asr-pdu   [1]  IMPLICIT ASRcontent,
 *     rlr-pdu   [2]  G.Result2,
 *     auq-pdu   [3]  IMPLICIT PrintableString,
 *     -- absence of a VT-user-failure-reason is represented by the empty string
 *     apq-pdu   [4]  IMPLICIT PrintableString,
 *     -- empty string if reason not provided
 *     -- "P" if reason = protocol-error
 *     -- "L" if reason = local-error
 *     hdq-pdu   [5]  IMPLICIT SEQUENCE OF G.COupdate,
 *     ndq-pdu   [6]  IMPLICIT NDQcontent,
 *     udq-pdu   [7]  IMPLICIT G.COupdate,
 *     bkq-pdu   [8]  IMPLICIT BKQcontent,
 *     bkr-pdu   [9]  IMPLICIT BKQcontent,
 *     dlq-pdu   [10] IMPLICIT BOOLEAN,
 *     -- TRUE if acknowledge required
 *     daq-pdu   [11] IMPLICIT NULL,
 *     spq-pdu   [12] IMPLICIT G.Profile,
 *     spr-pdu   [13] IMPLICIT SNRcontent,
 *     snq-pdu   [14] IMPLICIT G.Profile,
 *     snr-pdu   [15] IMPLICIT SNRcontent,
 *     enq-pdu   [16] IMPLICIT ENQcontent,
 *     enr-pdu   [17] IMPLICIT ENRcontent,
 *     niq-pdu   [18] IMPLICIT G.ParamIdentList,
 *     noq-pdu   [19] IMPLICIT G.ParamOfferList,
 *     naq-pdu   [20] IMPLICIT G.ParamValueList,
 *     njq-pdu   [21] IMPLICIT G.ParamIdentList,
 *     exq-pdu   [22] IMPLICIT EXQcontent,
 *     spq2-pdu  [23] IMPLICIT SPQ2content,
 *     -- This form of spq shall be used when context retention is required.
 *     -- Either form of spq is allowed when context retention is not required,
 *     -- even when the Context Retention functional unit is selected.
 *     -- spq2 shall not be used when the Context Retention functional unit is not selected.
 *     spr2-pdu  [24] IMPLICIT SPR2content
 * }
 * ```
 */
export
type BasicVTPitem =
    { asq_pdu: ASQcontent } /* CHOICE_ALT_ROOT */
    | { asr_pdu: ASRcontent } /* CHOICE_ALT_ROOT */
    | { rlr_pdu: G.Result2 } /* CHOICE_ALT_ROOT */
    | { auq_pdu: PrintableString } /* CHOICE_ALT_ROOT */
    | { apq_pdu: PrintableString } /* CHOICE_ALT_ROOT */
    | { hdq_pdu: G.COupdate[] } /* CHOICE_ALT_ROOT */
    | { ndq_pdu: NDQcontent } /* CHOICE_ALT_ROOT */
    | { udq_pdu: G.COupdate } /* CHOICE_ALT_ROOT */
    | { bkq_pdu: BKQcontent } /* CHOICE_ALT_ROOT */
    | { bkr_pdu: BKQcontent } /* CHOICE_ALT_ROOT */
    | { dlq_pdu: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { daq_pdu: NULL } /* CHOICE_ALT_ROOT */
    | { spq_pdu: G.Profile } /* CHOICE_ALT_ROOT */
    | { spr_pdu: SNRcontent } /* CHOICE_ALT_ROOT */
    | { snq_pdu: G.Profile } /* CHOICE_ALT_ROOT */
    | { snr_pdu: SNRcontent } /* CHOICE_ALT_ROOT */
    | { enq_pdu: ENQcontent } /* CHOICE_ALT_ROOT */
    | { enr_pdu: ENRcontent } /* CHOICE_ALT_ROOT */
    | { niq_pdu: G.ParamIdentList } /* CHOICE_ALT_ROOT */
    | { noq_pdu: G.ParamOfferList } /* CHOICE_ALT_ROOT */
    | { naq_pdu: G.ParamValueList } /* CHOICE_ALT_ROOT */
    | { njq_pdu: G.ParamIdentList } /* CHOICE_ALT_ROOT */
    | { exq_pdu: EXQcontent } /* CHOICE_ALT_ROOT */
    | { spq2_pdu: SPQ2content } /* CHOICE_ALT_ROOT */
    | { spr2_pdu: SPR2content } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BasicVTPitem: $.ASN1Decoder<BasicVTPitem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicVTPitem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicVTPitem (el: _Element): BasicVTPitem {
    if (!_cached_decoder_for_BasicVTPitem) { _cached_decoder_for_BasicVTPitem = $._decode_inextensible_choice<BasicVTPitem>({
    "CONTEXT 0": [ "asq_pdu", $._decode_implicit<ASQcontent>(() => _decode_ASQcontent) ],
    "CONTEXT 1": [ "asr_pdu", $._decode_implicit<ASRcontent>(() => _decode_ASRcontent) ],
    "CONTEXT 2": [ "rlr_pdu", $._decode_explicit<G.Result2>(() => G._decode_Result2) ],
    "CONTEXT 3": [ "auq_pdu", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 4": [ "apq_pdu", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 5": [ "hdq_pdu", $._decode_implicit<G.COupdate[]>(() => $._decodeSequenceOf<G.COupdate>(() => G._decode_COupdate)) ],
    "CONTEXT 6": [ "ndq_pdu", $._decode_implicit<NDQcontent>(() => _decode_NDQcontent) ],
    "CONTEXT 7": [ "udq_pdu", $._decode_implicit<G.COupdate>(() => G._decode_COupdate) ],
    "CONTEXT 8": [ "bkq_pdu", $._decode_implicit<BKQcontent>(() => _decode_BKQcontent) ],
    "CONTEXT 9": [ "bkr_pdu", $._decode_implicit<BKQcontent>(() => _decode_BKQcontent) ],
    "CONTEXT 10": [ "dlq_pdu", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 11": [ "daq_pdu", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "spq_pdu", $._decode_implicit<G.Profile>(() => G._decode_Profile) ],
    "CONTEXT 13": [ "spr_pdu", $._decode_implicit<SNRcontent>(() => _decode_SNRcontent) ],
    "CONTEXT 14": [ "snq_pdu", $._decode_implicit<G.Profile>(() => G._decode_Profile) ],
    "CONTEXT 15": [ "snr_pdu", $._decode_implicit<SNRcontent>(() => _decode_SNRcontent) ],
    "CONTEXT 16": [ "enq_pdu", $._decode_implicit<ENQcontent>(() => _decode_ENQcontent) ],
    "CONTEXT 17": [ "enr_pdu", $._decode_implicit<ENRcontent>(() => _decode_ENRcontent) ],
    "CONTEXT 18": [ "niq_pdu", $._decode_implicit<G.ParamIdentList>(() => G._decode_ParamIdentList) ],
    "CONTEXT 19": [ "noq_pdu", $._decode_implicit<G.ParamOfferList>(() => G._decode_ParamOfferList) ],
    "CONTEXT 20": [ "naq_pdu", $._decode_implicit<G.ParamValueList>(() => G._decode_ParamValueList) ],
    "CONTEXT 21": [ "njq_pdu", $._decode_implicit<G.ParamIdentList>(() => G._decode_ParamIdentList) ],
    "CONTEXT 22": [ "exq_pdu", $._decode_implicit<EXQcontent>(() => _decode_EXQcontent) ],
    "CONTEXT 23": [ "spq2_pdu", $._decode_implicit<SPQ2content>(() => _decode_SPQ2content) ],
    "CONTEXT 24": [ "spr2_pdu", $._decode_implicit<SPR2content>(() => _decode_SPR2content) ]
}); }
    return _cached_decoder_for_BasicVTPitem(el);
}

let _cached_encoder_for_BasicVTPitem: $.ASN1Encoder<BasicVTPitem> | null = null;

/**
 * @summary Encodes a(n) BasicVTPitem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicVTPitem, encoded as an ASN.1 Element.
 */
export
function _encode_BasicVTPitem (value: BasicVTPitem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicVTPitem) { _cached_encoder_for_BasicVTPitem = $._encode_choice<BasicVTPitem>({
    "asq_pdu": $._encode_implicit(_TagClass.context, 0, () => _encode_ASQcontent, $.BER),
    "asr_pdu": $._encode_implicit(_TagClass.context, 1, () => _encode_ASRcontent, $.BER),
    "rlr_pdu": $._encode_explicit(_TagClass.context, 2, () => G._encode_Result2, $.BER),
    "auq_pdu": $._encode_implicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER),
    "apq_pdu": $._encode_implicit(_TagClass.context, 4, () => $._encodePrintableString, $.BER),
    "hdq_pdu": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<G.COupdate>(() => G._encode_COupdate, $.BER), $.BER),
    "ndq_pdu": $._encode_implicit(_TagClass.context, 6, () => _encode_NDQcontent, $.BER),
    "udq_pdu": $._encode_implicit(_TagClass.context, 7, () => G._encode_COupdate, $.BER),
    "bkq_pdu": $._encode_implicit(_TagClass.context, 8, () => _encode_BKQcontent, $.BER),
    "bkr_pdu": $._encode_implicit(_TagClass.context, 9, () => _encode_BKQcontent, $.BER),
    "dlq_pdu": $._encode_implicit(_TagClass.context, 10, () => $._encodeBoolean, $.BER),
    "daq_pdu": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "spq_pdu": $._encode_implicit(_TagClass.context, 12, () => G._encode_Profile, $.BER),
    "spr_pdu": $._encode_implicit(_TagClass.context, 13, () => _encode_SNRcontent, $.BER),
    "snq_pdu": $._encode_implicit(_TagClass.context, 14, () => G._encode_Profile, $.BER),
    "snr_pdu": $._encode_implicit(_TagClass.context, 15, () => _encode_SNRcontent, $.BER),
    "enq_pdu": $._encode_implicit(_TagClass.context, 16, () => _encode_ENQcontent, $.BER),
    "enr_pdu": $._encode_implicit(_TagClass.context, 17, () => _encode_ENRcontent, $.BER),
    "niq_pdu": $._encode_implicit(_TagClass.context, 18, () => G._encode_ParamIdentList, $.BER),
    "noq_pdu": $._encode_implicit(_TagClass.context, 19, () => G._encode_ParamOfferList, $.BER),
    "naq_pdu": $._encode_implicit(_TagClass.context, 20, () => G._encode_ParamValueList, $.BER),
    "njq_pdu": $._encode_implicit(_TagClass.context, 21, () => G._encode_ParamIdentList, $.BER),
    "exq_pdu": $._encode_implicit(_TagClass.context, 22, () => _encode_EXQcontent, $.BER),
    "spq2_pdu": $._encode_implicit(_TagClass.context, 23, () => _encode_SPQ2content, $.BER),
    "spr2_pdu": $._encode_implicit(_TagClass.context, 24, () => _encode_SPR2content, $.BER),
}, $.BER); }
    return _cached_encoder_for_BasicVTPitem(value, elGetter);
}


/* eslint-enable */
