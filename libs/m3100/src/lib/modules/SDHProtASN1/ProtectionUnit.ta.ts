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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/RelativeDistinguishedName.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionUnit */
/**
 * @summary ProtectionUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionUnit  ::=  CHOICE {
 *   protectingUnit  [0]  RelativeDistinguishedName,
 *   protectedUnit   [1]  RelativeDistinguishedName
 * }
 * ```
 */
export type ProtectionUnit =
    | { protectingUnit: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | { protectedUnit: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionUnit */
let _cached_decoder_for_ProtectionUnit: $.ASN1Decoder<ProtectionUnit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionUnit */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionUnit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionUnit} The decoded data structure.
 */
export function _decode_ProtectionUnit(el: _Element) {
    if (!_cached_decoder_for_ProtectionUnit) {
        _cached_decoder_for_ProtectionUnit = $._decode_inextensible_choice<ProtectionUnit>(
            {
                'CONTEXT 0': [
                    'protectingUnit',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
                'CONTEXT 1': [
                    'protectedUnit',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ProtectionUnit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionUnit */
let _cached_encoder_for_ProtectionUnit: $.ASN1Encoder<ProtectionUnit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionUnit */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionUnit */
/**
 * @summary Encodes a(n) ProtectionUnit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionUnit, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionUnit(
    value: ProtectionUnit,
    elGetter: $.ASN1Encoder<ProtectionUnit>
) {
    if (!_cached_encoder_for_ProtectionUnit) {
        _cached_encoder_for_ProtectionUnit = $._encode_choice<ProtectionUnit>(
            {
                protectingUnit: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
                protectedUnit: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionUnit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionUnit */

/* eslint-enable */
