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
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta';
export {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from '../ISO8823-PRESENTATION/Presentation-context-identifier.ta';

/* START_OF_SYMBOL_DEFINITION Presentation_context_deletion_list */
/**
 * @summary Presentation_context_deletion_list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-deletion-list  ::=
 *   SEQUENCE SIZE (0..7, ..., 8..MAX) OF Presentation-context-identifier
 * ```
 */
export type Presentation_context_deletion_list = Presentation_context_identifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Presentation_context_deletion_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_deletion_list */
let _cached_decoder_for_Presentation_context_deletion_list: $.ASN1Decoder<Presentation_context_deletion_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_deletion_list */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_deletion_list */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_deletion_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_deletion_list} The decoded data structure.
 */
export function _decode_Presentation_context_deletion_list(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_deletion_list) {
        _cached_decoder_for_Presentation_context_deletion_list = $._decodeSequenceOf<Presentation_context_identifier>(
            () => _decode_Presentation_context_identifier
        );
    }
    return _cached_decoder_for_Presentation_context_deletion_list(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_deletion_list */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_deletion_list */
let _cached_encoder_for_Presentation_context_deletion_list: $.ASN1Encoder<Presentation_context_deletion_list> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_deletion_list */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_deletion_list */
/**
 * @summary Encodes a(n) Presentation_context_deletion_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_deletion_list, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_deletion_list(
    value: Presentation_context_deletion_list,
    elGetter: $.ASN1Encoder<Presentation_context_deletion_list>
) {
    if (!_cached_encoder_for_Presentation_context_deletion_list) {
        _cached_encoder_for_Presentation_context_deletion_list = $._encodeSequenceOf<Presentation_context_identifier>(
            () => _encode_Presentation_context_identifier,
            $.BER
        );
    }
    return _cached_encoder_for_Presentation_context_deletion_list(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_deletion_list */

/* eslint-enable */
