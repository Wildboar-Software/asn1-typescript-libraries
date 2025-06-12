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
    ChangeOfAddressAdvice,
    _decode_ChangeOfAddressAdvice,
    _encode_ChangeOfAddressAdvice,
} from '../IPMSInformationObjects/ChangeOfAddressAdvice.ta.mjs';
export {
    ChangeOfAddressAdvice,
    _decode_ChangeOfAddressAdvice,
    _encode_ChangeOfAddressAdvice,
} from '../IPMSInformationObjects/ChangeOfAddressAdvice.ta.mjs';
import { id_on_change_of_address_advice } from '../IPMSObjectIdentifiers/id-on-change-of-address-advice.va.mjs';
export { id_on_change_of_address_advice } from '../IPMSObjectIdentifiers/id-on-change-of-address-advice.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION change_of_address_advice */
/**
 * @summary change_of_address_advice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-of-address-advice IPMS-EXTENSION ::= {
 *   VALUE          ChangeOfAddressAdvice,
 *   IDENTIFIED BY  id-on-change-of-address-advice
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ChangeOfAddressAdvice>}
 * @implements {IPMS_EXTENSION<ChangeOfAddressAdvice>}
 */
export const change_of_address_advice: IPMS_EXTENSION<ChangeOfAddressAdvice> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ChangeOfAddressAdvice,
    },
    encoderFor: {
        '&Type': _encode_ChangeOfAddressAdvice,
    },
    '&id': id_on_change_of_address_advice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION change_of_address_advice */

/* eslint-enable */
