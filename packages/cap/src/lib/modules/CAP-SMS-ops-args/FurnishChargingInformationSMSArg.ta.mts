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
import { type FCISMSBillingChargingCharacteristics, _decode_FCISMSBillingChargingCharacteristics, _encode_FCISMSBillingChargingCharacteristics } from "../CAP-datatypes/FCISMSBillingChargingCharacteristics.ta.mjs";



/**
 * @summary FurnishChargingInformationSMSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FurnishChargingInformationSMSArg {PARAMETERS-BOUND : bound}  ::= 
 *     FCISMSBillingChargingCharacteristics {bound}
 * ```
 */
export
type FurnishChargingInformationSMSArg = FCISMSBillingChargingCharacteristics; // DefinedType

let _cached_decoder_for_FurnishChargingInformationSMSArg: $.ASN1Decoder<FurnishChargingInformationSMSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FurnishChargingInformationSMSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FurnishChargingInformationSMSArg (el: _Element): FurnishChargingInformationSMSArg {
    if (!_cached_decoder_for_FurnishChargingInformationSMSArg) { _cached_decoder_for_FurnishChargingInformationSMSArg = _decode_FCISMSBillingChargingCharacteristics; }
    return _cached_decoder_for_FurnishChargingInformationSMSArg(el);
}

let _cached_encoder_for_FurnishChargingInformationSMSArg: $.ASN1Encoder<FurnishChargingInformationSMSArg> | null = null;

/**
 * @summary Encodes a(n) FurnishChargingInformationSMSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FurnishChargingInformationSMSArg, encoded as an ASN.1 Element.
 */
export
function _encode_FurnishChargingInformationSMSArg (value: FurnishChargingInformationSMSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FurnishChargingInformationSMSArg) { _cached_encoder_for_FurnishChargingInformationSMSArg = _encode_FCISMSBillingChargingCharacteristics; }
    return _cached_encoder_for_FurnishChargingInformationSMSArg(value, elGetter);
}


/* eslint-enable */
