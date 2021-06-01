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
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta';
export {
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta';

/* START_OF_SYMBOL_DEFINITION DeliverableClass */
/**
 * @summary DeliverableClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliverableClass  ::=
 *   MessageClass
 *     (WITH COMPONENTS {
 *        ...,
 *        priority         ABSENT,
 *        -- The 'objects' component shall always be defaulted.
 *        -- objects ABSENT,
 *        -- A component with a DEFAULT clause cannot be ABSENT
 *        applies-only-to  ABSENT
 *      })
 * ```
 */
export type DeliverableClass = MessageClass; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliverableClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverableClass */
let _cached_decoder_for_DeliverableClass: $.ASN1Decoder<DeliverableClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliverableClass */

/* START_OF_SYMBOL_DEFINITION _decode_DeliverableClass */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliverableClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliverableClass} The decoded data structure.
 */
export function _decode_DeliverableClass(el: _Element) {
    if (!_cached_decoder_for_DeliverableClass) {
        _cached_decoder_for_DeliverableClass = _decode_MessageClass;
    }
    return _cached_decoder_for_DeliverableClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliverableClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverableClass */
let _cached_encoder_for_DeliverableClass: $.ASN1Encoder<DeliverableClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliverableClass */

/* START_OF_SYMBOL_DEFINITION _encode_DeliverableClass */
/**
 * @summary Encodes a(n) DeliverableClass into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliverableClass, encoded as an ASN.1 Element.
 */
export function _encode_DeliverableClass(
    value: DeliverableClass,
    elGetter: $.ASN1Encoder<DeliverableClass>
) {
    if (!_cached_encoder_for_DeliverableClass) {
        _cached_encoder_for_DeliverableClass = _encode_MessageClass;
    }
    return _cached_encoder_for_DeliverableClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliverableClass */

/* eslint-enable */
