/* eslint-disable */
import {
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
    ForwardedContentToken,
    _decode_ForwardedContentToken,
    _encode_ForwardedContentToken,
} from '../IPMSSecurityExtensions/ForwardedContentToken.ta.mjs';
import { id_mst_originator_forwarded_content_token } from '../IPMSObjectIdentifiers/id-mst-originator-forwarded-content-token.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION originator_forwarded_content_token */
/**
 * @summary originator_forwarded_content_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-forwarded-content-token MS-EXTENSION ::= {
 *   ForwardedContentToken
 *   IDENTIFIED BY  id-mst-originator-forwarded-content-token
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<ForwardedContentToken>}
 * @implements {MS_EXTENSION<ForwardedContentToken>}
 */
export const originator_forwarded_content_token: MS_EXTENSION<ForwardedContentToken> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_ForwardedContentToken,
    },
    encoderFor: {
        '&Type': _encode_ForwardedContentToken,
    },
    '&id': id_mst_originator_forwarded_content_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION originator_forwarded_content_token */

/* eslint-enable */
