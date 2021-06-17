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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION SplitXCInfo */
/**
 * @summary SplitXCInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SplitXCInfo  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type SplitXCInfo = ObjectInstance[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SplitXCInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCInfo */
let _cached_decoder_for_SplitXCInfo: $.ASN1Decoder<SplitXCInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SplitXCInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SplitXCInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SplitXCInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SplitXCInfo} The decoded data structure.
 */
export function _decode_SplitXCInfo(el: _Element) {
    if (!_cached_decoder_for_SplitXCInfo) {
        _cached_decoder_for_SplitXCInfo = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_SplitXCInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SplitXCInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCInfo */
let _cached_encoder_for_SplitXCInfo: $.ASN1Encoder<SplitXCInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SplitXCInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SplitXCInfo */
/**
 * @summary Encodes a(n) SplitXCInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitXCInfo, encoded as an ASN.1 Element.
 */
export function _encode_SplitXCInfo(
    value: SplitXCInfo,
    elGetter: $.ASN1Encoder<SplitXCInfo>
) {
    if (!_cached_encoder_for_SplitXCInfo) {
        _cached_encoder_for_SplitXCInfo = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SplitXCInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SplitXCInfo */

/* eslint-enable */
