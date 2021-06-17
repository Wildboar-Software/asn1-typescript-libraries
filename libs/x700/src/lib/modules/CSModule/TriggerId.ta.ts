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

/* START_OF_SYMBOL_DEFINITION TriggerId */
/**
 * @summary TriggerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerId  ::=  ObjectInstance
 * ```
 */
export type TriggerId = ObjectInstance; // DefinedType
/* END_OF_SYMBOL_DEFINITION TriggerId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerId */
let _cached_decoder_for_TriggerId: $.ASN1Decoder<TriggerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerId */

/* START_OF_SYMBOL_DEFINITION _decode_TriggerId */
/**
 * @summary Decodes an ASN.1 element into a(n) TriggerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerId} The decoded data structure.
 */
export function _decode_TriggerId(el: _Element) {
    if (!_cached_decoder_for_TriggerId) {
        _cached_decoder_for_TriggerId = _decode_ObjectInstance;
    }
    return _cached_decoder_for_TriggerId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TriggerId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerId */
let _cached_encoder_for_TriggerId: $.ASN1Encoder<TriggerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerId */

/* START_OF_SYMBOL_DEFINITION _encode_TriggerId */
/**
 * @summary Encodes a(n) TriggerId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerId, encoded as an ASN.1 Element.
 */
export function _encode_TriggerId(
    value: TriggerId,
    elGetter: $.ASN1Encoder<TriggerId>
) {
    if (!_cached_encoder_for_TriggerId) {
        _cached_encoder_for_TriggerId = _encode_ObjectInstance;
    }
    return _cached_encoder_for_TriggerId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TriggerId */

/* eslint-enable */
