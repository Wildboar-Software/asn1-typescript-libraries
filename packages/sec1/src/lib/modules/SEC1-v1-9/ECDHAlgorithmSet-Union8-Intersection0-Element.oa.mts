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
} from "@wildboar/asn1";
import { dhSinglePass_stdDH_sha512kdf_scheme } from "../SEC1-v1-9/dhSinglePass-stdDH-sha512kdf-scheme.va.mjs";
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/**
 * @summary ECDHAlgorithmSet_Union8_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDHAlgorithmSet-Union8-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM}
 * @implements {ALGORITHM}
 */
export
const ECDHAlgorithmSet_Union8_Intersection0_Element: ALGORITHM = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": dhSinglePass_stdDH_sha512kdf_scheme /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
