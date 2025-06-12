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
    GroupNamePart,
    _decode_GroupNamePart,
    _encode_GroupNamePart,
} from '../MSAbstractService/GroupNamePart.ta.js';
export {
    GroupNamePart,
    _decode_GroupNamePart,
    _encode_GroupNamePart,
} from '../MSAbstractService/GroupNamePart.ta.js';

/* START_OF_SYMBOL_DEFINITION MessageGroupName */
/**
 * @summary MessageGroupName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupName  ::=  SEQUENCE SIZE (1..ub-group-depth) OF GroupNamePart
 * ```
 */
export type MessageGroupName = GroupNamePart[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MessageGroupName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupName */
let _cached_decoder_for_MessageGroupName: $.ASN1Decoder<MessageGroupName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupName */

/* START_OF_SYMBOL_DEFINITION _decode_MessageGroupName */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupName} The decoded data structure.
 */
export function _decode_MessageGroupName(el: _Element) {
    if (!_cached_decoder_for_MessageGroupName) {
        _cached_decoder_for_MessageGroupName = $._decodeSequenceOf<GroupNamePart>(
            () => _decode_GroupNamePart
        );
    }
    return _cached_decoder_for_MessageGroupName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageGroupName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupName */
let _cached_encoder_for_MessageGroupName: $.ASN1Encoder<MessageGroupName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupName */

/* START_OF_SYMBOL_DEFINITION _encode_MessageGroupName */
/**
 * @summary Encodes a(n) MessageGroupName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupName, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupName(
    value: MessageGroupName,
    elGetter: $.ASN1Encoder<MessageGroupName>
) {
    if (!_cached_encoder_for_MessageGroupName) {
        _cached_encoder_for_MessageGroupName = $._encodeSequenceOf<GroupNamePart>(
            () => _encode_GroupNamePart,
            $.BER
        );
    }
    return _cached_encoder_for_MessageGroupName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageGroupName */

/* eslint-enable */
