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

/* START_OF_SYMBOL_DEFINITION LaunchPadId */
/**
 * @summary LaunchPadId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LaunchPadId  ::=  ObjectInstance
 * ```
 */
export type LaunchPadId = ObjectInstance; // DefinedType
/* END_OF_SYMBOL_DEFINITION LaunchPadId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LaunchPadId */
let _cached_decoder_for_LaunchPadId: $.ASN1Decoder<LaunchPadId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LaunchPadId */

/* START_OF_SYMBOL_DEFINITION _decode_LaunchPadId */
/**
 * @summary Decodes an ASN.1 element into a(n) LaunchPadId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LaunchPadId} The decoded data structure.
 */
export function _decode_LaunchPadId(el: _Element) {
    if (!_cached_decoder_for_LaunchPadId) {
        _cached_decoder_for_LaunchPadId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_LaunchPadId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LaunchPadId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LaunchPadId */
let _cached_encoder_for_LaunchPadId: $.ASN1Encoder<LaunchPadId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LaunchPadId */

/* START_OF_SYMBOL_DEFINITION _encode_LaunchPadId */
/**
 * @summary Encodes a(n) LaunchPadId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LaunchPadId, encoded as an ASN.1 Element.
 */
export function _encode_LaunchPadId(
    value: LaunchPadId,
    elGetter: $.ASN1Encoder<LaunchPadId>
) {
    if (!_cached_encoder_for_LaunchPadId) {
        _cached_encoder_for_LaunchPadId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_LaunchPadId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LaunchPadId */

/* eslint-enable */
