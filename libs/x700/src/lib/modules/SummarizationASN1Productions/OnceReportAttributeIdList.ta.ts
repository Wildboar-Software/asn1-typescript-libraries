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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta';
export {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta';

/* START_OF_SYMBOL_DEFINITION OnceReportAttributeIdList */
/**
 * @summary OnceReportAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnceReportAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type OnceReportAttributeIdList = AttributeId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OnceReportAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OnceReportAttributeIdList */
let _cached_decoder_for_OnceReportAttributeIdList: $.ASN1Decoder<OnceReportAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OnceReportAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _decode_OnceReportAttributeIdList */
/**
 * @summary Decodes an ASN.1 element into a(n) OnceReportAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OnceReportAttributeIdList} The decoded data structure.
 */
export function _decode_OnceReportAttributeIdList(el: _Element) {
    if (!_cached_decoder_for_OnceReportAttributeIdList) {
        _cached_decoder_for_OnceReportAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_OnceReportAttributeIdList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OnceReportAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OnceReportAttributeIdList */
let _cached_encoder_for_OnceReportAttributeIdList: $.ASN1Encoder<OnceReportAttributeIdList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OnceReportAttributeIdList */

/* START_OF_SYMBOL_DEFINITION _encode_OnceReportAttributeIdList */
/**
 * @summary Encodes a(n) OnceReportAttributeIdList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnceReportAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_OnceReportAttributeIdList(
    value: OnceReportAttributeIdList,
    elGetter: $.ASN1Encoder<OnceReportAttributeIdList>
) {
    if (!_cached_encoder_for_OnceReportAttributeIdList) {
        _cached_encoder_for_OnceReportAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_OnceReportAttributeIdList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OnceReportAttributeIdList */

/* eslint-enable */
