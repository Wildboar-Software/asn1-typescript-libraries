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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    ToBeTestedMORTs_scopedSet,
    _decode_ToBeTestedMORTs_scopedSet,
    _encode_ToBeTestedMORTs_scopedSet,
} from '../Test-ASN1Module/ToBeTestedMORTs-scopedSet.ta';
export {
    ToBeTestedMORTs_scopedSet,
    _decode_ToBeTestedMORTs_scopedSet,
    _encode_ToBeTestedMORTs_scopedSet,
} from '../Test-ASN1Module/ToBeTestedMORTs-scopedSet.ta';

/* START_OF_SYMBOL_DEFINITION ToBeTestedMORTs */
/**
 * @summary ToBeTestedMORTs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToBeTestedMORTs  ::=  CHOICE {
 *   normalForm  [29]  SET OF ObjectInstance,
 *   scopedSet
 *     [30]  SEQUENCE {base         ObjectInstance,
 *                     mORTsScope0  Scope DEFAULT namedNumbers:baseObject,
 *                     mORTsFilter  [3]  CMISFilter DEFAULT and:{}}
 * }
 * ```
 */
export type ToBeTestedMORTs =
    | { normalForm: ObjectInstance[] } /* CHOICE_ALT_ROOT */
    | { scopedSet: ToBeTestedMORTs_scopedSet } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ToBeTestedMORTs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeTestedMORTs */
let _cached_decoder_for_ToBeTestedMORTs: $.ASN1Decoder<ToBeTestedMORTs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToBeTestedMORTs */

/* START_OF_SYMBOL_DEFINITION _decode_ToBeTestedMORTs */
/**
 * @summary Decodes an ASN.1 element into a(n) ToBeTestedMORTs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToBeTestedMORTs} The decoded data structure.
 */
export function _decode_ToBeTestedMORTs(el: _Element) {
    if (!_cached_decoder_for_ToBeTestedMORTs) {
        _cached_decoder_for_ToBeTestedMORTs = $._decode_inextensible_choice<ToBeTestedMORTs>(
            {
                'CONTEXT 29': [
                    'normalForm',
                    $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    ),
                ],
                'CONTEXT 30': [
                    'scopedSet',
                    $._decode_implicit<ToBeTestedMORTs_scopedSet>(
                        () => _decode_ToBeTestedMORTs_scopedSet
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ToBeTestedMORTs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToBeTestedMORTs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeTestedMORTs */
let _cached_encoder_for_ToBeTestedMORTs: $.ASN1Encoder<ToBeTestedMORTs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToBeTestedMORTs */

/* START_OF_SYMBOL_DEFINITION _encode_ToBeTestedMORTs */
/**
 * @summary Encodes a(n) ToBeTestedMORTs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToBeTestedMORTs, encoded as an ASN.1 Element.
 */
export function _encode_ToBeTestedMORTs(
    value: ToBeTestedMORTs,
    elGetter: $.ASN1Encoder<ToBeTestedMORTs>
) {
    if (!_cached_encoder_for_ToBeTestedMORTs) {
        _cached_encoder_for_ToBeTestedMORTs = $._encode_choice<ToBeTestedMORTs>(
            {
                normalForm: $._encode_implicit(
                    _TagClass.context,
                    29,
                    () =>
                        $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        ),
                    $.BER
                ),
                scopedSet: $._encode_implicit(
                    _TagClass.context,
                    30,
                    () => _encode_ToBeTestedMORTs_scopedSet,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ToBeTestedMORTs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToBeTestedMORTs */

/* eslint-enable */
