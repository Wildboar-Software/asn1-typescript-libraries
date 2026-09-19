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
import { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../C1222-PROTOCOL/AE-qualifier.ta.mjs";
// export { AE_qualifier, _decode_AE_qualifier, _encode_AE_qualifier } from "../C1222-PROTOCOL/AE-qualifier.ta.mjs";


/**
 * @summary Calling_AE_qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-AE-qualifier  ::=  AE-qualifier
 * ```
 */
export
type Calling_AE_qualifier = AE_qualifier; // DefinedType

let _cached_decoder_for_Calling_AE_qualifier: $.ASN1Decoder<Calling_AE_qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_AE_qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_AE_qualifier (el: _Element): Calling_AE_qualifier {
    if (!_cached_decoder_for_Calling_AE_qualifier) { _cached_decoder_for_Calling_AE_qualifier = _decode_AE_qualifier; }
    return _cached_decoder_for_Calling_AE_qualifier(el);
}

let _cached_encoder_for_Calling_AE_qualifier: $.ASN1Encoder<Calling_AE_qualifier> | null = null;

/**
 * @summary Encodes a(n) Calling_AE_qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_AE_qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_AE_qualifier (value: Calling_AE_qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_AE_qualifier) { _cached_encoder_for_Calling_AE_qualifier = _encode_AE_qualifier; }
    return _cached_encoder_for_Calling_AE_qualifier(value, elGetter);
}


/* eslint-enable */
