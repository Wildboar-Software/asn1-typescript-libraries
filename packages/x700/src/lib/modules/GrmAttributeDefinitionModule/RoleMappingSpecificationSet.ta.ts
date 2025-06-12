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
    RoleMappingSpecification,
    _decode_RoleMappingSpecification,
    _encode_RoleMappingSpecification,
} from '../GrmAttributeDefinitionModule/RoleMappingSpecification.ta.js';
export {
    RoleMappingSpecification,
    _decode_RoleMappingSpecification,
    _encode_RoleMappingSpecification,
} from '../GrmAttributeDefinitionModule/RoleMappingSpecification.ta.js';

/* START_OF_SYMBOL_DEFINITION RoleMappingSpecificationSet */
/**
 * @summary RoleMappingSpecificationSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleMappingSpecificationSet  ::=  SET OF RoleMappingSpecification
 * ```
 */
export type RoleMappingSpecificationSet = RoleMappingSpecification[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RoleMappingSpecificationSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleMappingSpecificationSet */
let _cached_decoder_for_RoleMappingSpecificationSet: $.ASN1Decoder<RoleMappingSpecificationSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleMappingSpecificationSet */

/* START_OF_SYMBOL_DEFINITION _decode_RoleMappingSpecificationSet */
/**
 * @summary Decodes an ASN.1 element into a(n) RoleMappingSpecificationSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleMappingSpecificationSet} The decoded data structure.
 */
export function _decode_RoleMappingSpecificationSet(el: _Element) {
    if (!_cached_decoder_for_RoleMappingSpecificationSet) {
        _cached_decoder_for_RoleMappingSpecificationSet = $._decodeSetOf<RoleMappingSpecification>(
            () => _decode_RoleMappingSpecification
        );
    }
    return _cached_decoder_for_RoleMappingSpecificationSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoleMappingSpecificationSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleMappingSpecificationSet */
let _cached_encoder_for_RoleMappingSpecificationSet: $.ASN1Encoder<RoleMappingSpecificationSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleMappingSpecificationSet */

/* START_OF_SYMBOL_DEFINITION _encode_RoleMappingSpecificationSet */
/**
 * @summary Encodes a(n) RoleMappingSpecificationSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleMappingSpecificationSet, encoded as an ASN.1 Element.
 */
export function _encode_RoleMappingSpecificationSet(
    value: RoleMappingSpecificationSet,
    elGetter: $.ASN1Encoder<RoleMappingSpecificationSet>
) {
    if (!_cached_encoder_for_RoleMappingSpecificationSet) {
        _cached_encoder_for_RoleMappingSpecificationSet = $._encodeSetOf<RoleMappingSpecification>(
            () => _encode_RoleMappingSpecification,
            $.BER
        );
    }
    return _cached_encoder_for_RoleMappingSpecificationSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoleMappingSpecificationSet */

/* eslint-enable */
