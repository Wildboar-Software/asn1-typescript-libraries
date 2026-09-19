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
 * @summary RATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RATType {
    nR = 1,
    eUTRA = 2,
    wLAN = 3,
    virtual = 4,
    nBIOT = 5,
    wireline = 6,
    wirelineCable = 7,
    wirelineBBF = 8,
    lTEM = 9,
    nRU = 10,
    eUTRAU = 11,
    trustedN3GA = 12,
    trustedWLAN = 13,
    uTRA = 14,
    gERA = 15,
    nRLEO = 16,
    nRMEO = 17,
    nRGEO = 18,
    nROTHERSAT = 19,
    nRREDCAP = 20,
    wBEUTRANLEO = 21,
    wBEUTRANMEO = 22,
    wBEUTRANGEO = 23,
    wBEUTRANOTHERSAT = 24,
    nBIOTLEO = 25,
    nBIOTMEO = 26,
    nBIOTGEO = 27,
    nBIOTOTHERSAT = 28,
    lTEMLEO = 29,
    lTEMMEO = 30,
    lTEMGEO = 31,
    lTEMOTHERSAT = 32,
    nREREDCAP = 33,
}

/**
 * @summary RATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RATType = _enum_for_RATType;

/**
 * @summary RATType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATType  ::=  ENUMERATED
 * {
 *     nR(1),
 *     eUTRA(2),
 *     wLAN(3),
 *     virtual(4),
 *     nBIOT(5),
 *     wireline(6),
 *     wirelineCable(7),
 *     wirelineBBF(8),
 *     lTEM(9),
 *     nRU(10),
 *     eUTRAU(11),
 *     trustedN3GA(12),
 *     trustedWLAN(13),
 *     uTRA(14),
 *     gERA(15),
 *     nRLEO(16),
 *     nRMEO(17),
 *     nRGEO(18),
 *     nROTHERSAT(19),
 *     nRREDCAP(20),
 *     wBEUTRANLEO(21),
 *     wBEUTRANMEO(22),
 *     wBEUTRANGEO(23),
 *     wBEUTRANOTHERSAT(24),
 *     nBIOTLEO(25),
 *     nBIOTMEO(26),
 *     nBIOTGEO(27),
 *     nBIOTOTHERSAT(28),
 *     lTEMLEO(29),
 *     lTEMMEO(30),
 *     lTEMGEO(31),
 *     lTEMOTHERSAT(32),
 *     nREREDCAP(33)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RATType = _enum_for_RATType;

/**
 * @summary RATType_nR
 * @constant
 * @type {number}
 */
export
const RATType_nR: RATType = RATType.nR; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nR
 * @constant
 * @type {number}
 */
export
const nR: RATType = RATType.nR; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_eUTRA
 * @constant
 * @type {number}
 */
export
const RATType_eUTRA: RATType = RATType.eUTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRA
 * @constant
 * @type {number}
 */
export
const eUTRA: RATType = RATType.eUTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wLAN
 * @constant
 * @type {number}
 */
export
const RATType_wLAN: RATType = RATType.wLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wLAN
 * @constant
 * @type {number}
 */
export
const wLAN: RATType = RATType.wLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_virtual
 * @constant
 * @type {number}
 */
export
const RATType_virtual: RATType = RATType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary virtual
 * @constant
 * @type {number}
 */
export
const virtual: RATType = RATType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOT
 * @constant
 * @type {number}
 */
export
const RATType_nBIOT: RATType = RATType.nBIOT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOT
 * @constant
 * @type {number}
 */
export
const nBIOT: RATType = RATType.nBIOT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wireline
 * @constant
 * @type {number}
 */
export
const RATType_wireline: RATType = RATType.wireline; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wireline
 * @constant
 * @type {number}
 */
export
const wireline: RATType = RATType.wireline; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wirelineCable
 * @constant
 * @type {number}
 */
export
const RATType_wirelineCable: RATType = RATType.wirelineCable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelineCable
 * @constant
 * @type {number}
 */
export
const wirelineCable: RATType = RATType.wirelineCable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wirelineBBF
 * @constant
 * @type {number}
 */
export
const RATType_wirelineBBF: RATType = RATType.wirelineBBF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wirelineBBF
 * @constant
 * @type {number}
 */
export
const wirelineBBF: RATType = RATType.wirelineBBF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEM
 * @constant
 * @type {number}
 */
export
const RATType_lTEM: RATType = RATType.lTEM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEM
 * @constant
 * @type {number}
 */
export
const lTEM: RATType = RATType.lTEM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRU
 * @constant
 * @type {number}
 */
export
const RATType_nRU: RATType = RATType.nRU; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRU
 * @constant
 * @type {number}
 */
export
const nRU: RATType = RATType.nRU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_eUTRAU
 * @constant
 * @type {number}
 */
export
const RATType_eUTRAU: RATType = RATType.eUTRAU; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eUTRAU
 * @constant
 * @type {number}
 */
export
const eUTRAU: RATType = RATType.eUTRAU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_trustedN3GA
 * @constant
 * @type {number}
 */
export
const RATType_trustedN3GA: RATType = RATType.trustedN3GA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trustedN3GA
 * @constant
 * @type {number}
 */
export
const trustedN3GA: RATType = RATType.trustedN3GA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_trustedWLAN
 * @constant
 * @type {number}
 */
export
const RATType_trustedWLAN: RATType = RATType.trustedWLAN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trustedWLAN
 * @constant
 * @type {number}
 */
