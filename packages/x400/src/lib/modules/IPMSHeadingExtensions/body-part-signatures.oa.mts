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
    BodyPartSignatures,
    _decode_BodyPartSignatures,
    _encode_BodyPartSignatures,
} from '../IPMSHeadingExtensions/BodyPartSignatures.ta.mjs';
import { id_hex_body_part_signatures } from '../IPMSObjectIdentifiers/id-hex-body-part-signatures.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary body_part_signatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body-part-signatures IPMS-EXTENSION ::= {
 *   VALUE          BodyPartSignatures,
 *   IDENTIFIED BY  id-hex-body-part-signatures
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<BodyPartSignatures>}
 * @implements {IPMS_EXTENSION<BodyPartSignatures>}
 */
export const body_part_signatures: IPMS_EXTENSION<BodyPartSignatures> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_BodyPartSignatures,
    },
    encoderFor: {
        '&Type': _encode_BodyPartSignatures,
    },
    '&id': id_hex_body_part_signatures /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
