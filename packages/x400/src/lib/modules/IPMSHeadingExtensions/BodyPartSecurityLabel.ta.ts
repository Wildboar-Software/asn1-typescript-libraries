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
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.js';
export {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.js';

/* START_OF_SYMBOL_DEFINITION BodyPartSecurityLabel */
/**
 * @summary BodyPartSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSecurityLabel  ::=  CHOICE {
 *   body-part-unlabelled      [0]  NULL,
 *   body-part-security-label  [1]  SecurityLabel
 * }
 * ```
 */
export type BodyPartSecurityLabel =
    | { body_part_unlabelled: NULL } /* CHOICE_ALT_ROOT */
    | { body_part_security_label: SecurityLabel } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BodyPartSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSecurityLabel */
let _cached_decoder_for_BodyPartSecurityLabel: $.ASN1Decoder<BodyPartSecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSecurityLabel */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSecurityLabel} The decoded data structure.
 */
export function _decode_BodyPartSecurityLabel(el: _Element) {
    if (!_cached_decoder_for_BodyPartSecurityLabel) {
        _cached_decoder_for_BodyPartSecurityLabel = $._decode_inextensible_choice<BodyPartSecurityLabel>(
            {
                'CONTEXT 0': [
                    'body_part_unlabelled',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'body_part_security_label',
                    $._decode_implicit<SecurityLabel>(
                        () => _decode_SecurityLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartSecurityLabel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSecurityLabel */
let _cached_encoder_for_BodyPartSecurityLabel: $.ASN1Encoder<BodyPartSecurityLabel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSecurityLabel */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSecurityLabel */
/**
 * @summary Encodes a(n) BodyPartSecurityLabel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSecurityLabel(
    value: BodyPartSecurityLabel,
    elGetter: $.ASN1Encoder<BodyPartSecurityLabel>
) {
    if (!_cached_encoder_for_BodyPartSecurityLabel) {
        _cached_encoder_for_BodyPartSecurityLabel = $._encode_choice<BodyPartSecurityLabel>(
            {
                body_part_unlabelled: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                body_part_security_label: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SecurityLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSecurityLabel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSecurityLabel */

/* eslint-enable */