export
const trustedWLAN: RATType = RATType.trustedWLAN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_uTRA
 * @constant
 * @type {number}
 */
export
const RATType_uTRA: RATType = RATType.uTRA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uTRA
 * @constant
 * @type {number}
 */
export
const uTRA: RATType = RATType.uTRA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_gERA
 * @constant
 * @type {number}
 */
export
const RATType_gERA: RATType = RATType.gERA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gERA
 * @constant
 * @type {number}
 */
export
const gERA: RATType = RATType.gERA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRLEO
 * @constant
 * @type {number}
 */
export
const RATType_nRLEO: RATType = RATType.nRLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRLEO
 * @constant
 * @type {number}
 */
export
const nRLEO: RATType = RATType.nRLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRMEO
 * @constant
 * @type {number}
 */
export
const RATType_nRMEO: RATType = RATType.nRMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRMEO
 * @constant
 * @type {number}
 */
export
const nRMEO: RATType = RATType.nRMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRGEO
 * @constant
 * @type {number}
 */
export
const RATType_nRGEO: RATType = RATType.nRGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRGEO
 * @constant
 * @type {number}
 */
export
const nRGEO: RATType = RATType.nRGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nROTHERSAT
 * @constant
 * @type {number}
 */
export
const RATType_nROTHERSAT: RATType = RATType.nROTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nROTHERSAT
 * @constant
 * @type {number}
 */
export
const nROTHERSAT: RATType = RATType.nROTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nRREDCAP
 * @constant
 * @type {number}
 */
export
const RATType_nRREDCAP: RATType = RATType.nRREDCAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRREDCAP
 * @constant
 * @type {number}
 */
export
const nRREDCAP: RATType = RATType.nRREDCAP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANLEO
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANLEO: RATType = RATType.wBEUTRANLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANLEO
 * @constant
 * @type {number}
 */
export
const wBEUTRANLEO: RATType = RATType.wBEUTRANLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANMEO
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANMEO: RATType = RATType.wBEUTRANMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANMEO
 * @constant
 * @type {number}
 */
export
const wBEUTRANMEO: RATType = RATType.wBEUTRANMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANGEO
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANGEO: RATType = RATType.wBEUTRANGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANGEO
 * @constant
 * @type {number}
 */
export
const wBEUTRANGEO: RATType = RATType.wBEUTRANGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_wBEUTRANOTHERSAT
 * @constant
 * @type {number}
 */
export
const RATType_wBEUTRANOTHERSAT: RATType = RATType.wBEUTRANOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wBEUTRANOTHERSAT
 * @constant
 * @type {number}
 */
export
const wBEUTRANOTHERSAT: RATType = RATType.wBEUTRANOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTLEO
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTLEO: RATType = RATType.nBIOTLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTLEO
 * @constant
 * @type {number}
 */
export
const nBIOTLEO: RATType = RATType.nBIOTLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTMEO
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTMEO: RATType = RATType.nBIOTMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTMEO
 * @constant
 * @type {number}
 */
export
const nBIOTMEO: RATType = RATType.nBIOTMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTGEO
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTGEO: RATType = RATType.nBIOTGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTGEO
 * @constant
 * @type {number}
 */
export
const nBIOTGEO: RATType = RATType.nBIOTGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nBIOTOTHERSAT
 * @constant
 * @type {number}
 */
export
const RATType_nBIOTOTHERSAT: RATType = RATType.nBIOTOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIOTOTHERSAT
 * @constant
 * @type {number}
 */
export
const nBIOTOTHERSAT: RATType = RATType.nBIOTOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMLEO
 * @constant
 * @type {number}
 */
export
const RATType_lTEMLEO: RATType = RATType.lTEMLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMLEO
 * @constant
 * @type {number}
 */
export
const lTEMLEO: RATType = RATType.lTEMLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMMEO
 * @constant
 * @type {number}
 */
export
const RATType_lTEMMEO: RATType = RATType.lTEMMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMMEO
 * @constant
 * @type {number}
 */
export
const lTEMMEO: RATType = RATType.lTEMMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMGEO
 * @constant
 * @type {number}
 */
export
const RATType_lTEMGEO: RATType = RATType.lTEMGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMGEO
 * @constant
 * @type {number}
 */
export
const lTEMGEO: RATType = RATType.lTEMGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_lTEMOTHERSAT
 * @constant
 * @type {number}
 */
export
const RATType_lTEMOTHERSAT: RATType = RATType.lTEMOTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lTEMOTHERSAT
 * @constant
 * @type {number}
 */
export
const lTEMOTHERSAT: RATType = RATType.lTEMOTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATType_nREREDCAP
 * @constant
 * @type {number}
 */
export
const RATType_nREREDCAP: RATType = RATType.nREREDCAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nREREDCAP
 * @constant
 * @type {number}
 */
export
const nREREDCAP: RATType = RATType.nREREDCAP; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RATType: $.ASN1Decoder<RATType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RATType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RATType (el: _Element): RATType {
    if (!_cached_decoder_for_RATType) { _cached_decoder_for_RATType = $._decodeEnumerated; }
    return _cached_decoder_for_RATType(el);
}

let _cached_encoder_for_RATType: $.ASN1Encoder<RATType> | null = null;

/**
 * @summary Encodes a(n) RATType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATType, encoded as an ASN.1 Element.
 */
export
function _encode_RATType (value: RATType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RATType) { _cached_encoder_for_RATType = $._encodeEnumerated; }
    return _cached_encoder_for_RATType(value, elGetter);
}


/* eslint-enable */
