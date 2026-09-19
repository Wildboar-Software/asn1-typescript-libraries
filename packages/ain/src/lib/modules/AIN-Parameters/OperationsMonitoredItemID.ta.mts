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
import { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";
// export { SSPUserResourceID, _decode_SSPUserResourceID, _encode_SSPUserResourceID } from "../AIN-Parameters/SSPUserResourceID.ta.mjs";


/**
 * @summary OperationsMonitoredItemID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationsMonitoredItemID  ::=  CHOICE{
 *         sSPUserResourceID [1] SSPUserResourceID -- see above for encoding
 *     }
 * ```
 */
export
type OperationsMonitoredItemID =
    { sSPUserResourceID: SSPUserResourceID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_OperationsMonitoredItemID: $.ASN1Decoder<OperationsMonitoredItemID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationsMonitoredItemID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperationsMonitoredItemID (el: _Element): OperationsMonitoredItemID {
    if (!_cached_decoder_for_OperationsMonitoredItemID) { _cached_decoder_for_OperationsMonitoredItemID = $._decode_inextensible_choice<OperationsMonitoredItemID>({
    "CONTEXT 1": [ "sSPUserResourceID", $._decode_explicit<SSPUserResourceID>(() => _decode_SSPUserResourceID) ]
}); }
    return _cached_decoder_for_OperationsMonitoredItemID(el);
}

let _cached_encoder_for_OperationsMonitoredItemID: $.ASN1Encoder<OperationsMonitoredItemID> | null = null;

/**
 * @summary Encodes a(n) OperationsMonitoredItemID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationsMonitoredItemID, encoded as an ASN.1 Element.
 */
export
function _encode_OperationsMonitoredItemID (value: OperationsMonitoredItemID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperationsMonitoredItemID) { _cached_encoder_for_OperationsMonitoredItemID = $._encode_choice<OperationsMonitoredItemID>({
    "sSPUserResourceID": $._encode_explicit(_TagClass.context, 1, () => _encode_SSPUserResourceID, $.BER),
}, $.BER); }
    return _cached_encoder_for_OperationsMonitoredItemID(value, elGetter);
}


/* eslint-enable */
