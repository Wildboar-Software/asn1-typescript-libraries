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



/**
 * @summary SpecificCSI_Withdraw
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificCSI-Withdraw  ::=  BIT STRING {
 *     o-csi (0),
 *     ss-csi (1),
 *     tif-csi (2),
 *     d-csi (3),
 *     vt-csi (4),
 *     mo-sms-csi (5),
 *     m-csi (6),
 *     gprs-csi (7),
 *     t-csi (8),
 *     mt-sms-csi (9),
 *     mg-csi (10),
 *     o-IM-CSI (11), 
 *     d-IM-CSI (12),
 *     vt-IM-CSI (13) } (SIZE(8..32))
 * ```
 */
export
type SpecificCSI_Withdraw = BIT_STRING;

/**
 * @summary SpecificCSI_Withdraw_o_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_o_csi: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary o_csi
 * @constant
 */
export
const o_csi: number = SpecificCSI_Withdraw_o_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_ss_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_ss_csi: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ss_csi
 * @constant
 */
export
const ss_csi: number = SpecificCSI_Withdraw_ss_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_tif_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_tif_csi: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary tif_csi
 * @constant
 */
export
const tif_csi: number = SpecificCSI_Withdraw_tif_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_d_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_d_csi: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary d_csi
 * @constant
 */
export
const d_csi: number = SpecificCSI_Withdraw_d_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_vt_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_vt_csi: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary vt_csi
 * @constant
 */
export
const vt_csi: number = SpecificCSI_Withdraw_vt_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_mo_sms_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_mo_sms_csi: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mo_sms_csi
 * @constant
 */
export
const mo_sms_csi: number = SpecificCSI_Withdraw_mo_sms_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_m_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_m_csi: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary m_csi
 * @constant
 */
export
const m_csi: number = SpecificCSI_Withdraw_m_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_gprs_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_gprs_csi: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary gprs_csi
 * @constant
 */
export
const gprs_csi: number = SpecificCSI_Withdraw_gprs_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_t_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_t_csi: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary t_csi
 * @constant
 */
export
const t_csi: number = SpecificCSI_Withdraw_t_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_mt_sms_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_mt_sms_csi: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary mt_sms_csi
 * @constant
 */
export
const mt_sms_csi: number = SpecificCSI_Withdraw_mt_sms_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_mg_csi
 * @constant
 */
export
const SpecificCSI_Withdraw_mg_csi: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary mg_csi
 * @constant
 */
export
const mg_csi: number = SpecificCSI_Withdraw_mg_csi; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_o_IM_CSI
 * @constant
 */
export
const SpecificCSI_Withdraw_o_IM_CSI: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary o_IM_CSI
 * @constant
 */
export
const o_IM_CSI: number = SpecificCSI_Withdraw_o_IM_CSI; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_d_IM_CSI
 * @constant
 */
export
const SpecificCSI_Withdraw_d_IM_CSI: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary d_IM_CSI
 * @constant
 */
export
const d_IM_CSI: number = SpecificCSI_Withdraw_d_IM_CSI; /* SHORT_NAMED_BIT */

/**
 * @summary SpecificCSI_Withdraw_vt_IM_CSI
 * @constant
 */
export
const SpecificCSI_Withdraw_vt_IM_CSI: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary vt_IM_CSI
 * @constant
 */
export
const vt_IM_CSI: number = SpecificCSI_Withdraw_vt_IM_CSI; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpecificCSI_Withdraw: $.ASN1Decoder<SpecificCSI_Withdraw> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificCSI_Withdraw
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpecificCSI_Withdraw (el: _Element): SpecificCSI_Withdraw {
    if (!_cached_decoder_for_SpecificCSI_Withdraw) { _cached_decoder_for_SpecificCSI_Withdraw = $._decodeBitString; }
    return _cached_decoder_for_SpecificCSI_Withdraw(el);
}

let _cached_encoder_for_SpecificCSI_Withdraw: $.ASN1Encoder<SpecificCSI_Withdraw> | null = null;

/**
 * @summary Encodes a(n) SpecificCSI_Withdraw into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificCSI_Withdraw, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificCSI_Withdraw (value: SpecificCSI_Withdraw, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpecificCSI_Withdraw) { _cached_encoder_for_SpecificCSI_Withdraw = $._encodeBitString; }
    return _cached_encoder_for_SpecificCSI_Withdraw(value, elGetter);
}


/* eslint-enable */
