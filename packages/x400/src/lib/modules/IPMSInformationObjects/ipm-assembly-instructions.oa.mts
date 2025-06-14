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
    IPMAssemblyInstructions,
    _decode_IPMAssemblyInstructions,
    _encode_IPMAssemblyInstructions,
} from '../IPMSInformationObjects/IPMAssemblyInstructions.ta.mjs';
import { id_mst_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-assembly-instructions.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ipm_assembly_instructions */
/**
 * @summary ipm_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-assembly-instructions MS-EXTENSION ::= {
 *   IPMAssemblyInstructions
 *   IDENTIFIED BY  id-mst-assembly-instructions
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<IPMAssemblyInstructions>}
 * @implements {MS_EXTENSION<IPMAssemblyInstructions>}
 */
export const ipm_assembly_instructions: MS_EXTENSION<IPMAssemblyInstructions> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_IPMAssemblyInstructions,
    },
    encoderFor: {
        '&Type': _encode_IPMAssemblyInstructions,
    },
    '&id': id_mst_assembly_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ipm_assembly_instructions */

/* eslint-enable */
