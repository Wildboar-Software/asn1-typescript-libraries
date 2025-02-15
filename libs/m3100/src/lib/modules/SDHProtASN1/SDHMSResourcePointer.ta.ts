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
    ResourcePointer,
    _decode_ResourcePointer,
    _encode_ResourcePointer,
} from '../SDHProtASN1/ResourcePointer.ta';
export {
    ResourcePointer,
    _decode_ResourcePointer,
    _encode_ResourcePointer,
} from '../SDHProtASN1/ResourcePointer.ta';

/* START_OF_SYMBOL_DEFINITION SDHMSResourcePointer */
/**
 * @summary SDHMSResourcePointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDHMSResourcePointer  ::=
 *   ResourcePointer(WITH COMPONENTS {
 *                     ...,
 *                     objectInstances  (SIZE (1))
 *                   })
 * ```
 */
export type SDHMSResourcePointer = ResourcePointer; // DefinedType
/* END_OF_SYMBOL_DEFINITION SDHMSResourcePointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SDHMSResourcePointer */
let _cached_decoder_for_SDHMSResourcePointer: $.ASN1Decoder<SDHMSResourcePointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SDHMSResourcePointer */

/* START_OF_SYMBOL_DEFINITION _decode_SDHMSResourcePointer */
/**
 * @summary Decodes an ASN.1 element into a(n) SDHMSResourcePointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDHMSResourcePointer} The decoded data structure.
 */
export function _decode_SDHMSResourcePointer(el: _Element) {
    if (!_cached_decoder_for_SDHMSResourcePointer) {
        _cached_decoder_for_SDHMSResourcePointer = _decode_ResourcePointer;
    }
    return _cached_decoder_for_SDHMSResourcePointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SDHMSResourcePointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SDHMSResourcePointer */
let _cached_encoder_for_SDHMSResourcePointer: $.ASN1Encoder<SDHMSResourcePointer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SDHMSResourcePointer */

/* START_OF_SYMBOL_DEFINITION _encode_SDHMSResourcePointer */
/**
 * @summary Encodes a(n) SDHMSResourcePointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDHMSResourcePointer, encoded as an ASN.1 Element.
 */
export function _encode_SDHMSResourcePointer(
    value: SDHMSResourcePointer,
    elGetter: $.ASN1Encoder<SDHMSResourcePointer>
) {
    if (!_cached_encoder_for_SDHMSResourcePointer) {
        _cached_encoder_for_SDHMSResourcePointer = _encode_ResourcePointer;
    }
    return _cached_encoder_for_SDHMSResourcePointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SDHMSResourcePointer */

/* eslint-enable */
