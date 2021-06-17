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
    LogicalProblem,
    _decode_LogicalProblem,
    _encode_LogicalProblem,
} from '../ASN1DefinedTypesModule/LogicalProblem.ta';
export {
    LogicalProblem,
    _decode_LogicalProblem,
    _encode_LogicalProblem,
} from '../ASN1DefinedTypesModule/LogicalProblem.ta';
import {
    ResourceProblem,
    _decode_ResourceProblem,
    _encode_ResourceProblem,
} from '../ASN1DefinedTypesModule/ResourceProblem.ta';
export {
    ResourceProblem,
    _decode_ResourceProblem,
    _encode_ResourceProblem,
} from '../ASN1DefinedTypesModule/ResourceProblem.ta';

/* START_OF_SYMBOL_DEFINITION Failed */
/**
 * @summary Failed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Failed  ::=  CHOICE {
 *     logicalProblem      LogicalProblem,
 *     resourceProblem     ResourceProblem
 * }
 * ```
 */
export type Failed =
    | { logicalProblem: LogicalProblem } /* CHOICE_ALT_ROOT */
    | { resourceProblem: ResourceProblem } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Failed */
let _cached_decoder_for_Failed: $.ASN1Decoder<Failed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Failed */

/* START_OF_SYMBOL_DEFINITION _decode_Failed */
/**
 * @summary Decodes an ASN.1 element into a(n) Failed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Failed} The decoded data structure.
 */
export function _decode_Failed(el: _Element) {
    if (!_cached_decoder_for_Failed) {
        _cached_decoder_for_Failed = $._decode_inextensible_choice<Failed>({
            'UNIVERSAL 16': ['logicalProblem', _decode_LogicalProblem],
            'UNIVERSAL 5': ['resourceProblem', _decode_ResourceProblem],
            'UNIVERSAL 2': ['resourceProblem', _decode_ResourceProblem],
        });
    }
    return _cached_decoder_for_Failed(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Failed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Failed */
let _cached_encoder_for_Failed: $.ASN1Encoder<Failed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Failed */

/* START_OF_SYMBOL_DEFINITION _encode_Failed */
/**
 * @summary Encodes a(n) Failed into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Failed, encoded as an ASN.1 Element.
 */
export function _encode_Failed(value: Failed, elGetter: $.ASN1Encoder<Failed>) {
    if (!_cached_encoder_for_Failed) {
        _cached_encoder_for_Failed = $._encode_choice<Failed>(
            {
                logicalProblem: _encode_LogicalProblem,
                resourceProblem: _encode_ResourceProblem,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Failed(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Failed */

/* eslint-enable */
