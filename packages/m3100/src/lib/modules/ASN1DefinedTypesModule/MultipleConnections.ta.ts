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
    MultipleConnections_Item,
    _decode_MultipleConnections_Item,
    _encode_MultipleConnections_Item,
} from '../ASN1DefinedTypesModule/MultipleConnections-Item.ta.js';
export {
    MultipleConnections_Item,
    _decode_MultipleConnections_Item,
    _encode_MultipleConnections_Item,
} from '../ASN1DefinedTypesModule/MultipleConnections-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION MultipleConnections */
/**
 * @summary MultipleConnections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleConnections  ::=
 *   SET OF
 *     CHOICE {downstreamNotConnected  [0]  ObjectInstance,
 *             downstreamConnected     [1]  ObjectInstance,
 *             upstreamNotConnected    [2]  ObjectInstance,
 *             upstreamConnected       [3]  ObjectInstance}
 * ```
 */
export type MultipleConnections = MultipleConnections_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MultipleConnections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleConnections */
let _cached_decoder_for_MultipleConnections: $.ASN1Decoder<MultipleConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleConnections */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleConnections */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleConnections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleConnections} The decoded data structure.
 */
export function _decode_MultipleConnections(el: _Element) {
    if (!_cached_decoder_for_MultipleConnections) {
        _cached_decoder_for_MultipleConnections = $._decodeSetOf<MultipleConnections_Item>(
            () => _decode_MultipleConnections_Item
        );
    }
    return _cached_decoder_for_MultipleConnections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleConnections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleConnections */
let _cached_encoder_for_MultipleConnections: $.ASN1Encoder<MultipleConnections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleConnections */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleConnections */
/**
 * @summary Encodes a(n) MultipleConnections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleConnections, encoded as an ASN.1 Element.
 */
export function _encode_MultipleConnections(
    value: MultipleConnections,
    elGetter: $.ASN1Encoder<MultipleConnections>
) {
    if (!_cached_encoder_for_MultipleConnections) {
        _cached_encoder_for_MultipleConnections = $._encodeSetOf<MultipleConnections_Item>(
            () => _encode_MultipleConnections_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MultipleConnections(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleConnections */

/* eslint-enable */
