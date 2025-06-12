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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION AutoRestoreSource */
/**
 * @summary AutoRestoreSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoRestoreSource  ::=  CHOICE {
 *   localObject   ObjectInstance,
 *   remoteSystem  GraphicString -- off-line from remote system
 * }
 * ```
 */
export type AutoRestoreSource =
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { remoteSystem: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AutoRestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoRestoreSource */
let _cached_decoder_for_AutoRestoreSource: $.ASN1Decoder<AutoRestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoRestoreSource */

/* START_OF_SYMBOL_DEFINITION _decode_AutoRestoreSource */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoRestoreSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoRestoreSource} The decoded data structure.
 */
export function _decode_AutoRestoreSource(el: _Element) {
    if (!_cached_decoder_for_AutoRestoreSource) {
        _cached_decoder_for_AutoRestoreSource = $._decode_inextensible_choice<AutoRestoreSource>(
            {
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                'UNIVERSAL 25': ['remoteSystem', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_AutoRestoreSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoRestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoRestoreSource */
let _cached_encoder_for_AutoRestoreSource: $.ASN1Encoder<AutoRestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoRestoreSource */

/* START_OF_SYMBOL_DEFINITION _encode_AutoRestoreSource */
/**
 * @summary Encodes a(n) AutoRestoreSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoRestoreSource, encoded as an ASN.1 Element.
 */
export function _encode_AutoRestoreSource(
    value: AutoRestoreSource,
    elGetter: $.ASN1Encoder<AutoRestoreSource>
) {
    if (!_cached_encoder_for_AutoRestoreSource) {
        _cached_encoder_for_AutoRestoreSource = $._encode_choice<AutoRestoreSource>(
            {
                localObject: _encode_ObjectInstance,
                remoteSystem: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AutoRestoreSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoRestoreSource */

/* eslint-enable */
