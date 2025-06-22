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
    ManualHandlingInstructions,
    _decode_ManualHandlingInstructions,
    _encode_ManualHandlingInstructions,
} from '../IPMSHeadingExtensions/ManualHandlingInstructions.ta.mjs';
import { id_hex_manual_handling_instructions } from '../IPMSObjectIdentifiers/id-hex-manual-handling-instructions.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary manual_handling_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manual-handling-instructions IPMS-EXTENSION ::= {
 *   VALUE          ManualHandlingInstructions,
 *   IDENTIFIED BY  id-hex-manual-handling-instructions
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<ManualHandlingInstructions>}
 * @implements {IPMS_EXTENSION<ManualHandlingInstructions>}
 */
export const manual_handling_instructions: IPMS_EXTENSION<ManualHandlingInstructions> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_ManualHandlingInstructions,
    },
    encoderFor: {
        '&Type': _encode_ManualHandlingInstructions,
    },
    '&id': id_hex_manual_handling_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
