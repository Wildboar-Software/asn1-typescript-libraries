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

/* START_OF_SYMBOL_DEFINITION CreateSpecification_createModifier */
/**
 * @summary CreateSpecification_createModifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateSpecification-createModifier ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CreateSpecification_createModifier = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION CreateSpecification_createModifier */

/* START_OF_SYMBOL_DEFINITION CreateSpecification_createModifier_withReferenceObject */
/**
 * @summary CreateSpecification_createModifier_withReferenceObject
 * @constant
 */
export const CreateSpecification_createModifier_withReferenceObject: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CreateSpecification_createModifier_withReferenceObject */

/* START_OF_SYMBOL_DEFINITION withReferenceObject */
/**
 * @summary withReferenceObject
 * @constant
 */
export const withReferenceObject: number = CreateSpecification_createModifier_withReferenceObject; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION withReferenceObject */

/* START_OF_SYMBOL_DEFINITION CreateSpecification_createModifier_withAutomaticInstanceNaming */
/**
 * @summary CreateSpecification_createModifier_withAutomaticInstanceNaming
 * @constant
 */
export const CreateSpecification_createModifier_withAutomaticInstanceNaming: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION CreateSpecification_createModifier_withAutomaticInstanceNaming */

/* START_OF_SYMBOL_DEFINITION withAutomaticInstanceNaming */
/**
 * @summary withAutomaticInstanceNaming
 * @constant
 */
export const withAutomaticInstanceNaming: number = CreateSpecification_createModifier_withAutomaticInstanceNaming; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION withAutomaticInstanceNaming */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateSpecification_createModifier */
let _cached_decoder_for_CreateSpecification_createModifier: $.ASN1Decoder<CreateSpecification_createModifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateSpecification_createModifier */

/* START_OF_SYMBOL_DEFINITION _decode_CreateSpecification_createModifier */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateSpecification_createModifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateSpecification_createModifier} The decoded data structure.
 */
export function _decode_CreateSpecification_createModifier(el: _Element) {
    if (!_cached_decoder_for_CreateSpecification_createModifier) {
        _cached_decoder_for_CreateSpecification_createModifier =
            $._decodeBitString;
    }
    return _cached_decoder_for_CreateSpecification_createModifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateSpecification_createModifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateSpecification_createModifier */
let _cached_encoder_for_CreateSpecification_createModifier: $.ASN1Encoder<CreateSpecification_createModifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateSpecification_createModifier */

/* START_OF_SYMBOL_DEFINITION _encode_CreateSpecification_createModifier */
/**
 * @summary Encodes a(n) CreateSpecification_createModifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateSpecification_createModifier, encoded as an ASN.1 Element.
 */
export function _encode_CreateSpecification_createModifier(
    value: CreateSpecification_createModifier,
    elGetter: $.ASN1Encoder<CreateSpecification_createModifier>
) {
    if (!_cached_encoder_for_CreateSpecification_createModifier) {
        _cached_encoder_for_CreateSpecification_createModifier =
            $._encodeBitString;
    }
    return _cached_encoder_for_CreateSpecification_createModifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateSpecification_createModifier */

/* eslint-enable */
