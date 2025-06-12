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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PointerOrNull */
/**
 * @summary PointerOrNull
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointerOrNull  ::=  CHOICE {pointer  ObjectInstance,
 *                           null     NULL
 * }
 * ```
 */
export type PointerOrNull =
    | { pointer: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PointerOrNull */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PointerOrNull */
let _cached_decoder_for_PointerOrNull: $.ASN1Decoder<PointerOrNull> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PointerOrNull */

/* START_OF_SYMBOL_DEFINITION _decode_PointerOrNull */
/**
 * @summary Decodes an ASN.1 element into a(n) PointerOrNull
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointerOrNull} The decoded data structure.
 */
export function _decode_PointerOrNull(el: _Element) {
    if (!_cached_decoder_for_PointerOrNull) {
        _cached_decoder_for_PointerOrNull = $._decode_inextensible_choice<PointerOrNull>(
            {
                'CONTEXT 2': ['pointer', _decode_ObjectInstance],
                'CONTEXT 3': ['pointer', _decode_ObjectInstance],
                'CONTEXT 4': ['pointer', _decode_ObjectInstance],
                'UNIVERSAL 5': ['null_', $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_PointerOrNull(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PointerOrNull */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PointerOrNull */
let _cached_encoder_for_PointerOrNull: $.ASN1Encoder<PointerOrNull> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PointerOrNull */

/* START_OF_SYMBOL_DEFINITION _encode_PointerOrNull */
/**
 * @summary Encodes a(n) PointerOrNull into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointerOrNull, encoded as an ASN.1 Element.
 */
export function _encode_PointerOrNull(
    value: PointerOrNull,
    elGetter: $.ASN1Encoder<PointerOrNull>
) {
    if (!_cached_encoder_for_PointerOrNull) {
        _cached_encoder_for_PointerOrNull = $._encode_choice<PointerOrNull>(
            {
                pointer: _encode_ObjectInstance,
                null_: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PointerOrNull(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PointerOrNull */

/* eslint-enable */
