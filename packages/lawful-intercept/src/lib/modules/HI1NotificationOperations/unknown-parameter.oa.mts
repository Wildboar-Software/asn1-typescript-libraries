/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unknown_parameter
 * @description
 *
 * Local error code 2 of `sending-of-HI1-Notification`, through
 * `ErrorHI1Notifications`. Clause C.1.2.2 returns RO_Error when the operation
 * fails at application level, with a cause the operation defines. The document
 * does not define the parameter. Annex G says an unrecognized parameter is
 * ignored and that no special error is required. It does not identify that case
 * with this code.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.4, clause C.1.2.2, annex G.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unknown-parameter ERROR ::= {CODE local:2}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unknown_parameter: ERROR = {
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
