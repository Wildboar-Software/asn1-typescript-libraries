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

/* START_OF_SYMBOL_DEFINITION AttributeIDList */
/**
 * @summary AttributeIDList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIDList  ::=  SET OF AttributeId
 * ```
 */
export type AttributeIDList = AttributeId[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeIDList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIDList */
let _cached_decoder_for_AttributeIDList: $.ASN1Decoder<AttributeIDList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIDList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIDList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIDList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIDList} The decoded data structure.
 */
export function _decode_AttributeIDList(el: _Element) {
    if (!_cached_decoder_for_AttributeIDList) {
        _cached_decoder_for_AttributeIDList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_AttributeIDList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIDList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIDList */
let _cached_encoder_for_AttributeIDList: $.ASN1Encoder<AttributeIDList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIDList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIDList */
/**
 * @summary Encodes a(n) AttributeIDList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIDList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIDList(
    value: AttributeIDList,
    elGetter: $.ASN1Encoder<AttributeIDList>
) {
    if (!_cached_encoder_for_AttributeIDList) {
        _cached_encoder_for_AttributeIDList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeIDList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIDList */

/* eslint-enable */
