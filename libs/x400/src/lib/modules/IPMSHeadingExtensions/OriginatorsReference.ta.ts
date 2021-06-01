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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_originators_reference_length } from '../IPMSUpperBounds/ub-originators-reference-length.va';
export { ub_originators_reference_length } from '../IPMSUpperBounds/ub-originators-reference-length.va';

/* START_OF_SYMBOL_DEFINITION OriginatorsReference */
/**
 * @summary OriginatorsReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorsReference  ::=  UniversalOrBMPString{ub-originators-reference-length}
 * ```
 */
export type OriginatorsReference = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorsReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorsReference */
let _cached_decoder_for_OriginatorsReference: $.ASN1Decoder<OriginatorsReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorsReference */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorsReference */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorsReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorsReference} The decoded data structure.
 */
export function _decode_OriginatorsReference(el: _Element) {
    if (!_cached_decoder_for_OriginatorsReference) {
        _cached_decoder_for_OriginatorsReference = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_OriginatorsReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorsReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorsReference */
let _cached_encoder_for_OriginatorsReference: $.ASN1Encoder<OriginatorsReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorsReference */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorsReference */
/**
 * @summary Encodes a(n) OriginatorsReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorsReference, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorsReference(
    value: OriginatorsReference,
    elGetter: $.ASN1Encoder<OriginatorsReference>
) {
    if (!_cached_encoder_for_OriginatorsReference) {
        _cached_encoder_for_OriginatorsReference = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_OriginatorsReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorsReference */

/* eslint-enable */
