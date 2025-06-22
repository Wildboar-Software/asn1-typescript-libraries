/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { id_SHA512 } from "../ANSI-X9-62/id-SHA512.va.mjs";
/**
 * @summary ANSIX9HashFunctions_Union9_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ANSIX9HashFunctions-Union9-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM<NULL>}
 * @implements {ALGORITHM<NULL>}
 */
export const ANSIX9HashFunctions_Union9_Intersection0_Element: ALGORITHM<NULL> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": $._decodeNull,
    },
    encoderFor: {
        "&Type": $._encodeNull,
    },
    "&id": id_SHA512 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
