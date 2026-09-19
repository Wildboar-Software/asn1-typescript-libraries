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
import { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";
// export { GlobalRANNodeID, _decode_GlobalRANNodeID, _encode_GlobalRANNodeID } from "../TS33128Payloads/GlobalRANNodeID.ta.mjs";


/**
 * @summary AreaOfInterestRANNodeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaOfInterestRANNodeList  ::=  SEQUENCE (SIZE(1..MAX)) OF GlobalRANNodeID
 * ```
 */
export
type AreaOfInterestRANNodeList = GlobalRANNodeID[]; // SequenceOfType

let _cached_decoder_for_AreaOfInterestRANNodeList: $.ASN1Decoder<AreaOfInterestRANNodeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AreaOfInterestRANNodeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AreaOfInterestRANNodeList (el: _Element): AreaOfInterestRANNodeList {
    if (!_cached_decoder_for_AreaOfInterestRANNodeList) { _cached_decoder_for_AreaOfInterestRANNodeList = $._decodeSequenceOf<GlobalRANNodeID>(() => _decode_GlobalRANNodeID); }
    return _cached_decoder_for_AreaOfInterestRANNodeList(el);
}

let _cached_encoder_for_AreaOfInterestRANNodeList: $.ASN1Encoder<AreaOfInterestRANNodeList> | null = null;

/**
 * @summary Encodes a(n) AreaOfInterestRANNodeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaOfInterestRANNodeList, encoded as an ASN.1 Element.
 */
export
function _encode_AreaOfInterestRANNodeList (value: AreaOfInterestRANNodeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AreaOfInterestRANNodeList) { _cached_encoder_for_AreaOfInterestRANNodeList = $._encodeSequenceOf<GlobalRANNodeID>(() => _encode_GlobalRANNodeID, $.BER); }
    return _cached_encoder_for_AreaOfInterestRANNodeList(value, elGetter);
}


/* eslint-enable */
