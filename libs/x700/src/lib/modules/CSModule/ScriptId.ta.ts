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

/* START_OF_SYMBOL_DEFINITION ScriptId */
/**
 * @summary ScriptId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptId  ::=  ObjectInstance
 * ```
 */
export type ScriptId = ObjectInstance; // DefinedType
/* END_OF_SYMBOL_DEFINITION ScriptId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptId */
let _cached_decoder_for_ScriptId: $.ASN1Decoder<ScriptId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptId */

/* START_OF_SYMBOL_DEFINITION _decode_ScriptId */
/**
 * @summary Decodes an ASN.1 element into a(n) ScriptId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptId} The decoded data structure.
 */
export function _decode_ScriptId(el: _Element) {
    if (!_cached_decoder_for_ScriptId) {
        _cached_decoder_for_ScriptId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_ScriptId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScriptId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptId */
let _cached_encoder_for_ScriptId: $.ASN1Encoder<ScriptId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptId */

/* START_OF_SYMBOL_DEFINITION _encode_ScriptId */
/**
 * @summary Encodes a(n) ScriptId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptId, encoded as an ASN.1 Element.
 */
export function _encode_ScriptId(
    value: ScriptId,
    elGetter: $.ASN1Encoder<ScriptId>
) {
    if (!_cached_encoder_for_ScriptId) {
        _cached_encoder_for_ScriptId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_ScriptId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScriptId */

/* eslint-enable */
