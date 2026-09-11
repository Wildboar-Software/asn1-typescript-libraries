/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { UnavailableNetworkResource, _decode_UnavailableNetworkResource, _encode_UnavailableNetworkResource } from "../CAP-datatypes/UnavailableNetworkResource.ta.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { errcode_systemFailure } from "../CAP-errorcodes/errcode-systemFailure.va.mjs";
// export { errcode_systemFailure } from "../CAP-errorcodes/errcode-systemFailure.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary systemFailure
 * @description
 *
 * The operation could not be completed due to a system failure at the
 * serving physical entity. Recovery is not expected within the current
 * call instance. Returned by gsmSCF, gsmSSF, gsmSRF, smsSSF, or gprsSSF.
 * Parameter is `UnavailableNetworkResource`. Local error code 11.
 * (3GPP TS 29.078 V19.0.0 clauses 5.2 and 10.1.9).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemFailure ERROR ::= {
 *     PARAMETER    UnavailableNetworkResource
 *     CODE    errcode-systemFailure
 *     }
 * ```
 * 
 * @constant
 * @type {ERROR<UnavailableNetworkResource>}
 * @implements {ERROR<UnavailableNetworkResource>}
 */
export
const systemFailure: ERROR<UnavailableNetworkResource> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnavailableNetworkResource,
    },
    encoderFor: {
        "&ParameterType": _encode_UnavailableNetworkResource,
    },
    "&errorCode": errcode_systemFailure /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
