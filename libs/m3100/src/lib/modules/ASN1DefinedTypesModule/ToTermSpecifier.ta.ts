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
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta';
export {
    ExplicitTP,
    _decode_ExplicitTP,
    _encode_ExplicitTP,
} from '../ASN1DefinedTypesModule/ExplicitTP.ta';
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

/* START_OF_SYMBOL_DEFINITION ToTermSpecifier */
/**
 * @summary ToTermSpecifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ToTermSpecifier  ::=  CHOICE {
 *   toTpOrGTP  [0]  ExplicitTP,
 *   toPool     [1]  ObjectInstance
 * }
 * ```
 */
export type ToTermSpecifier =
    | { toTpOrGTP: ExplicitTP } /* CHOICE_ALT_ROOT */
    | { toPool: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ToTermSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ToTermSpecifier */
let _cached_decoder_for_ToTermSpecifier: $.ASN1Decoder<ToTermSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ToTermSpecifier */

/* START_OF_SYMBOL_DEFINITION _decode_ToTermSpecifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ToTermSpecifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ToTermSpecifier} The decoded data structure.
 */
export function _decode_ToTermSpecifier(el: _Element) {
    if (!_cached_decoder_for_ToTermSpecifier) {
        _cached_decoder_for_ToTermSpecifier = $._decode_inextensible_choice<ToTermSpecifier>(
            {
                'CONTEXT 0': [
                    'toTpOrGTP',
                    $._decode_explicit<ExplicitTP>(() => _decode_ExplicitTP),
                ],
                'CONTEXT 1': [
                    'toPool',
                    $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ToTermSpecifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ToTermSpecifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ToTermSpecifier */
let _cached_encoder_for_ToTermSpecifier: $.ASN1Encoder<ToTermSpecifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ToTermSpecifier */

/* START_OF_SYMBOL_DEFINITION _encode_ToTermSpecifier */
/**
 * @summary Encodes a(n) ToTermSpecifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ToTermSpecifier, encoded as an ASN.1 Element.
 */
export function _encode_ToTermSpecifier(
    value: ToTermSpecifier,
    elGetter: $.ASN1Encoder<ToTermSpecifier>
) {
    if (!_cached_encoder_for_ToTermSpecifier) {
        _cached_encoder_for_ToTermSpecifier = $._encode_choice<ToTermSpecifier>(
            {
                toTpOrGTP: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ExplicitTP,
                    $.BER
                ),
                toPool: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ObjectInstance,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ToTermSpecifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ToTermSpecifier */

/* eslint-enable */
