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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    IA5TextParameters,
    _decode_IA5TextParameters,
    _encode_IA5TextParameters,
} from '../IPMSInformationObjects/IA5TextParameters.ta.mjs';
export {
    IA5TextParameters,
    _decode_IA5TextParameters,
    _encode_IA5TextParameters,
} from '../IPMSInformationObjects/IA5TextParameters.ta.mjs';
import { id_bat_ia5_text_parameters } from '../IPMSObjectIdentifiers/id-bat-ia5-text-parameters.va.mjs';
export { id_bat_ia5_text_parameters } from '../IPMSObjectIdentifiers/id-bat-ia5-text-parameters.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ia5_text_parameters */
/**
 * @summary ia5_text_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-parameters X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IA5TextParameters,
 *   NUMERATION             multi-valued,
 *   ID                     id-bat-ia5-text-parameters
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IA5TextParameters>}
 * @implements {X413ATTRIBUTE<IA5TextParameters>}
 */
export const ia5_text_parameters: X413ATTRIBUTE<IA5TextParameters> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IA5TextParameters,
    },
    encoderFor: {
        '&Type': _encode_IA5TextParameters,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_bat_ia5_text_parameters /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ia5_text_parameters */

/* eslint-enable */
