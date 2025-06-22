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
    OriginatorToken,
    _decode_OriginatorToken,
    _encode_OriginatorToken,
} from '../MSAbstractService/OriginatorToken.ta.mjs';
import { id_ext_originator_token } from '../MSObjectIdentifiers/id-ext-originator-token.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary originator_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-token MS-EXTENSION ::= {
 *   OriginatorToken
 *   IDENTIFIED BY  id-ext-originator-token
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<OriginatorToken>}
 * @implements {MS_EXTENSION<OriginatorToken>}
 */
export const originator_token: MS_EXTENSION<OriginatorToken> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_OriginatorToken,
    },
    encoderFor: {
        '&Type': _encode_OriginatorToken,
    },
    '&id': id_ext_originator_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
