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
import { ecwkt_specifiedParameters } from "../SEC1-v1-9/ecwkt-specifiedParameters.va.mjs";
import { ECWKTParameters, _decode_ECWKTParameters, _encode_ECWKTParameters } from "../SEC1-v1-9/ECWKTParameters.ta.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/**
 * @summary ECWKTAlgorithmSet_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECWKTAlgorithmSet-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECWKTParameters>}
 * @implements {ALGORITHM<ECWKTParameters>}
 */
export
const ECWKTAlgorithmSet_Union1_Intersection0_Element: ALGORITHM<ECWKTParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECWKTParameters,
    },
    encoderFor: {
        "&Type": _encode_ECWKTParameters,
    },
    "&id": ecwkt_specifiedParameters /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
