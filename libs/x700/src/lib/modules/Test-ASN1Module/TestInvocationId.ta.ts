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
    InvocationId,
    _decode_InvocationId,
    _encode_InvocationId,
} from '../Test-ASN1Module/InvocationId.ta';
export {
    InvocationId,
    _decode_InvocationId,
    _encode_InvocationId,
} from '../Test-ASN1Module/InvocationId.ta';

/* START_OF_SYMBOL_DEFINITION TestInvocationId */
/**
 * @summary TestInvocationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestInvocationId  ::=  CHOICE {
 *   tOName        [0]  ObjectInstance,
 *   invocationId  [1]  InvocationId
 * }
 * ```
 */
export type TestInvocationId =
    | { tOName: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { invocationId: InvocationId } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TestInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestInvocationId */
let _cached_decoder_for_TestInvocationId: $.ASN1Decoder<TestInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestInvocationId */

/* START_OF_SYMBOL_DEFINITION _decode_TestInvocationId */
/**
 * @summary Decodes an ASN.1 element into a(n) TestInvocationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestInvocationId} The decoded data structure.
 */
export function _decode_TestInvocationId(el: _Element) {
    if (!_cached_decoder_for_TestInvocationId) {
        _cached_decoder_for_TestInvocationId = $._decode_inextensible_choice<TestInvocationId>(
            {
                'CONTEXT 0': [
                    'tOName',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
                'CONTEXT 1': [
                    'invocationId',
                    $._decode_implicit<InvocationId>(
                        () => _decode_InvocationId
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestInvocationId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestInvocationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestInvocationId */
let _cached_encoder_for_TestInvocationId: $.ASN1Encoder<TestInvocationId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestInvocationId */

/* START_OF_SYMBOL_DEFINITION _encode_TestInvocationId */
/**
 * @summary Encodes a(n) TestInvocationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestInvocationId, encoded as an ASN.1 Element.
 */
export function _encode_TestInvocationId(
    value: TestInvocationId,
    elGetter: $.ASN1Encoder<TestInvocationId>
) {
    if (!_cached_encoder_for_TestInvocationId) {
        _cached_encoder_for_TestInvocationId = $._encode_choice<TestInvocationId>(
            {
                tOName: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
                invocationId: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_InvocationId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestInvocationId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestInvocationId */

/* eslint-enable */
