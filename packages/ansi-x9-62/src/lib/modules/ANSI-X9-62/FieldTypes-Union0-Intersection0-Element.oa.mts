/* eslint-disable */
import { type FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.mjs";
import { prime_field } from "../ANSI-X9-62/prime-field.va.mjs";
import {
    Prime_p,
    _decode_Prime_p,
    _encode_Prime_p,
} from "../ANSI-X9-62/Prime-p.ta.mjs";
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
 * @type {FIELD_ID<Prime_p>}
 * @implements {FIELD_ID<Prime_p>}
 */
export const FieldTypes_Union0_Intersection0_Element: FIELD_ID<Prime_p> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Prime_p,
    },
    encoderFor: {
        "&Type": _encode_Prime_p,
    },
    "&id": prime_field /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
