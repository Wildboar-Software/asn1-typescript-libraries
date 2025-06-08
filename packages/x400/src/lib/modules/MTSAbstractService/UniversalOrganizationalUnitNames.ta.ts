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
    UniversalOrganizationalUnitName,
    _decode_UniversalOrganizationalUnitName,
    _encode_UniversalOrganizationalUnitName,
} from '../MTSAbstractService/UniversalOrganizationalUnitName.ta';
export {
    UniversalOrganizationalUnitName,
    _decode_UniversalOrganizationalUnitName,
    _encode_UniversalOrganizationalUnitName,
} from '../MTSAbstractService/UniversalOrganizationalUnitName.ta';

/* START_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitNames */
/**
 * @summary UniversalOrganizationalUnitNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalOrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF UniversalOrganizationalUnitName
 * ```
 */
export type UniversalOrganizationalUnitNames = UniversalOrganizationalUnitName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitNames */
let _cached_decoder_for_UniversalOrganizationalUnitNames: $.ASN1Decoder<UniversalOrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitNames */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalOrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalOrganizationalUnitNames} The decoded data structure.
 */
export function _decode_UniversalOrganizationalUnitNames(el: _Element) {
    if (!_cached_decoder_for_UniversalOrganizationalUnitNames) {
        _cached_decoder_for_UniversalOrganizationalUnitNames = $._decodeSequenceOf<UniversalOrganizationalUnitName>(
            () => _decode_UniversalOrganizationalUnitName
        );
    }
    return _cached_decoder_for_UniversalOrganizationalUnitNames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitNames */
let _cached_encoder_for_UniversalOrganizationalUnitNames: $.ASN1Encoder<UniversalOrganizationalUnitNames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalOrganizationalUnitNames */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitNames */
/**
 * @summary Encodes a(n) UniversalOrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalOrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export function _encode_UniversalOrganizationalUnitNames(
    value: UniversalOrganizationalUnitNames,
    elGetter: $.ASN1Encoder<UniversalOrganizationalUnitNames>
) {
    if (!_cached_encoder_for_UniversalOrganizationalUnitNames) {
        _cached_encoder_for_UniversalOrganizationalUnitNames = $._encodeSequenceOf<UniversalOrganizationalUnitName>(
            () => _encode_UniversalOrganizationalUnitName,
            $.BER
        );
    }
    return _cached_encoder_for_UniversalOrganizationalUnitNames(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalOrganizationalUnitNames */

/* eslint-enable */
