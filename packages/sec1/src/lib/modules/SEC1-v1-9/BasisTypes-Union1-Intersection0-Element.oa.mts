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
import { Trinomial, _decode_Trinomial, _encode_Trinomial } from "../SEC1-v1-9/Trinomial.ta.mjs";
import { tpBasis } from "../SEC1-v1-9/tpBasis.va.mjs";
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.mjs";
/**
 * @summary BasisTypes_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasisTypes-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {CHARACTERISTIC_TWO<Trinomial>}
 * @implements {CHARACTERISTIC_TWO<Trinomial>}
 */
export
const BasisTypes_Union1_Intersection0_Element: CHARACTERISTIC_TWO<Trinomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Trinomial,
    },
    encoderFor: {
        "&Type": _encode_Trinomial,
    },
    "&id": tpBasis /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
