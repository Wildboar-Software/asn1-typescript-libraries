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
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';
export {
    SecurityContext,
    _decode_SecurityContext,
    _encode_SecurityContext,
} from '../MTSAbstractService/SecurityContext.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PermissibleSecurityContext */
/**
 * @summary PermissibleSecurityContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PermissibleSecurityContext  ::=  SET OF SecurityContext
 * ```
 */
export type PermissibleSecurityContext = SecurityContext[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PermissibleSecurityContext */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PermissibleSecurityContext */
let _cached_decoder_for_PermissibleSecurityContext: $.ASN1Decoder<PermissibleSecurityContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PermissibleSecurityContext */

/* START_OF_SYMBOL_DEFINITION _decode_PermissibleSecurityContext */
/**
 * @summary Decodes an ASN.1 element into a(n) PermissibleSecurityContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PermissibleSecurityContext} The decoded data structure.
 */
export function _decode_PermissibleSecurityContext(el: _Element) {
    if (!_cached_decoder_for_PermissibleSecurityContext) {
        _cached_decoder_for_PermissibleSecurityContext = $._decodeSetOf<SecurityContext>(
            () => _decode_SecurityContext
        );
    }
    return _cached_decoder_for_PermissibleSecurityContext(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PermissibleSecurityContext */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PermissibleSecurityContext */
let _cached_encoder_for_PermissibleSecurityContext: $.ASN1Encoder<PermissibleSecurityContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PermissibleSecurityContext */

/* START_OF_SYMBOL_DEFINITION _encode_PermissibleSecurityContext */
/**
 * @summary Encodes a(n) PermissibleSecurityContext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PermissibleSecurityContext, encoded as an ASN.1 Element.
 */
export function _encode_PermissibleSecurityContext(
    value: PermissibleSecurityContext,
    elGetter: $.ASN1Encoder<PermissibleSecurityContext>
) {
    if (!_cached_encoder_for_PermissibleSecurityContext) {
        _cached_encoder_for_PermissibleSecurityContext = $._encodeSetOf<SecurityContext>(
            () => _encode_SecurityContext,
            $.BER
        );
    }
    return _cached_encoder_for_PermissibleSecurityContext(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PermissibleSecurityContext */

/* eslint-enable */
