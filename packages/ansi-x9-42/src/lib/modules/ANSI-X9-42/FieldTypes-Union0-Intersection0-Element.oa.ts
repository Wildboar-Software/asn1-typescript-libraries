/* eslint-disable */
import {
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta.js";
import { FIELD_ID } from "../ANSI-X9-42/FIELD-ID.oca.js";
import { gfPrime } from "../ANSI-X9-42/gfPrime.va.js";
export {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta.js";
export { FIELD_ID } from "../ANSI-X9-42/FIELD-ID.oca.js";
export { gfPrime } from "../ANSI-X9-42/gfPrime.va.js";

/* START_OF_SYMBOL_DEFINITION FieldTypes_Union0_Intersection0_Element */
/**
 * @summary FieldTypes_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {FIELD_ID<DomainParameters>}
 * @implements {FIELD_ID<DomainParameters>}
 */
export const FieldTypes_Union0_Intersection0_Element: FIELD_ID = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DomainParameters,
    },
    encoderFor: {
        "&Type": _encode_DomainParameters,
    },
    "&id": gfPrime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION FieldTypes_Union0_Intersection0_Element */

/* eslint-enable */
