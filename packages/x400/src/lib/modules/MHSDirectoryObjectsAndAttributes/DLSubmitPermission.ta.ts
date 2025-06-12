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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.js';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.js';
import {
    ORNamePattern,
    _decode_ORNamePattern,
    _encode_ORNamePattern,
} from '../MHSDirectoryObjectsAndAttributes/ORNamePattern.ta.js';
export {
    ORNamePattern,
    _decode_ORNamePattern,
    _encode_ORNamePattern,
} from '../MHSDirectoryObjectsAndAttributes/ORNamePattern.ta.js';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.js';
export {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.js';

/* START_OF_SYMBOL_DEFINITION DLSubmitPermission */
/**
 * @summary DLSubmitPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLSubmitPermission  ::=  CHOICE {
 *   individual       [0]  ORName,
 *   member-of-dl     [1]  ORName,
 *   pattern-match    [2]  ORNamePattern,
 *   member-of-group  [3]  Name
 * }
 * ```
 */
export type DLSubmitPermission =
    | { individual: ORName } /* CHOICE_ALT_ROOT */
    | { member_of_dl: ORName } /* CHOICE_ALT_ROOT */
    | { pattern_match: ORNamePattern } /* CHOICE_ALT_ROOT */
    | { member_of_group: Name } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DLSubmitPermission */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLSubmitPermission */
let _cached_decoder_for_DLSubmitPermission: $.ASN1Decoder<DLSubmitPermission> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLSubmitPermission */

/* START_OF_SYMBOL_DEFINITION _decode_DLSubmitPermission */
/**
 * @summary Decodes an ASN.1 element into a(n) DLSubmitPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLSubmitPermission} The decoded data structure.
 */
export function _decode_DLSubmitPermission(el: _Element) {
    if (!_cached_decoder_for_DLSubmitPermission) {
        _cached_decoder_for_DLSubmitPermission = $._decode_inextensible_choice<DLSubmitPermission>(
            {
                'CONTEXT 0': [
                    'individual',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 1': [
                    'member_of_dl',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 2': [
                    'pattern_match',
                    $._decode_implicit<ORNamePattern>(
                        () => _decode_ORNamePattern
                    ),
                ],
                'CONTEXT 3': [
                    'member_of_group',
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
            }
        );
    }
    return _cached_decoder_for_DLSubmitPermission(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLSubmitPermission */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLSubmitPermission */
let _cached_encoder_for_DLSubmitPermission: $.ASN1Encoder<DLSubmitPermission> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLSubmitPermission */

/* START_OF_SYMBOL_DEFINITION _encode_DLSubmitPermission */
/**
 * @summary Encodes a(n) DLSubmitPermission into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLSubmitPermission, encoded as an ASN.1 Element.
 */
export function _encode_DLSubmitPermission(
    value: DLSubmitPermission,
    elGetter: $.ASN1Encoder<DLSubmitPermission>
) {
    if (!_cached_encoder_for_DLSubmitPermission) {
        _cached_encoder_for_DLSubmitPermission = $._encode_choice<DLSubmitPermission>(
            {
                individual: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ORName,
                    $.BER
                ),
                member_of_dl: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ORName,
                    $.BER
                ),
                pattern_match: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ORNamePattern,
                    $.BER
                ),
                member_of_group: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Name,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DLSubmitPermission(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLSubmitPermission */

/* eslint-enable */
