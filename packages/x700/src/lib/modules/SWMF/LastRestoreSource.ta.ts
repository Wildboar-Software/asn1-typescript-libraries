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
import {
    AE_title,
    _decode_AE_title,
    _encode_AE_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.js';

/* START_OF_SYMBOL_DEFINITION LastRestoreSource */
/**
 * @summary LastRestoreSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastRestoreSource  ::=  CHOICE {
 *   notRestored     NULL,
 *   localObject     ObjectInstance,
 *   managingSystem  AE-title,
 *   remoteSystem    GraphicString
 * }
 * ```
 */
export type LastRestoreSource =
    | { notRestored: NULL } /* CHOICE_ALT_ROOT */
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { managingSystem: AE_title } /* CHOICE_ALT_ROOT */
    | { remoteSystem: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION LastRestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LastRestoreSource */
let _cached_decoder_for_LastRestoreSource: $.ASN1Decoder<LastRestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LastRestoreSource */

/* START_OF_SYMBOL_DEFINITION _decode_LastRestoreSource */
/**
 * @summary Decodes an ASN.1 element into a(n) LastRestoreSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastRestoreSource} The decoded data structure.
 */
export function _decode_LastRestoreSource(el: _Element) {
    if (!_cached_decoder_for_LastRestoreSource) {
        _cached_decoder_for_LastRestoreSource = $._decode_inextensible_choice<LastRestoreSource>(
            {
                'UNIVERSAL 5': ['notRestored', $._decodeNull],
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                '*': ['managingSystem', _decode_AE_title],
                'UNIVERSAL 25': ['remoteSystem', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_LastRestoreSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LastRestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LastRestoreSource */
let _cached_encoder_for_LastRestoreSource: $.ASN1Encoder<LastRestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LastRestoreSource */

/* START_OF_SYMBOL_DEFINITION _encode_LastRestoreSource */
/**
 * @summary Encodes a(n) LastRestoreSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastRestoreSource, encoded as an ASN.1 Element.
 */
export function _encode_LastRestoreSource(
    value: LastRestoreSource,
    elGetter: $.ASN1Encoder<LastRestoreSource>
) {
    if (!_cached_encoder_for_LastRestoreSource) {
        _cached_encoder_for_LastRestoreSource = $._encode_choice<LastRestoreSource>(
            {
                notRestored: $._encodeNull,
                localObject: _encode_ObjectInstance,
                managingSystem: _encode_AE_title,
                remoteSystem: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LastRestoreSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LastRestoreSource */

/* eslint-enable */
