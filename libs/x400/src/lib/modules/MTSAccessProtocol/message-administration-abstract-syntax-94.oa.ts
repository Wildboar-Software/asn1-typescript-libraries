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
    MessageAdministrationPDUs,
    _decode_MessageAdministrationPDUs,
    _encode_MessageAdministrationPDUs,
} from '../MTSAccessProtocol/MessageAdministrationPDUs.ta';
export {
    MessageAdministrationPDUs,
    _decode_MessageAdministrationPDUs,
    _encode_MessageAdministrationPDUs,
} from '../MTSAccessProtocol/MessageAdministrationPDUs.ta';
import { id_as_mase_94 } from '../MHSProtocolObjectIdentifiers/id-as-mase-94.va';
export { id_as_mase_94 } from '../MHSProtocolObjectIdentifiers/id-as-mase-94.va';

/* START_OF_SYMBOL_DEFINITION message_administration_abstract_syntax_94 */
/**
 * @summary message_administration_abstract_syntax_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-administration-abstract-syntax-94 ABSTRACT-SYNTAX ::= {
 *   MessageAdministrationPDUs
 *   IDENTIFIED BY  id-as-mase-94
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageAdministrationPDUs>}
 * @implements {ABSTRACT_SYNTAX<MessageAdministrationPDUs>}
 */
export const message_administration_abstract_syntax_94: ABSTRACT_SYNTAX<MessageAdministrationPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageAdministrationPDUs,
    },
    encoderFor: {
        '&Type': _encode_MessageAdministrationPDUs,
    },
    '&id': id_as_mase_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION message_administration_abstract_syntax_94 */

/* eslint-enable */
