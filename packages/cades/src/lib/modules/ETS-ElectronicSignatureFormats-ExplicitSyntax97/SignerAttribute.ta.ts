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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SignerAttribute_Item, _decode_SignerAttribute_Item, _encode_SignerAttribute_Item } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignerAttribute-Item.ta.js";
export { SignerAttribute_Item, _decode_SignerAttribute_Item, _encode_SignerAttribute_Item } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/SignerAttribute-Item.ta.js";


/* START_OF_SYMBOL_DEFINITION SignerAttribute */
/**
 * @summary SignerAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerAttribute  ::=  SEQUENCE OF CHOICE {
 *     claimedAttributes       [0] ClaimedAttributes,
 *     certifiedAttributes     [1] CertifiedAttributes }
 * ```
 */
export
type SignerAttribute = SignerAttribute_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SignerAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerAttribute */
let _cached_decoder_for_SignerAttribute: $.ASN1Decoder<SignerAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_SignerAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerAttribute} The decoded data structure.
 */
export
function _decode_SignerAttribute (el: _Element) {
    if (!_cached_decoder_for_SignerAttribute) { _cached_decoder_for_SignerAttribute = $._decodeSequenceOf<SignerAttribute_Item>(() => _decode_SignerAttribute_Item); }
    return _cached_decoder_for_SignerAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerAttribute */
let _cached_encoder_for_SignerAttribute: $.ASN1Encoder<SignerAttribute> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_SignerAttribute */
/**
 * @summary Encodes a(n) SignerAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerAttribute, encoded as an ASN.1 Element.
 */
export
function _encode_SignerAttribute (value: SignerAttribute, elGetter: $.ASN1Encoder<SignerAttribute>) {
    if (!_cached_encoder_for_SignerAttribute) { _cached_encoder_for_SignerAttribute = $._encodeSequenceOf<SignerAttribute_Item>(() => _encode_SignerAttribute_Item, $.BER); }
    return _cached_encoder_for_SignerAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerAttribute */

/* eslint-enable */
