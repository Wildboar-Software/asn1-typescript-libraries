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
    PremisesAddress,
    _decode_PremisesAddress,
    _encode_PremisesAddress,
} from '../X790ASN1Module/PremisesAddress.ta';
export {
    PremisesAddress,
    _decode_PremisesAddress,
    _encode_PremisesAddress,
} from '../X790ASN1Module/PremisesAddress.ta';

/* START_OF_SYMBOL_DEFINITION PersonLocation */
/**
 * @summary PersonLocation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonLocation  ::=  PremisesAddress
 * ```
 */
export type PersonLocation = PremisesAddress; // DefinedType
/* END_OF_SYMBOL_DEFINITION PersonLocation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonLocation */
let _cached_decoder_for_PersonLocation: $.ASN1Decoder<PersonLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonLocation */

/* START_OF_SYMBOL_DEFINITION _decode_PersonLocation */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonLocation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonLocation} The decoded data structure.
 */
export function _decode_PersonLocation(el: _Element) {
    if (!_cached_decoder_for_PersonLocation) {
        _cached_decoder_for_PersonLocation = _decode_PremisesAddress;
    }
    return _cached_decoder_for_PersonLocation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonLocation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonLocation */
let _cached_encoder_for_PersonLocation: $.ASN1Encoder<PersonLocation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonLocation */

/* START_OF_SYMBOL_DEFINITION _encode_PersonLocation */
/**
 * @summary Encodes a(n) PersonLocation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonLocation, encoded as an ASN.1 Element.
 */
export function _encode_PersonLocation(
    value: PersonLocation,
    elGetter: $.ASN1Encoder<PersonLocation>
) {
    if (!_cached_encoder_for_PersonLocation) {
        _cached_encoder_for_PersonLocation = _encode_PremisesAddress;
    }
    return _cached_encoder_for_PersonLocation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonLocation */

/* eslint-enable */
