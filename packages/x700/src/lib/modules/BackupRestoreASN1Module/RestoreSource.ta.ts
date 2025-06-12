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

/* START_OF_SYMBOL_DEFINITION RestoreSource */
/**
 * @summary RestoreSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RestoreSource  ::=  CHOICE {
 *   localObject  ObjectInstance,
 *   inLine       BIT STRING,
 *   offLine      GraphicString -- remote system via some other transfer protocol, e.g. FTAM
 * }
 * ```
 */
export type RestoreSource =
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { inLine: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { offLine: GraphicString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoreSource */
let _cached_decoder_for_RestoreSource: $.ASN1Decoder<RestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RestoreSource */

/* START_OF_SYMBOL_DEFINITION _decode_RestoreSource */
/**
 * @summary Decodes an ASN.1 element into a(n) RestoreSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RestoreSource} The decoded data structure.
 */
export function _decode_RestoreSource(el: _Element) {
    if (!_cached_decoder_for_RestoreSource) {
        _cached_decoder_for_RestoreSource = $._decode_inextensible_choice<RestoreSource>(
            {
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                'UNIVERSAL 3': ['inLine', $._decodeBitString],
                'UNIVERSAL 25': ['offLine', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_RestoreSource(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RestoreSource */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoreSource */
let _cached_encoder_for_RestoreSource: $.ASN1Encoder<RestoreSource> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RestoreSource */

/* START_OF_SYMBOL_DEFINITION _encode_RestoreSource */
/**
 * @summary Encodes a(n) RestoreSource into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoreSource, encoded as an ASN.1 Element.
 */
export function _encode_RestoreSource(
    value: RestoreSource,
    elGetter: $.ASN1Encoder<RestoreSource>
) {
    if (!_cached_encoder_for_RestoreSource) {
        _cached_encoder_for_RestoreSource = $._encode_choice<RestoreSource>(
            {
                localObject: _encode_ObjectInstance,
                inLine: $._encodeBitString,
                offLine: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RestoreSource(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RestoreSource */

/* eslint-enable */
