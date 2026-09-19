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
import { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";
// export { TAC, _decode_TAC, _encode_TAC } from "../TS33128Payloads/TAC.ta.mjs";


/**
 * @summary ForbiddenTACs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForbiddenTACs  ::=  SEQUENCE (SIZE(1..MAX)) OF TAC
 * ```
 */
export
type ForbiddenTACs = TAC[]; // SequenceOfType

let _cached_decoder_for_ForbiddenTACs: $.ASN1Decoder<ForbiddenTACs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForbiddenTACs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForbiddenTACs (el: _Element): ForbiddenTACs {
    if (!_cached_decoder_for_ForbiddenTACs) { _cached_decoder_for_ForbiddenTACs = $._decodeSequenceOf<TAC>(() => _decode_TAC); }
    return _cached_decoder_for_ForbiddenTACs(el);
}

let _cached_encoder_for_ForbiddenTACs: $.ASN1Encoder<ForbiddenTACs> | null = null;

/**
 * @summary Encodes a(n) ForbiddenTACs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForbiddenTACs, encoded as an ASN.1 Element.
 */
export
function _encode_ForbiddenTACs (value: ForbiddenTACs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForbiddenTACs) { _cached_encoder_for_ForbiddenTACs = $._encodeSequenceOf<TAC>(() => _encode_TAC, $.BER); }
    return _cached_encoder_for_ForbiddenTACs(value, elGetter);
}


/* eslint-enable */
