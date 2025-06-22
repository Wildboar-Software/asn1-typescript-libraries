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
    BodyPartTokens,
    _decode_BodyPartTokens,
    _encode_BodyPartTokens,
} from '../IPMSSecurityExtensions/BodyPartTokens.ta.mjs';
import { id_mst_originator_body_part_encryption_token } from '../IPMSObjectIdentifiers/id-mst-originator-body-part-encryption-token.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/**
 * @summary originator_body_part_encryption_token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originator-body-part-encryption-token MS-EXTENSION ::= {
 *   BodyPartTokens
 *   IDENTIFIED BY  id-mst-originator-body-part-encryption-token
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<BodyPartTokens>}
 * @implements {MS_EXTENSION<BodyPartTokens>}
 */
export const originator_body_part_encryption_token: MS_EXTENSION<BodyPartTokens> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_BodyPartTokens,
    },
    encoderFor: {
        '&Type': _encode_BodyPartTokens,
    },
    '&id': id_mst_originator_body_part_encryption_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
