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
    AddTpsToTpPoolResult_Item,
    _decode_AddTpsToTpPoolResult_Item,
    _encode_AddTpsToTpPoolResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolResult-Item.ta';
export {
    AddTpsToTpPoolResult_Item,
    _decode_AddTpsToTpPoolResult_Item,
    _encode_AddTpsToTpPoolResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolResult-Item.ta';

/* START_OF_SYMBOL_DEFINITION AddTpsToTpPoolResult */
/**
 * @summary AddTpsToTpPoolResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolResult  ::=
 *   SEQUENCE OF
 *     CHOICE {failed            [0]  Failed,
 *             tpsAddedToTpPool  [1]  TpsAddedToTpPool}
 * ```
 */
export type AddTpsToTpPoolResult = AddTpsToTpPoolResult_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AddTpsToTpPoolResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToTpPoolResult */
let _cached_decoder_for_AddTpsToTpPoolResult: $.ASN1Decoder<AddTpsToTpPoolResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToTpPoolResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddTpsToTpPoolResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolResult} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolResult(el: _Element) {
    if (!_cached_decoder_for_AddTpsToTpPoolResult) {
        _cached_decoder_for_AddTpsToTpPoolResult = $._decodeSequenceOf<AddTpsToTpPoolResult_Item>(
            () => _decode_AddTpsToTpPoolResult_Item
        );
    }
    return _cached_decoder_for_AddTpsToTpPoolResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddTpsToTpPoolResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToTpPoolResult */
let _cached_encoder_for_AddTpsToTpPoolResult: $.ASN1Encoder<AddTpsToTpPoolResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToTpPoolResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddTpsToTpPoolResult */
/**
 * @summary Encodes a(n) AddTpsToTpPoolResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolResult, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolResult(
    value: AddTpsToTpPoolResult,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolResult>
) {
    if (!_cached_encoder_for_AddTpsToTpPoolResult) {
        _cached_encoder_for_AddTpsToTpPoolResult = $._encodeSequenceOf<AddTpsToTpPoolResult_Item>(
            () => _encode_AddTpsToTpPoolResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToTpPoolResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddTpsToTpPoolResult */

/* eslint-enable */
