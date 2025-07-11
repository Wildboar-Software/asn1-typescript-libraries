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
import { ecdh } from "../SEC1-v1-9/ecdh.va.mjs";
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.mjs";
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/**
 * @summary ECPKAlgorithms_Union3_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPKAlgorithms-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECDomainParameters>}
 * @implements {ALGORITHM<ECDomainParameters>}
 */
export
const ECPKAlgorithms_Union3_Intersection0_Element: ALGORITHM<ECDomainParameters> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECDomainParameters,
    },
    encoderFor: {
        "&Type": _encode_ECDomainParameters,
    },
    "&id": ecdh /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
