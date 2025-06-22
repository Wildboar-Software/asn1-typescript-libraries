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
import { id_et_content } from '../IPMSObjectIdentifiers/id-et-content.va.mjs';
import {
    ExtendedContentType,
} from "../MTSAbstractService/ExtendedContentType.ta.mjs";

/**
 * @summary content_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * content-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<Content>}
 * @implements {TYPE_IDENTIFIER<Content>}
 */
export function content_body_part_data (content_type: ExtendedContentType): TYPE_IDENTIFIER<Content> {
    return {
        class: 'TYPE-IDENTIFIER',
        decoderFor: {
            '&Type': _decode_Content,
        },
        encoderFor: {
            '&Type': _encode_Content,
        },
        '&id': _OID.fromParts(
            content_type,
            id_et_content
        ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
        '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    };
};

/* eslint-enable */
