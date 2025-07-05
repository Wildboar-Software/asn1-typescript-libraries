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
import { Pentanomial, _decode_Pentanomial, _encode_Pentanomial } from "../SEC1-v1-9/Pentanomial.ta.mjs";
import { ppBasis } from "../SEC1-v1-9/ppBasis.va.mjs";
import { type CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.mjs";
/**
 * @summary BasisTypes_Union2_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasisTypes-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {CHARACTERISTIC_TWO<Pentanomial>}
 * @implements {CHARACTERISTIC_TWO<Pentanomial>}
 */
export
const BasisTypes_Union2_Intersection0_Element: CHARACTERISTIC_TWO<Pentanomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Pentanomial,
    },
    encoderFor: {
        "&Type": _encode_Pentanomial,
    },
    "&id": ppBasis /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
