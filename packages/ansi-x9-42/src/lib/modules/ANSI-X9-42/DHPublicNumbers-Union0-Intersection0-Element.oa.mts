/* eslint-disable */
import { ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";
import { dhPublicNumber } from "../ANSI-X9-42/dhPublicNumber.va.mjs";
import {
    DomainParameters,
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta.mjs";

/**
 * @summary DHPublicNumbers_Union0_Intersection0_Element
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DHPublicNumbers-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {ALGORITHM_ID<DomainParameters>}
 * @implements {ALGORITHM_ID<DomainParameters>}
 */
export const DHPublicNumbers_Union0_Intersection0_Element: ALGORITHM_ID<DomainParameters> = {
    class: "ALGORITHM-ID",
    decoderFor: {
        "&Type": _decode_DomainParameters,
    },
    encoderFor: {
        "&Type": _encode_DomainParameters,
    },
    "&id": dhPublicNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
