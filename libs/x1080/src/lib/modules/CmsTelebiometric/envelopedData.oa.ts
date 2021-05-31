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
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from '../CmsTelebiometric/EnvelopedData.ta';
export {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from '../CmsTelebiometric/EnvelopedData.ta';
import { id_envelopedData } from '../CmsTelebiometric/id-envelopedData.va';
export { id_envelopedData } from '../CmsTelebiometric/id-envelopedData.va';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION envelopedData */
/**
 * @summary envelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * envelopedData CONTENT-TYPE ::= {
 *                 EnvelopedData
 *   IDENTIFIED BY id-envelopedData }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<EnvelopedData>}
 * @implements {CONTENT_TYPE<EnvelopedData>}
 */
export const envelopedData: CONTENT_TYPE<EnvelopedData> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_EnvelopedData,
    },
    encoderFor: {
        '&Type': _encode_EnvelopedData,
    },
    '&id': id_envelopedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION envelopedData */

/* eslint-enable */
