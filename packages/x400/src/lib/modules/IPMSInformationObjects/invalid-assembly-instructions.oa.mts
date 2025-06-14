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
    BodyPartReferences,
    _decode_BodyPartReferences,
    _encode_BodyPartReferences,
} from '../IPMSInformationObjects/BodyPartReferences.ta.mjs';
import { id_mst_invalid_assembly_instructions } from '../IPMSObjectIdentifiers/id-mst-invalid-assembly-instructions.va.mjs';
import { MS_EXTENSION } from '../MSAbstractService/MS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION invalid_assembly_instructions */
/**
 * @summary invalid_assembly_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalid-assembly-instructions MS-EXTENSION ::= {
 *   BodyPartReferences
 *   IDENTIFIED BY  id-mst-invalid-assembly-instructions
 * }
 * ```
 *
 * @constant
 * @type {MS_EXTENSION<BodyPartReferences>}
 * @implements {MS_EXTENSION<BodyPartReferences>}
 */
export const invalid_assembly_instructions: MS_EXTENSION<BodyPartReferences> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_BodyPartReferences,
    },
    encoderFor: {
        '&Type': _encode_BodyPartReferences,
    },
    '&id': id_mst_invalid_assembly_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION invalid_assembly_instructions */

/* eslint-enable */
