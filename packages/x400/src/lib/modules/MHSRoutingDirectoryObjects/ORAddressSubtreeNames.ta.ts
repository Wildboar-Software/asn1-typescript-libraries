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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.js';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.js';

/* START_OF_SYMBOL_DEFINITION ORAddressSubtreeNames */
/**
 * @summary ORAddressSubtreeNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressSubtreeNames  ::=  SEQUENCE OF DistinguishedName
 * ```
 */
export type ORAddressSubtreeNames = DistinguishedName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ORAddressSubtreeNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressSubtreeNames */
let _cached_decoder_for_ORAddressSubtreeNames: $.ASN1Decoder<ORAddressSubtreeNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressSubtreeNames */

/* START_OF_SYMBOL_DEFINITION _decode_ORAddressSubtreeNames */
/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressSubtreeNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressSubtreeNames} The decoded data structure.
 */
export function _decode_ORAddressSubtreeNames(el: _Element) {
    if (!_cached_decoder_for_ORAddressSubtreeNames) {
        _cached_decoder_for_ORAddressSubtreeNames = $._decodeSequenceOf<DistinguishedName>(
            () => _decode_DistinguishedName
        );
    }
    return _cached_decoder_for_ORAddressSubtreeNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORAddressSubtreeNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressSubtreeNames */
let _cached_encoder_for_ORAddressSubtreeNames: $.ASN1Encoder<ORAddressSubtreeNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressSubtreeNames */

/* START_OF_SYMBOL_DEFINITION _encode_ORAddressSubtreeNames */
/**
 * @summary Encodes a(n) ORAddressSubtreeNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressSubtreeNames, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressSubtreeNames(
    value: ORAddressSubtreeNames,
    elGetter: $.ASN1Encoder<ORAddressSubtreeNames>
) {
    if (!_cached_encoder_for_ORAddressSubtreeNames) {
        _cached_encoder_for_ORAddressSubtreeNames = $._encodeSequenceOf<DistinguishedName>(
            () => _encode_DistinguishedName,
            $.BER
        );
    }
    return _cached_encoder_for_ORAddressSubtreeNames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ORAddressSubtreeNames */

/* eslint-enable */
