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
import { SupportedFeatures_Item, _decode_SupportedFeatures_Item, _encode_SupportedFeatures_Item } from "../Attribute-ASN1Module/SupportedFeatures-Item.ta.mjs";
export { SupportedFeatures_Item, _decode_SupportedFeatures_Item, _encode_SupportedFeatures_Item } from "../Attribute-ASN1Module/SupportedFeatures-Item.ta.mjs";


/* START_OF_SYMBOL_DEFINITION SupportedFeatures */
/**
 * @summary SupportedFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedFeatures  ::= 
 *   SET OF
 *     SEQUENCE {featureIdentifier
 *                 DMI-SUPPORTEDFEATURES.&id({SupportedFeaturesSet}),
 *               featureInfo
 *                 DMI-SUPPORTEDFEATURES.&Value
 *                   ({SupportedFeaturesSet}{@.featureIdentifier})}
 * ```
 */
export
type SupportedFeatures = SupportedFeatures_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SupportedFeatures */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedFeatures */
let _cached_decoder_for_SupportedFeatures: $.ASN1Decoder<SupportedFeatures> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedFeatures */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedFeatures */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedFeatures
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedFeatures} The decoded data structure.
 */
export
function _decode_SupportedFeatures (el: _Element) {
    if (!_cached_decoder_for_SupportedFeatures) { _cached_decoder_for_SupportedFeatures = $._decodeSetOf<SupportedFeatures_Item>(() => _decode_SupportedFeatures_Item); }
    return _cached_decoder_for_SupportedFeatures(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedFeatures */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedFeatures */
let _cached_encoder_for_SupportedFeatures: $.ASN1Encoder<SupportedFeatures> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedFeatures */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedFeatures */
/**
 * @summary Encodes a(n) SupportedFeatures into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedFeatures (value: SupportedFeatures, elGetter: $.ASN1Encoder<SupportedFeatures>) {
    if (!_cached_encoder_for_SupportedFeatures) { _cached_encoder_for_SupportedFeatures = $._encodeSetOf<SupportedFeatures_Item>(() => _encode_SupportedFeatures_Item, $.BER); }
    return _cached_encoder_for_SupportedFeatures(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedFeatures */

/* eslint-enable */
