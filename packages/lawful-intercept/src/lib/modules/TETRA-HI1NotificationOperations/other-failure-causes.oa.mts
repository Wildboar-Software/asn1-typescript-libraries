/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary other_failure_causes
 * @description
 *
 * Local error code 0 of the TETRA `sending-of-HI1-Notification`. The document
 * does not say which failure selects this code rather than one of the other
 * three.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.2, clause C.1.2.2, annex G.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * other-failure-causes ERROR ::= {CODE local:0}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const other_failure_causes: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": {
        local: 0,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
