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

/* START_OF_SYMBOL_DEFINITION _enum_for_ContactFunction */
export enum _enum_for_ContactFunction {
    other = 0,
    customerMaintenanceManager = 1,
    providerMaintenanceManager = 2,
    customerAccountManager = 3,
    providerAccountManager = 4,
    fieldServiceManager = 5,
    repairman = 6,
    tester = 7,
    screener = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION ContactFunction */
/**
 * @summary ContactFunction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactFunction  ::=  ENUMERATED {
 *   other(0), customerMaintenanceManager(1), providerMaintenanceManager(2),
 *   customerAccountManager(3), providerAccountManager(4), fieldServiceManager(5),
 *   repairman(6), tester(7), screener(8), ...
 *   }
 * ```@enum {number}
 */
export type ContactFunction = _enum_for_ContactFunction | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ContactFunction */

/* START_OF_SYMBOL_DEFINITION ContactFunction_other */
/**
 * @summary ContactFunction_other
 * @constant
 * @type {number}
 */
export const ContactFunction_other: ContactFunction = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary other
 * @constant
 * @type {number}
 */
export const other: ContactFunction = ContactFunction_other; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION ContactFunction_customerMaintenanceManager */
/**
 * @summary ContactFunction_customerMaintenanceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_customerMaintenanceManager: ContactFunction = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_customerMaintenanceManager */

/* START_OF_SYMBOL_DEFINITION customerMaintenanceManager */
/**
 * @summary customerMaintenanceManager
 * @constant
 * @type {number}
 */
export const customerMaintenanceManager: ContactFunction = ContactFunction_customerMaintenanceManager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION customerMaintenanceManager */

/* START_OF_SYMBOL_DEFINITION ContactFunction_providerMaintenanceManager */
/**
 * @summary ContactFunction_providerMaintenanceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_providerMaintenanceManager: ContactFunction = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_providerMaintenanceManager */

/* START_OF_SYMBOL_DEFINITION providerMaintenanceManager */
/**
 * @summary providerMaintenanceManager
 * @constant
 * @type {number}
 */
export const providerMaintenanceManager: ContactFunction = ContactFunction_providerMaintenanceManager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerMaintenanceManager */

/* START_OF_SYMBOL_DEFINITION ContactFunction_customerAccountManager */
/**
 * @summary ContactFunction_customerAccountManager
 * @constant
 * @type {number}
 */
export const ContactFunction_customerAccountManager: ContactFunction = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_customerAccountManager */

/* START_OF_SYMBOL_DEFINITION customerAccountManager */
/**
 * @summary customerAccountManager
 * @constant
 * @type {number}
 */
export const customerAccountManager: ContactFunction = ContactFunction_customerAccountManager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION customerAccountManager */

/* START_OF_SYMBOL_DEFINITION ContactFunction_providerAccountManager */
/**
 * @summary ContactFunction_providerAccountManager
 * @constant
 * @type {number}
 */
export const ContactFunction_providerAccountManager: ContactFunction = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_providerAccountManager */

/* START_OF_SYMBOL_DEFINITION providerAccountManager */
/**
 * @summary providerAccountManager
 * @constant
 * @type {number}
 */
export const providerAccountManager: ContactFunction = ContactFunction_providerAccountManager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION providerAccountManager */

/* START_OF_SYMBOL_DEFINITION ContactFunction_fieldServiceManager */
/**
 * @summary ContactFunction_fieldServiceManager
 * @constant
 * @type {number}
 */
export const ContactFunction_fieldServiceManager: ContactFunction = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_fieldServiceManager */

/* START_OF_SYMBOL_DEFINITION fieldServiceManager */
/**
 * @summary fieldServiceManager
 * @constant
 * @type {number}
 */
export const fieldServiceManager: ContactFunction = ContactFunction_fieldServiceManager; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fieldServiceManager */

/* START_OF_SYMBOL_DEFINITION ContactFunction_repairman */
/**
 * @summary ContactFunction_repairman
 * @constant
 * @type {number}
 */
export const ContactFunction_repairman: ContactFunction = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_repairman */

/* START_OF_SYMBOL_DEFINITION repairman */
/**
 * @summary repairman
 * @constant
 * @type {number}
 */
export const repairman: ContactFunction = ContactFunction_repairman; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION repairman */

/* START_OF_SYMBOL_DEFINITION ContactFunction_tester */
/**
 * @summary ContactFunction_tester
 * @constant
 * @type {number}
 */
export const ContactFunction_tester: ContactFunction = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_tester */

/* START_OF_SYMBOL_DEFINITION tester */
/**
 * @summary tester
 * @constant
 * @type {number}
 */
export const tester: ContactFunction = ContactFunction_tester; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION tester */

/* START_OF_SYMBOL_DEFINITION ContactFunction_screener */
/**
 * @summary ContactFunction_screener
 * @constant
 * @type {number}
 */
export const ContactFunction_screener: ContactFunction = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ContactFunction_screener */

/* START_OF_SYMBOL_DEFINITION screener */
/**
 * @summary screener
 * @constant
 * @type {number}
 */
export const screener: ContactFunction = ContactFunction_screener; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION screener */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */
let _cached_decoder_for_ContactFunction: $.ASN1Decoder<ContactFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _decode_ContactFunction */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactFunction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactFunction} The decoded data structure.
 */
export function _decode_ContactFunction(el: _Element) {
    if (!_cached_decoder_for_ContactFunction) {
        _cached_decoder_for_ContactFunction = $._decodeEnumerated;
    }
    return _cached_decoder_for_ContactFunction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */
let _cached_encoder_for_ContactFunction: $.ASN1Encoder<ContactFunction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactFunction */

/* START_OF_SYMBOL_DEFINITION _encode_ContactFunction */
/**
 * @summary Encodes a(n) ContactFunction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactFunction, encoded as an ASN.1 Element.
 */
export function _encode_ContactFunction(
    value: ContactFunction,
    elGetter: $.ASN1Encoder<ContactFunction>
) {
    if (!_cached_encoder_for_ContactFunction) {
        _cached_encoder_for_ContactFunction = $._encodeEnumerated;
    }
    return _cached_encoder_for_ContactFunction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactFunction */

/* eslint-enable */
