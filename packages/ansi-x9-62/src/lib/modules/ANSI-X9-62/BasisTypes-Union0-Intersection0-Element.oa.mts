/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca.mjs";
import { gnBasis } from "../ANSI-X9-62/gnBasis.va.mjs";
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
export const BasisTypes_Union0_Intersection0_Element: CHARACTERISTIC_TWO<NULL> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": gnBasis /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
