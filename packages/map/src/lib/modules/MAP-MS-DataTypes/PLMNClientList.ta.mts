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
import { LCSClientInternalID, _enum_for_LCSClientInternalID, LCSClientInternalID_broadcastService /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcastService /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_HPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_HPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_VPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_VPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_anonymousLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_targetMSsubscribedService /* IMPORTED_LONG_ENUMERATION_ITEM */, targetMSsubscribedService /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientInternalID, _encode_LCSClientInternalID } from "../MAP-CommonDataTypes/LCSClientInternalID.ta.mjs";
// export { LCSClientInternalID, _enum_for_LCSClientInternalID, LCSClientInternalID_broadcastService /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcastService /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_HPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_HPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_o_andM_VPLMN /* IMPORTED_LONG_ENUMERATION_ITEM */, o_andM_VPLMN /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_anonymousLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LCSClientInternalID_targetMSsubscribedService /* IMPORTED_LONG_ENUMERATION_ITEM */, targetMSsubscribedService /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LCSClientInternalID, _encode_LCSClientInternalID } from "../MAP-CommonDataTypes/LCSClientInternalID.ta.mjs";


/**
 * @summary PLMNClientList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNClientList  ::=  SEQUENCE SIZE (1..maxNumOfPLMNClient) OF
 *     LCSClientInternalID
 * ```
 */
export
type PLMNClientList = LCSClientInternalID[]; // SequenceOfType

let _cached_decoder_for_PLMNClientList: $.ASN1Decoder<PLMNClientList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNClientList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNClientList (el: _Element): PLMNClientList {
    if (!_cached_decoder_for_PLMNClientList) { _cached_decoder_for_PLMNClientList = $._decodeSequenceOf<LCSClientInternalID>(() => _decode_LCSClientInternalID); }
    return _cached_decoder_for_PLMNClientList(el);
}

let _cached_encoder_for_PLMNClientList: $.ASN1Encoder<PLMNClientList> | null = null;

/**
 * @summary Encodes a(n) PLMNClientList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNClientList, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNClientList (value: PLMNClientList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNClientList) { _cached_encoder_for_PLMNClientList = $._encodeSequenceOf<LCSClientInternalID>(() => _encode_LCSClientInternalID, $.BER); }
    return _cached_encoder_for_PLMNClientList(value, elGetter);
}


/* eslint-enable */
