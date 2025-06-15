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
    DistributionCodes,
    _decode_DistributionCodes,
    _encode_DistributionCodes,
} from '../IPMSHeadingExtensions/DistributionCodes.ta.mjs';
import { id_hex_distribution_codes } from '../IPMSObjectIdentifiers/id-hex-distribution-codes.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary distribution_codes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distribution-codes IPMS-EXTENSION ::= {
 *   VALUE          DistributionCodes,
 *   IDENTIFIED BY  id-hex-distribution-codes
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<DistributionCodes>}
 * @implements {IPMS_EXTENSION<DistributionCodes>}
 */
export const distribution_codes: IPMS_EXTENSION<DistributionCodes> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_DistributionCodes,
    },
    encoderFor: {
        '&Type': _encode_DistributionCodes,
    },
    '&id': id_hex_distribution_codes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
