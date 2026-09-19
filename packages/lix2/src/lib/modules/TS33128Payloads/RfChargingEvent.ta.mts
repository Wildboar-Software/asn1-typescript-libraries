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



/**
 * @summary RfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RfChargingEvent {
    aoC_Information = 1,
    pS_Information = 2,
    iMS_Information = 3,
    mMS_Information = 4,
    lCS_Information = 5,
    poC_Information = 6,
    mBMS_Inform = 7,
    sMS_Information = 8,
    vCS_Information = 9,
    mMTel_Information = 10,
    proSe_Information = 11,
    service_Generic_Information = 12,
    iM_Information = 13,
    dCD_Information = 14,
    m2M_Information = 15,
    cPDT_Information = 16,
}

/**
 * @summary RfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RfChargingEvent = _enum_for_RfChargingEvent;

/**
 * @summary RfChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RfChargingEvent  ::=  ENUMERATED
 * {
 *     aoC-Information(1),
 *     pS-Information(2),
 *     iMS-Information(3),
 *     mMS-Information(4),
 *     lCS-Information(5),
 *     poC-Information(6),
 *     mBMS-Inform(7),
 *     sMS-Information(8),
 *     vCS-Information(9),
 *     mMTel-Information(10),
 *     proSe-Information(11),
 *     service-Generic-Information(12),
 *     iM-Information(13),
 *     dCD-Information(14),
 *     m2M-Information(15),
 *     cPDT-Information(16)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RfChargingEvent = _enum_for_RfChargingEvent;

/**
 * @summary RfChargingEvent_aoC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_aoC_Information: RfChargingEvent = RfChargingEvent.aoC_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aoC_Information
 * @constant
 * @type {number}
 */
export
const aoC_Information: RfChargingEvent = RfChargingEvent.aoC_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_pS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_pS_Information: RfChargingEvent = RfChargingEvent.pS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pS_Information
 * @constant
 * @type {number}
 */
export
const pS_Information: RfChargingEvent = RfChargingEvent.pS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iMS_Information: RfChargingEvent = RfChargingEvent.iMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMS_Information
 * @constant
 * @type {number}
 */
export
const iMS_Information: RfChargingEvent = RfChargingEvent.iMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMS_Information: RfChargingEvent = RfChargingEvent.mMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMS_Information
 * @constant
 * @type {number}
 */
export
const mMS_Information: RfChargingEvent = RfChargingEvent.mMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_lCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_lCS_Information: RfChargingEvent = RfChargingEvent.lCS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lCS_Information
 * @constant
 * @type {number}
 */
export
const lCS_Information: RfChargingEvent = RfChargingEvent.lCS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_poC_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_poC_Information: RfChargingEvent = RfChargingEvent.poC_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary poC_Information
 * @constant
 * @type {number}
 */
export
const poC_Information: RfChargingEvent = RfChargingEvent.poC_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mBMS_Inform
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mBMS_Inform: RfChargingEvent = RfChargingEvent.mBMS_Inform; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMS_Inform
 * @constant
 * @type {number}
 */
export
const mBMS_Inform: RfChargingEvent = RfChargingEvent.mBMS_Inform; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_sMS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_sMS_Information: RfChargingEvent = RfChargingEvent.sMS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS_Information
 * @constant
 * @type {number}
 */
export
const sMS_Information: RfChargingEvent = RfChargingEvent.sMS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_vCS_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_vCS_Information: RfChargingEvent = RfChargingEvent.vCS_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vCS_Information
 * @constant
 * @type {number}
 */
export
const vCS_Information: RfChargingEvent = RfChargingEvent.vCS_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_mMTel_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_mMTel_Information: RfChargingEvent = RfChargingEvent.mMTel_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMTel_Information
 * @constant
 * @type {number}
 */
export
const mMTel_Information: RfChargingEvent = RfChargingEvent.mMTel_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_proSe_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_proSe_Information: RfChargingEvent = RfChargingEvent.proSe_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary proSe_Information
 * @constant
 * @type {number}
 */
export
const proSe_Information: RfChargingEvent = RfChargingEvent.proSe_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_service_Generic_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_service_Generic_Information: RfChargingEvent = RfChargingEvent.service_Generic_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary service_Generic_Information
 * @constant
 * @type {number}
 */
export
const service_Generic_Information: RfChargingEvent = RfChargingEvent.service_Generic_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_iM_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_iM_Information: RfChargingEvent = RfChargingEvent.iM_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iM_Information
 * @constant
 * @type {number}
 */
export
const iM_Information: RfChargingEvent = RfChargingEvent.iM_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_dCD_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_dCD_Information: RfChargingEvent = RfChargingEvent.dCD_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dCD_Information
 * @constant
 * @type {number}
 */
export
const dCD_Information: RfChargingEvent = RfChargingEvent.dCD_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_m2M_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_m2M_Information: RfChargingEvent = RfChargingEvent.m2M_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary m2M_Information
 * @constant
 * @type {number}
 */
export
const m2M_Information: RfChargingEvent = RfChargingEvent.m2M_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RfChargingEvent_cPDT_Information
 * @constant
 * @type {number}
 */
export
const RfChargingEvent_cPDT_Information: RfChargingEvent = RfChargingEvent.cPDT_Information; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cPDT_Information
 * @constant
 * @type {number}
 */
export
const cPDT_Information: RfChargingEvent = RfChargingEvent.cPDT_Information; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RfChargingEvent: $.ASN1Decoder<RfChargingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RfChargingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RfChargingEvent (el: _Element): RfChargingEvent {
    if (!_cached_decoder_for_RfChargingEvent) { _cached_decoder_for_RfChargingEvent = $._decodeEnumerated; }
    return _cached_decoder_for_RfChargingEvent(el);
}

let _cached_encoder_for_RfChargingEvent: $.ASN1Encoder<RfChargingEvent> | null = null;

/**
 * @summary Encodes a(n) RfChargingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RfChargingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_RfChargingEvent (value: RfChargingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RfChargingEvent) { _cached_encoder_for_RfChargingEvent = $._encodeEnumerated; }
    return _cached_encoder_for_RfChargingEvent(value, elGetter);
}


/* eslint-enable */
