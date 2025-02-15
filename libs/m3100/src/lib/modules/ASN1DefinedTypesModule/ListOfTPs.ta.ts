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

/* START_OF_SYMBOL_DEFINITION ListOfTPs */
/**
 * @summary ListOfTPs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfTPs  ::=  SET OF ObjectInstance
 * ```
 */
export type ListOfTPs = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ListOfTPs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfTPs */
let _cached_decoder_for_ListOfTPs: $.ASN1Decoder<ListOfTPs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfTPs */

/* START_OF_SYMBOL_DEFINITION _decode_ListOfTPs */
/**
 * @summary Decodes an ASN.1 element into a(n) ListOfTPs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfTPs} The decoded data structure.
 */
export function _decode_ListOfTPs(el: _Element) {
    if (!_cached_decoder_for_ListOfTPs) {
        _cached_decoder_for_ListOfTPs = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ListOfTPs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListOfTPs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfTPs */
let _cached_encoder_for_ListOfTPs: $.ASN1Encoder<ListOfTPs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfTPs */

/* START_OF_SYMBOL_DEFINITION _encode_ListOfTPs */
/**
 * @summary Encodes a(n) ListOfTPs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfTPs, encoded as an ASN.1 Element.
 */
export function _encode_ListOfTPs(
    value: ListOfTPs,
    elGetter: $.ASN1Encoder<ListOfTPs>
) {
    if (!_cached_encoder_for_ListOfTPs) {
        _cached_encoder_for_ListOfTPs = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ListOfTPs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListOfTPs */

/* eslint-enable */
