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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    ForwardedContentToken,
    _decode_ForwardedContentToken,
    _encode_ForwardedContentToken,
} from '../IPMSSecurityExtensions/ForwardedContentToken.ta.mjs';
import { id_hat_forwarded_content_token } from '../IPMSObjectIdentifiers/id-hat-forwarded-content-token.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary forwarded_content_token
 * @description
 *
 * Information object `forwarded_content_token`. The Originator forwarded content token
 * MS-submission-extension is used where the submitted message contains a Forwarded
 * Content Token (see B.6.2) that has been encrypted such that it cannot subsequently be
 * decrypted by the originator. This extension enables the originator to supply a
 * Forwarded Content Token constructed as if the originator were a recipient of the
 * message, to be stored in the submitted-message… See ITU-T X.420 (1999), §19.5.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * forwarded-content-token X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ForwardedContentToken,
 *   NUMERATION             single-valued,
 *   ID                     id-hat-forwarded-content-token
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ForwardedContentToken>}
 * @implements {X413ATTRIBUTE<ForwardedContentToken>}
 */
export const forwarded_content_token: X413ATTRIBUTE<ForwardedContentToken> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ForwardedContentToken,
    },
    encoderFor: {
        '&Type': _encode_ForwardedContentToken,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_forwarded_content_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
