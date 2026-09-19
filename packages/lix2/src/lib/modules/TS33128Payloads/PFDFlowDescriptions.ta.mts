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
import { PFDFlowDescription, _decode_PFDFlowDescription, _encode_PFDFlowDescription } from "../TS33128Payloads/PFDFlowDescription.ta.mjs";
// export { PFDFlowDescription, _decode_PFDFlowDescription, _encode_PFDFlowDescription } from "../TS33128Payloads/PFDFlowDescription.ta.mjs";


/**
 * @summary PFDFlowDescriptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PFDFlowDescriptions  ::=  SET OF PFDFlowDescription
 * ```
 */
export
type PFDFlowDescriptions = PFDFlowDescription[]; // SetOfType

let _cached_decoder_for_PFDFlowDescriptions: $.ASN1Decoder<PFDFlowDescriptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PFDFlowDescriptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PFDFlowDescriptions (el: _Element): PFDFlowDescriptions {
    if (!_cached_decoder_for_PFDFlowDescriptions) { _cached_decoder_for_PFDFlowDescriptions = $._decodeSetOf<PFDFlowDescription>(() => _decode_PFDFlowDescription); }
    return _cached_decoder_for_PFDFlowDescriptions(el);
}

let _cached_encoder_for_PFDFlowDescriptions: $.ASN1Encoder<PFDFlowDescriptions> | null = null;

/**
 * @summary Encodes a(n) PFDFlowDescriptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PFDFlowDescriptions, encoded as an ASN.1 Element.
 */
export
function _encode_PFDFlowDescriptions (value: PFDFlowDescriptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PFDFlowDescriptions) { _cached_encoder_for_PFDFlowDescriptions = $._encodeSetOf<PFDFlowDescription>(() => _encode_PFDFlowDescription, $.BER); }
    return _cached_encoder_for_PFDFlowDescriptions(value, elGetter);
}


/* eslint-enable */
