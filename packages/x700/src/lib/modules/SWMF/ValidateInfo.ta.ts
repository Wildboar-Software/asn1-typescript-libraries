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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';
export {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta';

/* START_OF_SYMBOL_DEFINITION ValidateInfo */
/**
 * @summary ValidateInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidateInfo  ::=  CHOICE {
 *   instanceDefaultValidationType  [0]  NULL, -- local matter
 *   registeredValidationType       [1]  OBJECT IDENTIFIER,
 *   systemSpecificValidationType   [2]  SET OF ManagementExtension
 * }
 * ```
 */
export type ValidateInfo =
    | { instanceDefaultValidationType: NULL } /* CHOICE_ALT_ROOT */
    | { registeredValidationType: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | {
          systemSpecificValidationType: ManagementExtension[];
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ValidateInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidateInfo */
let _cached_decoder_for_ValidateInfo: $.ASN1Decoder<ValidateInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ValidateInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ValidateInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ValidateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidateInfo} The decoded data structure.
 */
export function _decode_ValidateInfo(el: _Element) {
    if (!_cached_decoder_for_ValidateInfo) {
        _cached_decoder_for_ValidateInfo = $._decode_inextensible_choice<ValidateInfo>(
            {
                'CONTEXT 0': [
                    'instanceDefaultValidationType',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'registeredValidationType',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'CONTEXT 2': [
                    'systemSpecificValidationType',
                    $._decode_implicit<ManagementExtension[]>(() =>
                        $._decodeSetOf<ManagementExtension>(
                            () => _decode_ManagementExtension
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ValidateInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ValidateInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidateInfo */
let _cached_encoder_for_ValidateInfo: $.ASN1Encoder<ValidateInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ValidateInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ValidateInfo */
/**
 * @summary Encodes a(n) ValidateInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidateInfo, encoded as an ASN.1 Element.
 */
export function _encode_ValidateInfo(
    value: ValidateInfo,
    elGetter: $.ASN1Encoder<ValidateInfo>
) {
    if (!_cached_encoder_for_ValidateInfo) {
        _cached_encoder_for_ValidateInfo = $._encode_choice<ValidateInfo>(
            {
                instanceDefaultValidationType: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                registeredValidationType: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                systemSpecificValidationType: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<ManagementExtension>(
                            () => _encode_ManagementExtension,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ValidateInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ValidateInfo */

/* eslint-enable */
