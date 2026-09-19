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
import { EncapsulatedRfChargingData, _decode_EncapsulatedRfChargingData, _encode_EncapsulatedRfChargingData } from "../TS33128Payloads/EncapsulatedRfChargingData.ta.mjs";
// export { EncapsulatedRfChargingData, _decode_EncapsulatedRfChargingData, _encode_EncapsulatedRfChargingData } from "../TS33128Payloads/EncapsulatedRfChargingData.ta.mjs";


/**
 * @summary DiameterChargingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiameterChargingData  ::=  CHOICE
 * {
 *     fullDiameterChargingData    [1] EncapsulatedRfChargingData
 * }
 * ```
 */
export
type DiameterChargingData =
    { fullDiameterChargingData: EncapsulatedRfChargingData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiameterChargingData: $.ASN1Decoder<DiameterChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiameterChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiameterChargingData (el: _Element): DiameterChargingData {
    if (!_cached_decoder_for_DiameterChargingData) { _cached_decoder_for_DiameterChargingData = $._decode_inextensible_choice<DiameterChargingData>({
    "CONTEXT 1": [ "fullDiameterChargingData", $._decode_implicit<EncapsulatedRfChargingData>(() => _decode_EncapsulatedRfChargingData) ]
}); }
    return _cached_decoder_for_DiameterChargingData(el);
}

let _cached_encoder_for_DiameterChargingData: $.ASN1Encoder<DiameterChargingData> | null = null;

/**
 * @summary Encodes a(n) DiameterChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiameterChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_DiameterChargingData (value: DiameterChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiameterChargingData) { _cached_encoder_for_DiameterChargingData = $._encode_choice<DiameterChargingData>({
    "fullDiameterChargingData": $._encode_implicit(_TagClass.context, 1, () => _encode_EncapsulatedRfChargingData, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiameterChargingData(value, elGetter);
}


/* eslint-enable */
