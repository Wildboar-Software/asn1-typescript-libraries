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
    ExplicitPtoP,
    _decode_ExplicitPtoP,
    _encode_ExplicitPtoP,
} from '../ASN1DefinedTypesModule/ExplicitPtoP.ta';
export {
    ExplicitPtoP,
    _decode_ExplicitPtoP,
    _encode_ExplicitPtoP,
} from '../ASN1DefinedTypesModule/ExplicitPtoP.ta';
import {
    PtoTPPool,
    _decode_PtoTPPool,
    _encode_PtoTPPool,
} from '../ASN1DefinedTypesModule/PtoTPPool.ta';
export {
    PtoTPPool,
    _decode_PtoTPPool,
    _encode_PtoTPPool,
} from '../ASN1DefinedTypesModule/PtoTPPool.ta';
import {
    ExplicitPtoMP,
    _decode_ExplicitPtoMP,
    _encode_ExplicitPtoMP,
} from '../ASN1DefinedTypesModule/ExplicitPtoMP.ta';
export {
    ExplicitPtoMP,
    _decode_ExplicitPtoMP,
    _encode_ExplicitPtoMP,
} from '../ASN1DefinedTypesModule/ExplicitPtoMP.ta';
import {
    PtoMPools,
    _decode_PtoMPools,
    _encode_PtoMPools,
} from '../ASN1DefinedTypesModule/PtoMPools.ta';
export {
    PtoMPools,
    _decode_PtoMPools,
    _encode_PtoMPools,
} from '../ASN1DefinedTypesModule/PtoMPools.ta';

/* START_OF_SYMBOL_DEFINITION ConnectionType */
/**
 * @summary ConnectionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionType  ::=  CHOICE {
 *   explicitPToP   [0]  ExplicitPtoP,
 *   ptoTpPool      [1]  PtoTPPool,
 *   explicitPtoMP  [2]  ExplicitPtoMP,
 *   ptoMPools      [3]  PtoMPools
 * }
 * ```
 */
export type ConnectionType =
    | { explicitPToP: ExplicitPtoP } /* CHOICE_ALT_ROOT */
    | { ptoTpPool: PtoTPPool } /* CHOICE_ALT_ROOT */
    | { explicitPtoMP: ExplicitPtoMP } /* CHOICE_ALT_ROOT */
    | { ptoMPools: PtoMPools } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectionType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionType */
let _cached_decoder_for_ConnectionType: $.ASN1Decoder<ConnectionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionType */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionType */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionType} The decoded data structure.
 */
export function _decode_ConnectionType(el: _Element) {
    if (!_cached_decoder_for_ConnectionType) {
        _cached_decoder_for_ConnectionType = $._decode_inextensible_choice<ConnectionType>(
            {
                'CONTEXT 0': [
                    'explicitPToP',
                    $._decode_implicit<ExplicitPtoP>(
                        () => _decode_ExplicitPtoP
                    ),
                ],
                'CONTEXT 1': [
                    'ptoTpPool',
                    $._decode_implicit<PtoTPPool>(() => _decode_PtoTPPool),
                ],
                'CONTEXT 2': [
                    'explicitPtoMP',
                    $._decode_implicit<ExplicitPtoMP>(
                        () => _decode_ExplicitPtoMP
                    ),
                ],
                'CONTEXT 3': [
                    'ptoMPools',
                    $._decode_implicit<PtoMPools>(() => _decode_PtoMPools),
                ],
            }
        );
    }
    return _cached_decoder_for_ConnectionType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionType */
let _cached_encoder_for_ConnectionType: $.ASN1Encoder<ConnectionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionType */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionType */
/**
 * @summary Encodes a(n) ConnectionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionType, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionType(
    value: ConnectionType,
    elGetter: $.ASN1Encoder<ConnectionType>
) {
    if (!_cached_encoder_for_ConnectionType) {
        _cached_encoder_for_ConnectionType = $._encode_choice<ConnectionType>(
            {
                explicitPToP: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitPtoP,
                    $.BER
                ),
                ptoTpPool: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PtoTPPool,
                    $.BER
                ),
                explicitPtoMP: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ExplicitPtoMP,
                    $.BER
                ),
                ptoMPools: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_PtoMPools,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectionType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionType */

/* eslint-enable */
