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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ProtocolError */
/**
 * @summary ProtocolError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolError  ::=  SET OF ManagementExtension
 * ```
 */
export type ProtocolError = ManagementExtension[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ProtocolError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolError */
let _cached_decoder_for_ProtocolError: $.ASN1Decoder<ProtocolError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolError */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolError */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolError} The decoded data structure.
 */
export function _decode_ProtocolError(el: _Element) {
    if (!_cached_decoder_for_ProtocolError) {
        _cached_decoder_for_ProtocolError = $._decodeSetOf<ManagementExtension>(
            () => _decode_ManagementExtension
        );
    }
    return _cached_decoder_for_ProtocolError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolError */
let _cached_encoder_for_ProtocolError: $.ASN1Encoder<ProtocolError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolError */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolError */
/**
 * @summary Encodes a(n) ProtocolError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolError, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolError(
    value: ProtocolError,
    elGetter: $.ASN1Encoder<ProtocolError>
) {
    if (!_cached_encoder_for_ProtocolError) {
        _cached_encoder_for_ProtocolError = $._encodeSetOf<ManagementExtension>(
            () => _encode_ManagementExtension,
            $.BER
        );
    }
    return _cached_encoder_for_ProtocolError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolError */

/* eslint-enable */
