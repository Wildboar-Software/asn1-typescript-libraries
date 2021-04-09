/* eslint-disable */
import { dhHybrid1 } from "../ANSI-X9-42/dhHybrid1.va";
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca";
import {
    SchemeParameters,
    _decode_SchemeParameters,
    _encode_SchemeParameters,
} from "../ANSI-X9-42/SchemeParameters.ta";
export { dhHybrid1 } from "../ANSI-X9-42/dhHybrid1.va";
export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca";
export {
    SchemeParameters,
    _decode_SchemeParameters,
    _encode_SchemeParameters,
} from "../ANSI-X9-42/SchemeParameters.ta";

/* START_OF_SYMBOL_DEFINITION Schemes_Union3_Intersection0_Element */
/**
 * @summary Schemes_Union3_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Schemes-Union3-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {KEY_AGREEMENT<SchemeParameters>}
 * @implements {KEY_AGREEMENT<SchemeParameters>}
 */
export const Schemes_Union3_Intersection0_Element: KEY_AGREEMENT<SchemeParameters> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": _decode_SchemeParameters,
    },
    encoderFor: {
        "&Type": _encode_SchemeParameters,
    },
    "&id": dhHybrid1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION Schemes_Union3_Intersection0_Element */

/* eslint-enable */
