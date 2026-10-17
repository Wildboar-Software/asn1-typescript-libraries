/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unknown_parameter_value
 * @description
 *
 * Local code 2. One of the errors the LEMF may return when an operation or a
 * parameter is misunderstood. Clause C.1.2.2 sends `RO_Error` when the
 * operation fails at application level, with a cause taken from the operation.
 * Clause C.1.2.4 refers unrecognized fields and parameters to annex G. Annex G
 * tells the LEMF to ignore an unrecognized parameter or value and to reject an
 * undecodable ROSE record. TS 101 671 does not assign this error code to one of
 * those cases.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.2, clause C.1.2.4, annex G,
 * clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unknown-parameter-value ERROR ::= {CODE local:2}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unknown_parameter_value: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": {
        local: 2,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
