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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";


/**
 * @summary HLR_Id
 * @description
 *
 * HLR identity: leading digits of IMSI (MCC, MNC, leading digits of MSIN)
 * forming the HLR Id defined in 3GPP TS 23.003 / CCITT E.212.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.15 and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HLR-Id  ::=  IMSI
 * ```
 */
export
type HLR_Id = IMSI; // DefinedType

let _cached_decoder_for_HLR_Id: $.ASN1Decoder<HLR_Id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HLR_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HLR_Id (el: _Element): HLR_Id {
    if (!_cached_decoder_for_HLR_Id) { _cached_decoder_for_HLR_Id = _decode_IMSI; }
    return _cached_decoder_for_HLR_Id(el);
}

let _cached_encoder_for_HLR_Id: $.ASN1Encoder<HLR_Id> | null = null;

/**
 * @summary Encodes a(n) HLR_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HLR_Id, encoded as an ASN.1 Element.
 */
export
function _encode_HLR_Id (value: HLR_Id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HLR_Id) { _cached_encoder_for_HLR_Id = _encode_IMSI; }
    return _cached_encoder_for_HLR_Id(value, elGetter);
}


/* eslint-enable */
