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
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta';
export {
    G3FacsimileParameters,
    _decode_G3FacsimileParameters,
    _encode_G3FacsimileParameters,
} from '../IPMSInformationObjects/G3FacsimileParameters.ta';
import { id_ep_g3_facsimile } from '../IPMSObjectIdentifiers/id-ep-g3-facsimile.va';
export { id_ep_g3_facsimile } from '../IPMSObjectIdentifiers/id-ep-g3-facsimile.va';

/* START_OF_SYMBOL_DEFINITION g3_facsimile_body_part_parameters */
/**
 * @summary g3_facsimile_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * g3-facsimile-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<G3FacsimileParameters>}
 * @implements {TYPE_IDENTIFIER<G3FacsimileParameters>}
 */
export const g3_facsimile_body_part_parameters: TYPE_IDENTIFIER<G3FacsimileParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_G3FacsimileParameters,
    },
    encoderFor: {
        '&Type': _encode_G3FacsimileParameters,
    },
    '&id': id_ep_g3_facsimile /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION g3_facsimile_body_part_parameters */

/* eslint-enable */
