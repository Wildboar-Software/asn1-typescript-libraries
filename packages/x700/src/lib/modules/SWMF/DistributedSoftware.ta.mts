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

/* START_OF_SYMBOL_DEFINITION DistributedSoftware */
/**
 * @summary DistributedSoftware
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistributedSoftware  ::=  CHOICE {
 *   distibutedSoftwareId        GraphicString,
 *   distributedSoftwarePointer  ObjectInstance
 * }
 * ```
 */
export type DistributedSoftware =
    | { distibutedSoftwareId: GraphicString } /* CHOICE_ALT_ROOT */
    | { distributedSoftwarePointer: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION DistributedSoftware */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributedSoftware */
let _cached_decoder_for_DistributedSoftware: $.ASN1Decoder<DistributedSoftware> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DistributedSoftware */

/* START_OF_SYMBOL_DEFINITION _decode_DistributedSoftware */
/**
 * @summary Decodes an ASN.1 element into a(n) DistributedSoftware
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistributedSoftware} The decoded data structure.
 */
export function _decode_DistributedSoftware(el: _Element) {
    if (!_cached_decoder_for_DistributedSoftware) {
        _cached_decoder_for_DistributedSoftware = $._decode_inextensible_choice<DistributedSoftware>(
            {
                'UNIVERSAL 25': [
                    'distibutedSoftwareId',
                    $._decodeGraphicString,
                ],
                'CONTEXT 2': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
                'CONTEXT 3': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
                'CONTEXT 4': [
                    'distributedSoftwarePointer',
                    _decode_ObjectInstance,
                ],
            }
        );
    }
    return _cached_decoder_for_DistributedSoftware(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DistributedSoftware */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributedSoftware */
let _cached_encoder_for_DistributedSoftware: $.ASN1Encoder<DistributedSoftware> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DistributedSoftware */

/* START_OF_SYMBOL_DEFINITION _encode_DistributedSoftware */
/**
 * @summary Encodes a(n) DistributedSoftware into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributedSoftware, encoded as an ASN.1 Element.
 */
export function _encode_DistributedSoftware(
    value: DistributedSoftware,
    elGetter: $.ASN1Encoder<DistributedSoftware>
) {
    if (!_cached_encoder_for_DistributedSoftware) {
        _cached_encoder_for_DistributedSoftware = $._encode_choice<DistributedSoftware>(
            {
                distibutedSoftwareId: $._encodeGraphicString,
                distributedSoftwarePointer: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DistributedSoftware(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DistributedSoftware */

/* eslint-enable */
