/* eslint-disable */
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import {
    Counter,
    _decode_Counter,
    _encode_Counter,
} from "../ANSI-X9-42/Counter.ta.mjs";
import { tripleDES } from "../ANSI-X9-42/tripleDES.va.mjs";
/* START_OF_SYMBOL_DEFINITION KeySpecificAlgorithms_Union0_Intersection0_Element */
/**
 * @summary KeySpecificAlgorithms_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeySpecificAlgorithms-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID<Counter>}
 * @implements {ALGORITHM_ID<Counter>}
 */
export const KeySpecificAlgorithms_Union0_Intersection0_Element: ALGORITHM_ID<Counter> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": _decode_Counter,
    },
    encoderFor: {
        "&Type": _encode_Counter,
    },
    "&id": tripleDES /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION KeySpecificAlgorithms_Union0_Intersection0_Element */

/* eslint-enable */
