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
    BodyPartTokens,
    _decode_BodyPartTokens,
    _encode_BodyPartTokens,
} from '../IPMSSecurityExtensions/BodyPartTokens.ta.mjs';
import { id_hat_body_part_encryption_token } from '../IPMSObjectIdentifiers/id-hat-body-part-encryption-token.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary body_part_encryption_token
 * @description
 *
 * Information object `body_part_encryption_token`. The
 * Originator-body-part-encryption-token MS-submission-extension is used where the
 * submitted message contains a Body Part Encryption Token (see B.6.1) that has been
 * encrypted such that it cannot subsequently be decrypted by the originator. This
 * extension enables the originator to supply a Body Part Encryption Token constructed as
 * if the originator were a recipient of the message, to be stored in the… See ITU-T
 * X.420 (1999), §19.5.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body-part-encryption-token X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  BodyPartTokens,
 *   NUMERATION             single-valued,
 *   ID                     id-hat-body-part-encryption-token
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BodyPartTokens>}
 * @implements {X413ATTRIBUTE<BodyPartTokens>}
 */
export const body_part_encryption_token: X413ATTRIBUTE<BodyPartTokens> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_BodyPartTokens,
    },
    encoderFor: {
        '&Type': _encode_BodyPartTokens,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_body_part_encryption_token /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
