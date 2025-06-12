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
    MTS_APDU,
    _decode_MTS_APDU,
    _encode_MTS_APDU,
} from '../MTSTransferProtocol/MTS-APDU.ta.js';
export {
    MTS_APDU,
    _decode_MTS_APDU,
    _encode_MTS_APDU,
} from '../MTSTransferProtocol/MTS-APDU.ta.js';
import { id_as_mtse } from '../MHSProtocolObjectIdentifiers/id-as-mtse.va.js';
export { id_as_mtse } from '../MHSProtocolObjectIdentifiers/id-as-mtse.va.js';

/* START_OF_SYMBOL_DEFINITION message_transfer_abstract_syntax */
/**
 * @summary message_transfer_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-transfer-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MTS-APDU IDENTIFIED BY  id-as-mtse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MTS_APDU>}
 * @implements {ABSTRACT_SYNTAX<MTS_APDU>}
 */
export const message_transfer_abstract_syntax: ABSTRACT_SYNTAX<MTS_APDU> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MTS_APDU,
    },
    encoderFor: {
        '&Type': _encode_MTS_APDU,
    },
    '&id': id_as_mtse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION message_transfer_abstract_syntax */

/* eslint-enable */
