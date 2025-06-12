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
    AdditionalBodyParts_Item,
    _decode_AdditionalBodyParts_Item,
    _encode_AdditionalBodyParts_Item,
} from '../EDIMSInformationObjects/AdditionalBodyParts-Item.ta.js';
export {
    AdditionalBodyParts_Item,
    _decode_AdditionalBodyParts_Item,
    _encode_AdditionalBodyParts_Item,
} from '../EDIMSInformationObjects/AdditionalBodyParts-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION AdditionalBodyParts */
/**
 * @summary AdditionalBodyParts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalBodyParts  ::=
 *   SEQUENCE OF
 *     CHOICE {external-body-part  [0]  EDIM-ExtendedBodyPart,
 *             place-holder        [1]  BodyPartPlaceHolder
 *     }
 * ```
 */
export type AdditionalBodyParts = AdditionalBodyParts_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AdditionalBodyParts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalBodyParts */
let _cached_decoder_for_AdditionalBodyParts: $.ASN1Decoder<AdditionalBodyParts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdditionalBodyParts */

/* START_OF_SYMBOL_DEFINITION _decode_AdditionalBodyParts */
/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalBodyParts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdditionalBodyParts} The decoded data structure.
 */
export function _decode_AdditionalBodyParts(el: _Element) {
    if (!_cached_decoder_for_AdditionalBodyParts) {
        _cached_decoder_for_AdditionalBodyParts = $._decodeSequenceOf<AdditionalBodyParts_Item>(
            () => _decode_AdditionalBodyParts_Item
        );
    }
    return _cached_decoder_for_AdditionalBodyParts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdditionalBodyParts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalBodyParts */
let _cached_encoder_for_AdditionalBodyParts: $.ASN1Encoder<AdditionalBodyParts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdditionalBodyParts */

/* START_OF_SYMBOL_DEFINITION _encode_AdditionalBodyParts */
/**
 * @summary Encodes a(n) AdditionalBodyParts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalBodyParts, encoded as an ASN.1 Element.
 */
export function _encode_AdditionalBodyParts(
    value: AdditionalBodyParts,
    elGetter: $.ASN1Encoder<AdditionalBodyParts>
) {
    if (!_cached_encoder_for_AdditionalBodyParts) {
        _cached_encoder_for_AdditionalBodyParts = $._encodeSequenceOf<AdditionalBodyParts_Item>(
            () => _encode_AdditionalBodyParts_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AdditionalBodyParts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdditionalBodyParts */

/* eslint-enable */
