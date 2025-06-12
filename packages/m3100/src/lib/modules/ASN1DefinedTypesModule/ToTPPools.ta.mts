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
    ToTPPools_Item,
    _decode_ToTPPools_Item,
    _encode_ToTPPools_Item,
} from '../ASN1DefinedTypesModule/ToTPPools-Item.ta.mjs';
export {
    ToTPPools_Item,
    _decode_ToTPPools_Item,
    _encode_ToTPPools_Item,
} from '../ASN1DefinedTypesModule/ToTPPools-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ToTPPools */
/**
 * @summary ToTPPools
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToTPPools  ::=
 *   SET OF SEQUENCE {tpPoolId     ObjectInstance,
 *                    numberOfTPs  INTEGER}
 * ```
 */
export type ToTPPools = ToTPPools_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ToTPPools */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToTPPools */
let _cached_decoder_for_ToTPPools: $.ASN1Decoder<ToTPPools> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToTPPools */

/* START_OF_SYMBOL_DEFINITION _decode_ToTPPools */
/**
 * @summary Decodes an ASN.1 element into a(n) ToTPPools
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToTPPools} The decoded data structure.
 */
export function _decode_ToTPPools(el: _Element) {
    if (!_cached_decoder_for_ToTPPools) {
        _cached_decoder_for_ToTPPools = $._decodeSetOf<ToTPPools_Item>(
            () => _decode_ToTPPools_Item
        );
    }
    return _cached_decoder_for_ToTPPools(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToTPPools */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToTPPools */
let _cached_encoder_for_ToTPPools: $.ASN1Encoder<ToTPPools> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToTPPools */

/* START_OF_SYMBOL_DEFINITION _encode_ToTPPools */
/**
 * @summary Encodes a(n) ToTPPools into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToTPPools, encoded as an ASN.1 Element.
 */
export function _encode_ToTPPools(
    value: ToTPPools,
    elGetter: $.ASN1Encoder<ToTPPools>
) {
    if (!_cached_encoder_for_ToTPPools) {
        _cached_encoder_for_ToTPPools = $._encodeSetOf<ToTPPools_Item>(
            () => _encode_ToTPPools_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ToTPPools(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToTPPools */

/* eslint-enable */
