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

/* START_OF_SYMBOL_DEFINITION Patch */
/**
 * @summary Patch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Patch  ::=  CHOICE {
 *   patchId       GraphicString, -- system specific identifier
 *   patchPointer  ObjectInstance
 * }
 * ```
 */
export type Patch =
    | { patchId: GraphicString } /* CHOICE_ALT_ROOT */
    | { patchPointer: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Patch */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Patch */
let _cached_decoder_for_Patch: $.ASN1Decoder<Patch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Patch */

/* START_OF_SYMBOL_DEFINITION _decode_Patch */
/**
 * @summary Decodes an ASN.1 element into a(n) Patch
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Patch} The decoded data structure.
 */
export function _decode_Patch(el: _Element) {
    if (!_cached_decoder_for_Patch) {
        _cached_decoder_for_Patch = $._decode_inextensible_choice<Patch>({
            'UNIVERSAL 25': ['patchId', $._decodeGraphicString],
            'CONTEXT 2': ['patchPointer', _decode_ObjectInstance],
            'CONTEXT 3': ['patchPointer', _decode_ObjectInstance],
            'CONTEXT 4': ['patchPointer', _decode_ObjectInstance],
        });
    }
    return _cached_decoder_for_Patch(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Patch */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Patch */
let _cached_encoder_for_Patch: $.ASN1Encoder<Patch> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Patch */

/* START_OF_SYMBOL_DEFINITION _encode_Patch */
/**
 * @summary Encodes a(n) Patch into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Patch, encoded as an ASN.1 Element.
 */
export function _encode_Patch(value: Patch, elGetter: $.ASN1Encoder<Patch>) {
    if (!_cached_encoder_for_Patch) {
        _cached_encoder_for_Patch = $._encode_choice<Patch>(
            {
                patchId: $._encodeGraphicString,
                patchPointer: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Patch(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Patch */

/* eslint-enable */
