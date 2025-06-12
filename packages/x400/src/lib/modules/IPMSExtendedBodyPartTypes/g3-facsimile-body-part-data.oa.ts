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
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.js';
export {
    G3FacsimileData,
    _decode_G3FacsimileData,
    _encode_G3FacsimileData,
} from '../IPMSInformationObjects/G3FacsimileData.ta.js';
import { id_et_g3_facsimile } from '../IPMSObjectIdentifiers/id-et-g3-facsimile.va.js';
export { id_et_g3_facsimile } from '../IPMSObjectIdentifiers/id-et-g3-facsimile.va.js';

/* START_OF_SYMBOL_DEFINITION g3_facsimile_body_part_data */
/**
 * @summary g3_facsimile_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<G3FacsimileData>}
 * @implements {TYPE_IDENTIFIER<G3FacsimileData>}
 */
export const g3_facsimile_body_part_data: TYPE_IDENTIFIER<G3FacsimileData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_G3FacsimileData,
    },
    encoderFor: {
        '&Type': _encode_G3FacsimileData,
    },
    '&id': id_et_g3_facsimile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION g3_facsimile_body_part_data */

/* eslint-enable */
