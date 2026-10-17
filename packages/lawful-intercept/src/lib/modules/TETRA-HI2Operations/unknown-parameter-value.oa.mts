/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unknown_parameter_value
 * @description
 *
 * The LEMF may return this value when an operation or a parameter is
 * misunderstood. Annex C sends `RO_Error` for an unsuccessful operation at the
 * application level, using an error cause defined by the operation. The
 * specification gives this code no separate behaviour. The local code is 2.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.2, clause D.10.3.
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
