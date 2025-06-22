/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { gnBasis } from "../SEC1-v1-9/gnBasis.va.mjs";
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.mjs";
/**
 * @summary BasisTypes_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasisTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {CHARACTERISTIC_TWO<NULL>}
 * @implements {CHARACTERISTIC_TWO<NULL>}
 */
export
const BasisTypes_Union0_Intersection0_Element: CHARACTERISTIC_TWO<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": gnBasis /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
