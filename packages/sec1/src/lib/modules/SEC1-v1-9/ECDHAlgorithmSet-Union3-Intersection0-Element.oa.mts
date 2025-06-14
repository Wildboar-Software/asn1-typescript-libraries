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
} from "asn1-ts";
import { dhSinglePass_cofactorDH_specifiedKDF } from "../SEC1-v1-9/dhSinglePass-cofactorDH-specifiedKDF.va.mjs";
import { KeyDerivationFunction, _decode_KeyDerivationFunction, _encode_KeyDerivationFunction } from "../SEC1-v1-9/KeyDerivationFunction.ta.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/* START_OF_SYMBOL_DEFINITION ECDHAlgorithmSet_Union3_Intersection0_Element */
/**
 * @summary ECDHAlgorithmSet_Union3_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDHAlgorithmSet-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<KeyDerivationFunction>}
 * @implements {ALGORITHM<KeyDerivationFunction>}
 */
export
const ECDHAlgorithmSet_Union3_Intersection0_Element: ALGORITHM<KeyDerivationFunction> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_KeyDerivationFunction,
    },
    encoderFor: {
        "&Type": _encode_KeyDerivationFunction,
    },
    "&id": dhSinglePass_cofactorDH_specifiedKDF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ECDHAlgorithmSet_Union3_Intersection0_Element */

/* eslint-enable */
