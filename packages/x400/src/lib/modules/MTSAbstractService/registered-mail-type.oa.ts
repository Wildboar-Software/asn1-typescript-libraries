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
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta';
import {
    RegisteredMailType,
    RegisteredMailType_non_registered_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    non_registered_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    RegisteredMailType_registered_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    registered_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    RegisteredMailType_registered_mail_to_addressee_in_person /* IMPORTED_LONG_NAMED_INTEGER */,
    registered_mail_to_addressee_in_person /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RegisteredMailType,
    _encode_RegisteredMailType,
} from '../MTSAbstractService/RegisteredMailType.ta';
export {
    RegisteredMailType,
    RegisteredMailType_non_registered_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    non_registered_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    RegisteredMailType_registered_mail /* IMPORTED_LONG_NAMED_INTEGER */,
    registered_mail /* IMPORTED_SHORT_NAMED_INTEGER */,
    RegisteredMailType_registered_mail_to_addressee_in_person /* IMPORTED_LONG_NAMED_INTEGER */,
    registered_mail_to_addressee_in_person /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RegisteredMailType,
    _encode_RegisteredMailType,
} from '../MTSAbstractService/RegisteredMailType.ta';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';

/* START_OF_SYMBOL_DEFINITION registered_mail_type */
/**
 * @summary registered_mail_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registered-mail-type EXTENSION ::= {
 *   RegisteredMailType
 *   IF ABSENT                non-registered-mail,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:10
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<RegisteredMailType>}
 * @implements {EXTENSION<RegisteredMailType>}
 */
export const registered_mail_type: EXTENSION<RegisteredMailType> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_RegisteredMailType,
    },
    encoderFor: {
        '&Type': _encode_RegisteredMailType,
    },
    '&absent': non_registered_mail /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 10,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION registered_mail_type */

/* eslint-enable */
