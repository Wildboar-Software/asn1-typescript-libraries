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

/* START_OF_SYMBOL_DEFINITION AssociatedObjectNotAvailable */
/**
 * @summary AssociatedObjectNotAvailable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjectNotAvailable  ::=  SET OF ObjectInstance
 * ```
 */
export type AssociatedObjectNotAvailable = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AssociatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjectNotAvailable */
let _cached_decoder_for_AssociatedObjectNotAvailable: $.ASN1Decoder<AssociatedObjectNotAvailable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION _decode_AssociatedObjectNotAvailable */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjectNotAvailable
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjectNotAvailable} The decoded data structure.
 */
export function _decode_AssociatedObjectNotAvailable(el: _Element) {
    if (!_cached_decoder_for_AssociatedObjectNotAvailable) {
        _cached_decoder_for_AssociatedObjectNotAvailable = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_AssociatedObjectNotAvailable(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjectNotAvailable */
let _cached_encoder_for_AssociatedObjectNotAvailable: $.ASN1Encoder<AssociatedObjectNotAvailable> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjectNotAvailable */

/* START_OF_SYMBOL_DEFINITION _encode_AssociatedObjectNotAvailable */
/**
 * @summary Encodes a(n) AssociatedObjectNotAvailable into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjectNotAvailable, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjectNotAvailable(
    value: AssociatedObjectNotAvailable,
    elGetter: $.ASN1Encoder<AssociatedObjectNotAvailable>
) {
    if (!_cached_encoder_for_AssociatedObjectNotAvailable) {
        _cached_encoder_for_AssociatedObjectNotAvailable = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_AssociatedObjectNotAvailable(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociatedObjectNotAvailable */

/* eslint-enable */
