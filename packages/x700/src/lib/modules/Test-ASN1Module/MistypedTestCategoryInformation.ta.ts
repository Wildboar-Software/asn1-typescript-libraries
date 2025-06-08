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

/* START_OF_SYMBOL_DEFINITION MistypedTestCategoryInformation */
/**
 * @summary MistypedTestCategoryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MistypedTestCategoryInformation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MistypedTestCategoryInformation = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MistypedTestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MistypedTestCategoryInformation */
let _cached_decoder_for_MistypedTestCategoryInformation: $.ASN1Decoder<MistypedTestCategoryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MistypedTestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _decode_MistypedTestCategoryInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) MistypedTestCategoryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MistypedTestCategoryInformation} The decoded data structure.
 */
export function _decode_MistypedTestCategoryInformation(el: _Element) {
    if (!_cached_decoder_for_MistypedTestCategoryInformation) {
        _cached_decoder_for_MistypedTestCategoryInformation =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MistypedTestCategoryInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MistypedTestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MistypedTestCategoryInformation */
let _cached_encoder_for_MistypedTestCategoryInformation: $.ASN1Encoder<MistypedTestCategoryInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MistypedTestCategoryInformation */

/* START_OF_SYMBOL_DEFINITION _encode_MistypedTestCategoryInformation */
/**
 * @summary Encodes a(n) MistypedTestCategoryInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MistypedTestCategoryInformation, encoded as an ASN.1 Element.
 */
export function _encode_MistypedTestCategoryInformation(
    value: MistypedTestCategoryInformation,
    elGetter: $.ASN1Encoder<MistypedTestCategoryInformation>
) {
    if (!_cached_encoder_for_MistypedTestCategoryInformation) {
        _cached_encoder_for_MistypedTestCategoryInformation =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MistypedTestCategoryInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MistypedTestCategoryInformation */

/* eslint-enable */
