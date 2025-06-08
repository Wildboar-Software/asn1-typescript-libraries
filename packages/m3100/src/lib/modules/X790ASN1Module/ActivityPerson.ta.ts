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
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';

/* START_OF_SYMBOL_DEFINITION ActivityPerson */
/**
 * @summary ActivityPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityPerson  ::=  PersonReach
 * ```
 */
export type ActivityPerson = PersonReach; // DefinedType
/* END_OF_SYMBOL_DEFINITION ActivityPerson */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityPerson */
let _cached_decoder_for_ActivityPerson: $.ASN1Decoder<ActivityPerson> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityPerson */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityPerson */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityPerson
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityPerson} The decoded data structure.
 */
export function _decode_ActivityPerson(el: _Element) {
    if (!_cached_decoder_for_ActivityPerson) {
        _cached_decoder_for_ActivityPerson = _decode_PersonReach;
    }
    return _cached_decoder_for_ActivityPerson(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityPerson */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityPerson */
let _cached_encoder_for_ActivityPerson: $.ASN1Encoder<ActivityPerson> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityPerson */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityPerson */
/**
 * @summary Encodes a(n) ActivityPerson into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityPerson, encoded as an ASN.1 Element.
 */
export function _encode_ActivityPerson(
    value: ActivityPerson,
    elGetter: $.ASN1Encoder<ActivityPerson>
) {
    if (!_cached_encoder_for_ActivityPerson) {
        _cached_encoder_for_ActivityPerson = _encode_PersonReach;
    }
    return _cached_encoder_for_ActivityPerson(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityPerson */

/* eslint-enable */
