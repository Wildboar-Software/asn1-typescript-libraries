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

/* START_OF_SYMBOL_DEFINITION TpsInGtpList */
/**
 * @summary TpsInGtpList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TpsInGtpList  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type TpsInGtpList = ObjectInstance[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TpsInGtpList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TpsInGtpList */
let _cached_decoder_for_TpsInGtpList: $.ASN1Decoder<TpsInGtpList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TpsInGtpList */

/* START_OF_SYMBOL_DEFINITION _decode_TpsInGtpList */
/**
 * @summary Decodes an ASN.1 element into a(n) TpsInGtpList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TpsInGtpList} The decoded data structure.
 */
export function _decode_TpsInGtpList(el: _Element) {
    if (!_cached_decoder_for_TpsInGtpList) {
        _cached_decoder_for_TpsInGtpList = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_TpsInGtpList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TpsInGtpList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TpsInGtpList */
let _cached_encoder_for_TpsInGtpList: $.ASN1Encoder<TpsInGtpList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TpsInGtpList */

/* START_OF_SYMBOL_DEFINITION _encode_TpsInGtpList */
/**
 * @summary Encodes a(n) TpsInGtpList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TpsInGtpList, encoded as an ASN.1 Element.
 */
export function _encode_TpsInGtpList(
    value: TpsInGtpList,
    elGetter: $.ASN1Encoder<TpsInGtpList>
) {
    if (!_cached_encoder_for_TpsInGtpList) {
        _cached_encoder_for_TpsInGtpList = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_TpsInGtpList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TpsInGtpList */

/* eslint-enable */
