/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
import {
    ExtendedContentType,
} from "../MTSAbstractService/ExtendedContentType.ta.mjs";
import {
    EXTENDED_BODY_PART_TYPE,
} from "../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs";
import {
    content_body_part_data,
} from './content-body-part-data.oa.mjs';
import {
    content_body_part_parameters,
} from './content-body-part-parameters.oa.mjs';

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

/* eslint-enable */
