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
    StateConditions_Item,
    _decode_StateConditions_Item,
    _encode_StateConditions_Item,
} from '../AccessControl-ASN1Module/StateConditions-Item.ta';
export {
    StateConditions_Item,
    _decode_StateConditions_Item,
    _encode_StateConditions_Item,
} from '../AccessControl-ASN1Module/StateConditions-Item.ta';

/* START_OF_SYMBOL_DEFINITION StateConditions */
/**
 * @summary StateConditions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StateConditions  ::=
 *   SET OF
 *     SEQUENCE {conditionalObject  ObjectInstance,
 *               state              CMISFilter}
 * ```
 */
export type StateConditions = StateConditions_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION StateConditions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StateConditions */
let _cached_decoder_for_StateConditions: $.ASN1Decoder<StateConditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StateConditions */

/* START_OF_SYMBOL_DEFINITION _decode_StateConditions */
/**
 * @summary Decodes an ASN.1 element into a(n) StateConditions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StateConditions} The decoded data structure.
 */
export function _decode_StateConditions(el: _Element) {
    if (!_cached_decoder_for_StateConditions) {
        _cached_decoder_for_StateConditions = $._decodeSetOf<StateConditions_Item>(
            () => _decode_StateConditions_Item
        );
    }
    return _cached_decoder_for_StateConditions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StateConditions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StateConditions */
let _cached_encoder_for_StateConditions: $.ASN1Encoder<StateConditions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StateConditions */

/* START_OF_SYMBOL_DEFINITION _encode_StateConditions */
/**
 * @summary Encodes a(n) StateConditions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateConditions, encoded as an ASN.1 Element.
 */
export function _encode_StateConditions(
    value: StateConditions,
    elGetter: $.ASN1Encoder<StateConditions>
) {
    if (!_cached_encoder_for_StateConditions) {
        _cached_encoder_for_StateConditions = $._encodeSetOf<StateConditions_Item>(
            () => _encode_StateConditions_Item,
            $.BER
        );
    }
    return _cached_encoder_for_StateConditions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StateConditions */

/* eslint-enable */
