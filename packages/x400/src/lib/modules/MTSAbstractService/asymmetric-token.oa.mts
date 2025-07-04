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
    AsymmetricToken,
    _decode_AsymmetricToken,
    _encode_AsymmetricToken,
} from '../MTSAbstractService/AsymmetricToken.ta.mjs';
import { id_tok_asymmetricToken } from '../MTSObjectIdentifiers/id-tok-asymmetricToken.va.mjs';
import { type TOKEN } from '../MTSAbstractService/TOKEN.oca.mjs';
/**
 * @summary asymmetric_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * asymmetric-token TOKEN ::= {
 *   AsymmetricToken
 *   IDENTIFIED BY  id-tok-asymmetricToken
 * }
 * ```
 *
 * @constant
 * @type {TOKEN<AsymmetricToken>}
 * @implements {TOKEN<AsymmetricToken>}
 */
export const asymmetric_token: TOKEN<AsymmetricToken> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_AsymmetricToken,
    },
    encoderFor: {
        '&Type': _encode_AsymmetricToken,
    },
    '&id': id_tok_asymmetricToken /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
