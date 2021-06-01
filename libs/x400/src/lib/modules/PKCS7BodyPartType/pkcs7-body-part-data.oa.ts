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
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/ContentInfo.ta";
import { id_et_pkcs7 } from '../IPMSObjectIdentifiers/id-et-pkcs7.va';
export { id_et_pkcs7 } from '../IPMSObjectIdentifiers/id-et-pkcs7.va';

/* START_OF_SYMBOL_DEFINITION pkcs7_body_part_data */
/**
 * @summary pkcs7_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs7-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<ContentInfo>}
 * @implements {TYPE_IDENTIFIER<ContentInfo>}
 */
export const pkcs7_body_part_data: TYPE_IDENTIFIER<ContentInfo> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ContentInfo,
    },
    encoderFor: {
        '&Type': _encode_ContentInfo,
    },
    '&id': id_et_pkcs7 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkcs7_body_part_data */

/* eslint-enable */
