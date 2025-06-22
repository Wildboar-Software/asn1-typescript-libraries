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
    ForwardedContentParameters,
    _decode_ForwardedContentParameters,
    _encode_ForwardedContentParameters,
} from '../IPMSForwardedContentBodyPartType/ForwardedContentParameters.ta.mjs';
import { id_ep_content } from '../IPMSObjectIdentifiers/id-ep-content.va.mjs';
import {
    ExtendedContentType,
} from "../MTSAbstractService/ExtendedContentType.ta.mjs";

/**
 * @summary content_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * content-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<ForwardedContentParameters>}
 * @implements {TYPE_IDENTIFIER<ForwardedContentParameters>}
 */
export function content_body_part_parameters (content_type: ExtendedContentType): TYPE_IDENTIFIER<ForwardedContentParameters> {
    return {
        class: 'TYPE-IDENTIFIER',
        decoderFor: {
            '&Type': _decode_ForwardedContentParameters,
        },
        encoderFor: {
            '&Type': _encode_ForwardedContentParameters,
        },
        '&id': _OID.fromParts(
            content_type,
            id_ep_content
        ) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
        '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    };
};

/* eslint-enable */
