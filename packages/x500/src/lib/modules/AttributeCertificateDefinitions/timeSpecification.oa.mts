/* eslint-disable */
import { id_ce_timeSpecification } from "../AttributeCertificateDefinitions/id-ce-timeSpecification.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta.mjs";
/**
 * @summary timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecification EXTENSION ::= {
 *   SYNTAX         TimeSpecification
 *   IDENTIFIED BY  id-ce-timeSpecification }
 * ```
 *
 * @constant
 * @type {EXTENSION<TimeSpecification>}
 * @implements {EXTENSION<TimeSpecification>}
 */
export const timeSpecification: EXTENSION<TimeSpecification> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&ExtnType": _encode_TimeSpecification,
    },
    "&id": id_ce_timeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
