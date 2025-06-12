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
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.js';
export {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.js';
import { id_et_content } from '../IPMSObjectIdentifiers/id-et-content.va.js';
export { id_et_content } from '../IPMSObjectIdentifiers/id-et-content.va.js';
import {
    ExtendedContentType,
} from "../MTSAbstractService/ExtendedContentType.ta.js";
import {
    EXTENDED_BODY_PART_TYPE,
} from "../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.js";
import {
    content_body_part_data,
} from './content-body-part-data.oa.js';
import {
    content_body_part_parameters,
} from './content-body-part-parameters.oa.js';

/* START_OF_SYMBOL_DEFINITION content_body_part */
/**
 * @summary content_body_part
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * content-body-part{ExtendedContentType:content-type} EXTENDED-BODY-PART-TYPE ::=
 *   {
 *   PARAMETERS
 *     {ForwardedContentParameters
 *      IDENTIFIED BY  {id-ep-content  content-type}},
 *   DATA        {Content
 *                IDENTIFIED BY  {id-et-content  content-type}}
 * }
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<Content>}
 * @implements {TYPE_IDENTIFIER<Content>}
 */
export function content_body_part (content_type: ExtendedContentType): EXTENDED_BODY_PART_TYPE {
    return {
        class: 'EXTENDED-BODY-PART-TYPE',
        decoderFor: {},
        encoderFor: {},
        '&data': content_body_part_data(content_type),
        '&parameters': content_body_part_parameters(content_type),
    };
};
/* END_OF_SYMBOL_DEFINITION content_body_part */

/* eslint-enable */
