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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';

/* START_OF_SYMBOL_DEFINITION ImproperlySpecifiedRecipients */
/**
 * @summary ImproperlySpecifiedRecipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImproperlySpecifiedRecipients  ::=
 *   SEQUENCE SIZE (1..ub-recipients) OF ORAddressAndOptionalDirectoryName
 * ```
 */
export type ImproperlySpecifiedRecipients = ORAddressAndOptionalDirectoryName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ImproperlySpecifiedRecipients */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ImproperlySpecifiedRecipients */
let _cached_decoder_for_ImproperlySpecifiedRecipients: $.ASN1Decoder<ImproperlySpecifiedRecipients> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ImproperlySpecifiedRecipients */

/* START_OF_SYMBOL_DEFINITION _decode_ImproperlySpecifiedRecipients */
/**
 * @summary Decodes an ASN.1 element into a(n) ImproperlySpecifiedRecipients
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImproperlySpecifiedRecipients} The decoded data structure.
 */
export function _decode_ImproperlySpecifiedRecipients(el: _Element) {
    if (!_cached_decoder_for_ImproperlySpecifiedRecipients) {
        _cached_decoder_for_ImproperlySpecifiedRecipients = $._decodeSequenceOf<ORAddressAndOptionalDirectoryName>(
            () => _decode_ORAddressAndOptionalDirectoryName
        );
    }
    return _cached_decoder_for_ImproperlySpecifiedRecipients(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ImproperlySpecifiedRecipients */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ImproperlySpecifiedRecipients */
let _cached_encoder_for_ImproperlySpecifiedRecipients: $.ASN1Encoder<ImproperlySpecifiedRecipients> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ImproperlySpecifiedRecipients */

/* START_OF_SYMBOL_DEFINITION _encode_ImproperlySpecifiedRecipients */
/**
 * @summary Encodes a(n) ImproperlySpecifiedRecipients into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImproperlySpecifiedRecipients, encoded as an ASN.1 Element.
 */
export function _encode_ImproperlySpecifiedRecipients(
    value: ImproperlySpecifiedRecipients,
    elGetter: $.ASN1Encoder<ImproperlySpecifiedRecipients>
) {
    if (!_cached_encoder_for_ImproperlySpecifiedRecipients) {
        _cached_encoder_for_ImproperlySpecifiedRecipients = $._encodeSequenceOf<ORAddressAndOptionalDirectoryName>(
            () => _encode_ORAddressAndOptionalDirectoryName,
            $.BER
        );
    }
    return _cached_encoder_for_ImproperlySpecifiedRecipients(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ImproperlySpecifiedRecipients */

/* eslint-enable */
