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
    UniversalDomainDefinedAttributes,
    _decode_UniversalDomainDefinedAttributes,
    _encode_UniversalDomainDefinedAttributes,
} from '../MTSAbstractService/UniversalDomainDefinedAttributes.ta';
export {
    UniversalDomainDefinedAttributes,
    _decode_UniversalDomainDefinedAttributes,
    _encode_UniversalDomainDefinedAttributes,
} from '../MTSAbstractService/UniversalDomainDefinedAttributes.ta';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';

/* START_OF_SYMBOL_DEFINITION universal_domain_defined_attributes */
/**
 * @summary universal_domain_defined_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-domain-defined-attributes EXTENSION-ATTRIBUTE ::= {
 *   UniversalDomainDefinedAttributes
 *   IDENTIFIED BY  28
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes>}
 */
export const universal_domain_defined_attributes: EXTENSION_ATTRIBUTE<UniversalDomainDefinedAttributes> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalDomainDefinedAttributes,
    },
    encoderFor: {
        '&Type': _encode_UniversalDomainDefinedAttributes,
    },
    '&id': 28 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_domain_defined_attributes */

/* eslint-enable */
