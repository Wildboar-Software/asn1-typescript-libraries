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

/* START_OF_SYMBOL_DEFINITION _enum_for_PbactErr */
export enum _enum_for_PbactErr {
    noSuchService = 0,
    invalidOperationForService = 1,
    insufficientAccessRigth = 2,
    noSuchObject = 3,
    noSuchAttribute = 4,
    noSuchAttributeValue = 5,
    objectAlreadyExists = 6,
    attributeAlreadyExists = 7,
    attributeValueAlreadyExists = 8,
    noInformation = 9,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PbactErr */

/* START_OF_SYMBOL_DEFINITION PbactErr */
/**
 * @summary PbactErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PbactErr  ::=  ENUMERATED {
 *   noSuchService,
 *   invalidOperationForService,
 *   insufficientAccessRigth,
 *   noSuchObject,
 *   noSuchAttribute,
 *   noSuchAttributeValue,
 *   objectAlreadyExists,
 *   attributeAlreadyExists,
 *   attributeValueAlreadyExists,
 *   noInformation,
 *   ... }
 * ```@enum {number}
 */
export type PbactErr = _enum_for_PbactErr | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PbactErr */

/* START_OF_SYMBOL_DEFINITION PbactErr_noSuchService */
/**
 * @summary PbactErr_noSuchService
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchService: PbactErr = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_noSuchService */

/* START_OF_SYMBOL_DEFINITION noSuchService */
/**
 * @summary noSuchService
 * @constant
 * @type {number}
 */
export const noSuchService: PbactErr = PbactErr_noSuchService; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchService */

/* START_OF_SYMBOL_DEFINITION PbactErr_invalidOperationForService */
/**
 * @summary PbactErr_invalidOperationForService
 * @constant
 * @type {number}
 */
export const PbactErr_invalidOperationForService: PbactErr = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_invalidOperationForService */

/* START_OF_SYMBOL_DEFINITION invalidOperationForService */
/**
 * @summary invalidOperationForService
 * @constant
 * @type {number}
 */
export const invalidOperationForService: PbactErr = PbactErr_invalidOperationForService; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidOperationForService */

/* START_OF_SYMBOL_DEFINITION PbactErr_insufficientAccessRigth */
/**
 * @summary PbactErr_insufficientAccessRigth
 * @constant
 * @type {number}
 */
export const PbactErr_insufficientAccessRigth: PbactErr = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_insufficientAccessRigth */

/* START_OF_SYMBOL_DEFINITION insufficientAccessRigth */
/**
 * @summary insufficientAccessRigth
 * @constant
 * @type {number}
 */
export const insufficientAccessRigth: PbactErr = PbactErr_insufficientAccessRigth; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION insufficientAccessRigth */

/* START_OF_SYMBOL_DEFINITION PbactErr_noSuchObject */
/**
 * @summary PbactErr_noSuchObject
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchObject: PbactErr = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_noSuchObject */

/* START_OF_SYMBOL_DEFINITION noSuchObject */
/**
 * @summary noSuchObject
 * @constant
 * @type {number}
 */
export const noSuchObject: PbactErr = PbactErr_noSuchObject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchObject */

/* START_OF_SYMBOL_DEFINITION PbactErr_noSuchAttribute */
/**
 * @summary PbactErr_noSuchAttribute
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchAttribute: PbactErr = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION noSuchAttribute */
/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: PbactErr = PbactErr_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION PbactErr_noSuchAttributeValue */
/**
 * @summary PbactErr_noSuchAttributeValue
 * @constant
 * @type {number}
 */
export const PbactErr_noSuchAttributeValue: PbactErr = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_noSuchAttributeValue */

/* START_OF_SYMBOL_DEFINITION noSuchAttributeValue */
/**
 * @summary noSuchAttributeValue
 * @constant
 * @type {number}
 */
export const noSuchAttributeValue: PbactErr = PbactErr_noSuchAttributeValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchAttributeValue */

/* START_OF_SYMBOL_DEFINITION PbactErr_objectAlreadyExists */
/**
 * @summary PbactErr_objectAlreadyExists
 * @constant
 * @type {number}
 */
export const PbactErr_objectAlreadyExists: PbactErr = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_objectAlreadyExists */

/* START_OF_SYMBOL_DEFINITION objectAlreadyExists */
/**
 * @summary objectAlreadyExists
 * @constant
 * @type {number}
 */
export const objectAlreadyExists: PbactErr = PbactErr_objectAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION objectAlreadyExists */

/* START_OF_SYMBOL_DEFINITION PbactErr_attributeAlreadyExists */
/**
 * @summary PbactErr_attributeAlreadyExists
 * @constant
 * @type {number}
 */
export const PbactErr_attributeAlreadyExists: PbactErr = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_attributeAlreadyExists */

/* START_OF_SYMBOL_DEFINITION attributeAlreadyExists */
/**
 * @summary attributeAlreadyExists
 * @constant
 * @type {number}
 */
export const attributeAlreadyExists: PbactErr = PbactErr_attributeAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION attributeAlreadyExists */

/* START_OF_SYMBOL_DEFINITION PbactErr_attributeValueAlreadyExists */
/**
 * @summary PbactErr_attributeValueAlreadyExists
 * @constant
 * @type {number}
 */
export const PbactErr_attributeValueAlreadyExists: PbactErr = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_attributeValueAlreadyExists */

/* START_OF_SYMBOL_DEFINITION attributeValueAlreadyExists */
/**
 * @summary attributeValueAlreadyExists
 * @constant
 * @type {number}
 */
export const attributeValueAlreadyExists: PbactErr = PbactErr_attributeValueAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION attributeValueAlreadyExists */

/* START_OF_SYMBOL_DEFINITION PbactErr_noInformation */
/**
 * @summary PbactErr_noInformation
 * @constant
 * @type {number}
 */
export const PbactErr_noInformation: PbactErr = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PbactErr_noInformation */

/* START_OF_SYMBOL_DEFINITION noInformation */
/**
 * @summary noInformation
 * @constant
 * @type {number}
 */
export const noInformation: PbactErr = PbactErr_noInformation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PbactErr */
let _cached_decoder_for_PbactErr: $.ASN1Decoder<PbactErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PbactErr */

/* START_OF_SYMBOL_DEFINITION _decode_PbactErr */
/**
 * @summary Decodes an ASN.1 element into a(n) PbactErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PbactErr} The decoded data structure.
 */
export function _decode_PbactErr(el: _Element) {
    if (!_cached_decoder_for_PbactErr) {
        _cached_decoder_for_PbactErr = $._decodeEnumerated;
    }
    return _cached_decoder_for_PbactErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PbactErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PbactErr */
let _cached_encoder_for_PbactErr: $.ASN1Encoder<PbactErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PbactErr */

/* START_OF_SYMBOL_DEFINITION _encode_PbactErr */
/**
 * @summary Encodes a(n) PbactErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PbactErr, encoded as an ASN.1 Element.
 */
export function _encode_PbactErr(
    value: PbactErr,
    elGetter: $.ASN1Encoder<PbactErr>
) {
    if (!_cached_encoder_for_PbactErr) {
        _cached_encoder_for_PbactErr = $._encodeEnumerated;
    }
    return _cached_encoder_for_PbactErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PbactErr */

/* eslint-enable */
