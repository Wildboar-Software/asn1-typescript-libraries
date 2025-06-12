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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION SubNetworkConnectionPointerList */
/**
 * @summary SubNetworkConnectionPointerList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubNetworkConnectionPointerList  ::=  SEQUENCE OF RelatedObjectInstance
 * ```
 */
export type SubNetworkConnectionPointerList = RelatedObjectInstance[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubNetworkConnectionPointerList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubNetworkConnectionPointerList */
let _cached_decoder_for_SubNetworkConnectionPointerList: $.ASN1Decoder<SubNetworkConnectionPointerList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubNetworkConnectionPointerList */

/* START_OF_SYMBOL_DEFINITION _decode_SubNetworkConnectionPointerList */
/**
 * @summary Decodes an ASN.1 element into a(n) SubNetworkConnectionPointerList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubNetworkConnectionPointerList} The decoded data structure.
 */
export function _decode_SubNetworkConnectionPointerList(el: _Element) {
    if (!_cached_decoder_for_SubNetworkConnectionPointerList) {
        _cached_decoder_for_SubNetworkConnectionPointerList = $._decodeSequenceOf<RelatedObjectInstance>(
            () => _decode_RelatedObjectInstance
        );
    }
    return _cached_decoder_for_SubNetworkConnectionPointerList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubNetworkConnectionPointerList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubNetworkConnectionPointerList */
let _cached_encoder_for_SubNetworkConnectionPointerList: $.ASN1Encoder<SubNetworkConnectionPointerList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubNetworkConnectionPointerList */

/* START_OF_SYMBOL_DEFINITION _encode_SubNetworkConnectionPointerList */
/**
 * @summary Encodes a(n) SubNetworkConnectionPointerList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubNetworkConnectionPointerList, encoded as an ASN.1 Element.
 */
export function _encode_SubNetworkConnectionPointerList(
    value: SubNetworkConnectionPointerList,
    elGetter: $.ASN1Encoder<SubNetworkConnectionPointerList>
) {
    if (!_cached_encoder_for_SubNetworkConnectionPointerList) {
        _cached_encoder_for_SubNetworkConnectionPointerList = $._encodeSequenceOf<RelatedObjectInstance>(
            () => _encode_RelatedObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_SubNetworkConnectionPointerList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubNetworkConnectionPointerList */

/* eslint-enable */
