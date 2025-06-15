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
    PrecedencePolicyIdentifier,
    _decode_PrecedencePolicyIdentifier,
    _encode_PrecedencePolicyIdentifier,
} from '../IPMSHeadingExtensions/PrecedencePolicyIdentifier.ta.mjs';
import { id_hex_precedence_policy_id } from '../IPMSObjectIdentifiers/id-hex-precedence-policy-id.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary precedence_policy_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedence-policy-identifier IPMS-EXTENSION ::= {
 *   VALUE          PrecedencePolicyIdentifier,
 *   IDENTIFIED BY  id-hex-precedence-policy-id
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<PrecedencePolicyIdentifier>}
 * @implements {IPMS_EXTENSION<PrecedencePolicyIdentifier>}
 */
export const precedence_policy_identifier: IPMS_EXTENSION<PrecedencePolicyIdentifier> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_PrecedencePolicyIdentifier,
    },
    encoderFor: {
        '&Type': _encode_PrecedencePolicyIdentifier,
    },
    '&id': id_hex_precedence_policy_id /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
