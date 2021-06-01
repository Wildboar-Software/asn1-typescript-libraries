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
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
    InvokeId,
    _decode_InvokeId,
    _encode_InvokeId,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';

/* START_OF_SYMBOL_DEFINITION MTSInvokeIds */
/**
 * @summary MTSInvokeIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSInvokeIds  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export type MTSInvokeIds = InvokeId; // DefinedType
/* END_OF_SYMBOL_DEFINITION MTSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSInvokeIds */
let _cached_decoder_for_MTSInvokeIds: $.ASN1Decoder<MTSInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MTSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _decode_MTSInvokeIds */
/**
 * @summary Decodes an ASN.1 element into a(n) MTSInvokeIds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTSInvokeIds} The decoded data structure.
 */
export function _decode_MTSInvokeIds(el: _Element) {
    if (!_cached_decoder_for_MTSInvokeIds) {
        _cached_decoder_for_MTSInvokeIds = _decode_InvokeId;
    }
    return _cached_decoder_for_MTSInvokeIds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MTSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSInvokeIds */
let _cached_encoder_for_MTSInvokeIds: $.ASN1Encoder<MTSInvokeIds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MTSInvokeIds */

/* START_OF_SYMBOL_DEFINITION _encode_MTSInvokeIds */
/**
 * @summary Encodes a(n) MTSInvokeIds into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSInvokeIds, encoded as an ASN.1 Element.
 */
export function _encode_MTSInvokeIds(
    value: MTSInvokeIds,
    elGetter: $.ASN1Encoder<MTSInvokeIds>
) {
    if (!_cached_encoder_for_MTSInvokeIds) {
        _cached_encoder_for_MTSInvokeIds = _encode_InvokeId;
    }
    return _cached_encoder_for_MTSInvokeIds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MTSInvokeIds */

/* eslint-enable */
