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
    RevertInfo_Item,
    _decode_RevertInfo_Item,
    _encode_RevertInfo_Item,
} from '../SWMF/RevertInfo-Item.ta';
export {
    RevertInfo_Item,
    _decode_RevertInfo_Item,
    _encode_RevertInfo_Item,
} from '../SWMF/RevertInfo-Item.ta';

/* START_OF_SYMBOL_DEFINITION RevertInfo */
/**
 * @summary RevertInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevertInfo  ::=
 *   SEQUENCE OF
 *     CHOICE {patchId       GraphicString, -- system specific identifier
 *             patchPointer  ObjectInstance}
 * ```
 */
export type RevertInfo = RevertInfo_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RevertInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertInfo */
let _cached_decoder_for_RevertInfo: $.ASN1Decoder<RevertInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RevertInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RevertInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RevertInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevertInfo} The decoded data structure.
 */
export function _decode_RevertInfo(el: _Element) {
    if (!_cached_decoder_for_RevertInfo) {
        _cached_decoder_for_RevertInfo = $._decodeSequenceOf<RevertInfo_Item>(
            () => _decode_RevertInfo_Item
        );
    }
    return _cached_decoder_for_RevertInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RevertInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertInfo */
let _cached_encoder_for_RevertInfo: $.ASN1Encoder<RevertInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RevertInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RevertInfo */
/**
 * @summary Encodes a(n) RevertInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevertInfo, encoded as an ASN.1 Element.
 */
export function _encode_RevertInfo(
    value: RevertInfo,
    elGetter: $.ASN1Encoder<RevertInfo>
) {
    if (!_cached_encoder_for_RevertInfo) {
        _cached_encoder_for_RevertInfo = $._encodeSequenceOf<RevertInfo_Item>(
            () => _encode_RevertInfo_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RevertInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RevertInfo */

/* eslint-enable */
