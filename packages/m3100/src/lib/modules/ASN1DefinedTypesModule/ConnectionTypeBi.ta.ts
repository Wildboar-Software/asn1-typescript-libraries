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

/* START_OF_SYMBOL_DEFINITION ConnectionTypeBi */
/**
 * @summary ConnectionTypeBi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionTypeBi  ::=  CHOICE {
 *   explicitPToP  [0]  ExplicitPtoP,
 *   ptoTpPool     [1]  PtoTPPool
 * }
 * ```
 */
export type ConnectionTypeBi =
    | { explicitPToP: ExplicitPtoP } /* CHOICE_ALT_ROOT */
    | { ptoTpPool: PtoTPPool } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ConnectionTypeBi */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionTypeBi */
let _cached_decoder_for_ConnectionTypeBi: $.ASN1Decoder<ConnectionTypeBi> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionTypeBi */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionTypeBi */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionTypeBi
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionTypeBi} The decoded data structure.
 */
export function _decode_ConnectionTypeBi(el: _Element) {
    if (!_cached_decoder_for_ConnectionTypeBi) {
        _cached_decoder_for_ConnectionTypeBi = $._decode_inextensible_choice<ConnectionTypeBi>(
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
            }
        );
    }
    return _cached_decoder_for_ConnectionTypeBi(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionTypeBi */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionTypeBi */
let _cached_encoder_for_ConnectionTypeBi: $.ASN1Encoder<ConnectionTypeBi> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionTypeBi */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionTypeBi */
/**
 * @summary Encodes a(n) ConnectionTypeBi into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionTypeBi, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionTypeBi(
    value: ConnectionTypeBi,
    elGetter: $.ASN1Encoder<ConnectionTypeBi>
) {
    if (!_cached_encoder_for_ConnectionTypeBi) {
        _cached_encoder_for_ConnectionTypeBi = $._encode_choice<ConnectionTypeBi>(
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
            },
            $.BER
        );
    }
    return _cached_encoder_for_ConnectionTypeBi(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionTypeBi */

/* eslint-enable */
