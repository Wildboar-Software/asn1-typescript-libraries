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
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from '../CmsTelebiometric/IssuerAndSerialNumber.ta.mjs';
export {
    IssuerAndSerialNumber,
    _decode_IssuerAndSerialNumber,
    _encode_IssuerAndSerialNumber,
} from '../CmsTelebiometric/IssuerAndSerialNumber.ta.mjs';
import {
    OriginatorPublicKey,
    _decode_OriginatorPublicKey,
    _encode_OriginatorPublicKey,
} from '../CmsTelebiometric/OriginatorPublicKey.ta.mjs';
export {
    OriginatorPublicKey,
    _decode_OriginatorPublicKey,
    _encode_OriginatorPublicKey,
} from '../CmsTelebiometric/OriginatorPublicKey.ta.mjs';

/* START_OF_SYMBOL_DEFINITION OriginatorIdentifierOrKey */
/**
 * @summary OriginatorIdentifierOrKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorIdentifierOrKey  ::=  CHOICE {
 *   issuerAndSerialNumber    IssuerAndSerialNumber,
 * --subjectKeyIdentifier [0] SubjectKeyIdentifier,
 *   originatorKey        [1] OriginatorPublicKey,
 *   ... }
 * ```
 */
export type OriginatorIdentifierOrKey =
    | { issuerAndSerialNumber: IssuerAndSerialNumber } /* CHOICE_ALT_ROOT */
    | { originatorKey: OriginatorPublicKey } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorIdentifierOrKey */
let _cached_decoder_for_OriginatorIdentifierOrKey: $.ASN1Decoder<OriginatorIdentifierOrKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorIdentifierOrKey */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorIdentifierOrKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorIdentifierOrKey} The decoded data structure.
 */
export function _decode_OriginatorIdentifierOrKey(el: _Element) {
    if (!_cached_decoder_for_OriginatorIdentifierOrKey) {
        _cached_decoder_for_OriginatorIdentifierOrKey = $._decode_extensible_choice<OriginatorIdentifierOrKey>(
            {
                'UNIVERSAL 16': [
                    'issuerAndSerialNumber',
                    _decode_IssuerAndSerialNumber,
                ],
                'CONTEXT 1': [
                    'originatorKey',
                    $._decode_implicit<OriginatorPublicKey>(
                        () => _decode_OriginatorPublicKey
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OriginatorIdentifierOrKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorIdentifierOrKey */
let _cached_encoder_for_OriginatorIdentifierOrKey: $.ASN1Encoder<OriginatorIdentifierOrKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorIdentifierOrKey */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorIdentifierOrKey */
/**
 * @summary Encodes a(n) OriginatorIdentifierOrKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorIdentifierOrKey, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorIdentifierOrKey(
    value: OriginatorIdentifierOrKey,
    elGetter: $.ASN1Encoder<OriginatorIdentifierOrKey>
) {
    if (!_cached_encoder_for_OriginatorIdentifierOrKey) {
        _cached_encoder_for_OriginatorIdentifierOrKey = $._encode_choice<OriginatorIdentifierOrKey>(
            {
                issuerAndSerialNumber: _encode_IssuerAndSerialNumber,
                originatorKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OriginatorPublicKey,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OriginatorIdentifierOrKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorIdentifierOrKey */

/* eslint-enable */
