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
import { ecies_specifiedParameters } from "../SEC1-v1-9/ecies-specifiedParameters.va.mjs";
import { ECIESParameters, _decode_ECIESParameters, _encode_ECIESParameters } from "../SEC1-v1-9/ECIESParameters.ta.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/**
 * @summary ECIESAlgorithmSet_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECIESAlgorithmSet-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECIESParameters>}
 * @implements {ALGORITHM<ECIESParameters>}
 */
export
const ECIESAlgorithmSet_Union1_Intersection0_Element: ALGORITHM<ECIESParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECIESParameters,
    },
    encoderFor: {
        "&Type": _encode_ECIESParameters,
    },
    "&id": ecies_specifiedParameters /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
