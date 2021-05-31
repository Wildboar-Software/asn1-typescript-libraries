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
import * as $ from "asn1-ts/dist/node/functional";
import { GaugeThreshold_Item, _decode_GaugeThreshold_Item, _encode_GaugeThreshold_Item } from "../Attribute-ASN1Module/GaugeThreshold-Item.ta";
export { GaugeThreshold_Item, _decode_GaugeThreshold_Item, _encode_GaugeThreshold_Item } from "../Attribute-ASN1Module/GaugeThreshold-Item.ta";


/* START_OF_SYMBOL_DEFINITION GaugeThreshold */
/**
 * @summary GaugeThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeThreshold  ::= 
 *   SET OF SEQUENCE {notifyLow   NotifyThreshold,
 *                    notifyHigh  NotifyThreshold}
 * ```
 */
export
type GaugeThreshold = GaugeThreshold_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION GaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThreshold */
let _cached_decoder_for_GaugeThreshold: $.ASN1Decoder<GaugeThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_GaugeThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) GaugeThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GaugeThreshold} The decoded data structure.
 */
export
function _decode_GaugeThreshold (el: _Element) {
    if (!_cached_decoder_for_GaugeThreshold) { _cached_decoder_for_GaugeThreshold = $._decodeSetOf<GaugeThreshold_Item>(() => _decode_GaugeThreshold_Item); }
    return _cached_decoder_for_GaugeThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThreshold */
let _cached_encoder_for_GaugeThreshold: $.ASN1Encoder<GaugeThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GaugeThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_GaugeThreshold */
/**
 * @summary Encodes a(n) GaugeThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeThreshold (value: GaugeThreshold, elGetter: $.ASN1Encoder<GaugeThreshold>) {
    if (!_cached_encoder_for_GaugeThreshold) { _cached_encoder_for_GaugeThreshold = $._encodeSetOf<GaugeThreshold_Item>(() => _encode_GaugeThreshold_Item, $.BER); }
    return _cached_encoder_for_GaugeThreshold(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GaugeThreshold */

/* eslint-enable */
