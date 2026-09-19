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
import { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
// export { SIGNED, _get_decoder_for_SIGNED, _get_encoder_for_SIGNED } from "../AuthenticationFramework/SIGNED.ta.mjs";
import { AttributeIntegrityInfoContent, _decode_AttributeIntegrityInfoContent, _encode_AttributeIntegrityInfoContent } from "../EnhancedSecurity/AttributeIntegrityInfoContent.ta.mjs";
// export { AttributeIntegrityInfoContent, _decode_AttributeIntegrityInfoContent, _encode_AttributeIntegrityInfoContent } from "../EnhancedSecurity/AttributeIntegrityInfoContent.ta.mjs";


/**
 * @summary AttributeIntegrityInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeIntegrityInfo  ::=  SIGNED{AttributeIntegrityInfoContent}
 * ```
 */
export
type AttributeIntegrityInfo = SIGNED<AttributeIntegrityInfoContent>; // DefinedType

let _cached_decoder_for_AttributeIntegrityInfo: $.ASN1Decoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeIntegrityInfo (el: _Element): AttributeIntegrityInfo {
    if (!_cached_decoder_for_AttributeIntegrityInfo) { _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<AttributeIntegrityInfoContent>(_decode_AttributeIntegrityInfoContent); }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}

let _cached_encoder_for_AttributeIntegrityInfo: $.ASN1Encoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeIntegrityInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeIntegrityInfo (value: AttributeIntegrityInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeIntegrityInfo) { _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<AttributeIntegrityInfoContent>(_encode_AttributeIntegrityInfoContent); }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}


/* eslint-enable */
