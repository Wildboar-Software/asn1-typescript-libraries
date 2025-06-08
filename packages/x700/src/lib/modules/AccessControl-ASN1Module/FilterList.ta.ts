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
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta';
export {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta';

/* START_OF_SYMBOL_DEFINITION FilterList */
/**
 * @summary FilterList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterList  ::=  SET OF CMISFilter
 * ```
 */
export type FilterList = CMISFilter[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION FilterList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterList */
let _cached_decoder_for_FilterList: $.ASN1Decoder<FilterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterList */

/* START_OF_SYMBOL_DEFINITION _decode_FilterList */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterList} The decoded data structure.
 */
export function _decode_FilterList(el: _Element) {
    if (!_cached_decoder_for_FilterList) {
        _cached_decoder_for_FilterList = $._decodeSetOf<CMISFilter>(
            () => _decode_CMISFilter
        );
    }
    return _cached_decoder_for_FilterList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterList */
let _cached_encoder_for_FilterList: $.ASN1Encoder<FilterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterList */

/* START_OF_SYMBOL_DEFINITION _encode_FilterList */
/**
 * @summary Encodes a(n) FilterList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterList, encoded as an ASN.1 Element.
 */
export function _encode_FilterList(
    value: FilterList,
    elGetter: $.ASN1Encoder<FilterList>
) {
    if (!_cached_encoder_for_FilterList) {
        _cached_encoder_for_FilterList = $._encodeSetOf<CMISFilter>(
            () => _encode_CMISFilter,
            $.BER
        );
    }
    return _cached_encoder_for_FilterList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterList */

/* eslint-enable */
