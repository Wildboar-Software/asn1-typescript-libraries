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
} from '@wildboar/asn1';
import {
    ForwardedContentToken,
    _decode_ForwardedContentToken,
    _encode_ForwardedContentToken,
} from '../IPMSSecurityExtensions/ForwardedContentToken.ta.mjs';
import { id_mst_originator_forwarded_content_token } from '../IPMSObjectIdentifiers/id-mst-originator-forwarded-content-token.va.mjs';
import { type MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary originator_forwarded_content_token
 * @description
 *
 * Information object `originator_forwarded_content_token`. The Originator forwarded
 * content token MS-submission-extension is used where the submitted message contains a
 * Forwarded Content Token (see B.6.2) that has been encrypted such that it cannot
 * subsequently be decrypted by the originator. This extension enables the originator to
 * supply a Forwarded Content Token constructed as if the originator were a recipient of
 * the message, to be stored in the submitted-message… See ITU-T X.420 (1999), §19.5.3.3.
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

/* eslint-enable */
