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
    InternalTraceInformationElement,
    _decode_InternalTraceInformationElement,
    _encode_InternalTraceInformationElement,
} from '../MTAAbstractService/InternalTraceInformationElement.ta';
export {
    InternalTraceInformationElement,
    _decode_InternalTraceInformationElement,
    _encode_InternalTraceInformationElement,
} from '../MTAAbstractService/InternalTraceInformationElement.ta';

/* START_OF_SYMBOL_DEFINITION InternalTraceInformation */
/**
 * @summary InternalTraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternalTraceInformation  ::=
 *   SEQUENCE SIZE (1..ub-transfers) OF InternalTraceInformationElement
 * ```
 */
export type InternalTraceInformation = InternalTraceInformationElement[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION InternalTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTraceInformation */
let _cached_decoder_for_InternalTraceInformation: $.ASN1Decoder<InternalTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternalTraceInformation */

/* START_OF_SYMBOL_DEFINITION _decode_InternalTraceInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) InternalTraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternalTraceInformation} The decoded data structure.
 */
export function _decode_InternalTraceInformation(el: _Element) {
    if (!_cached_decoder_for_InternalTraceInformation) {
        _cached_decoder_for_InternalTraceInformation = $._decodeSequenceOf<InternalTraceInformationElement>(
            () => _decode_InternalTraceInformationElement
        );
    }
    return _cached_decoder_for_InternalTraceInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InternalTraceInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTraceInformation */
let _cached_encoder_for_InternalTraceInformation: $.ASN1Encoder<InternalTraceInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternalTraceInformation */

/* START_OF_SYMBOL_DEFINITION _encode_InternalTraceInformation */
/**
 * @summary Encodes a(n) InternalTraceInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternalTraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_InternalTraceInformation(
    value: InternalTraceInformation,
    elGetter: $.ASN1Encoder<InternalTraceInformation>
) {
    if (!_cached_encoder_for_InternalTraceInformation) {
        _cached_encoder_for_InternalTraceInformation = $._encodeSequenceOf<InternalTraceInformationElement>(
            () => _encode_InternalTraceInformationElement,
            $.BER
        );
    }
    return _cached_encoder_for_InternalTraceInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InternalTraceInformation */

/* eslint-enable */
