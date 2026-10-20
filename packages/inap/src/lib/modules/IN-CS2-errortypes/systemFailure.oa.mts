/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { UnavailableNetworkResource, _decode_UnavailableNetworkResource, _encode_UnavailableNetworkResource } from "../IN-CS2-datatypes/UnavailableNetworkResource.ta.mjs";
// export { UnavailableNetworkResource, _enum_for_UnavailableNetworkResource, UnavailableNetworkResource_unavailableResources /* IMPORTED_LONG_ENUMERATION_ITEM */, unavailableResources /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_componentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, componentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_basicCallProcessingException /* IMPORTED_LONG_ENUMERATION_ITEM */, basicCallProcessingException /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_resourceStatusFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, resourceStatusFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnavailableNetworkResource_endUserFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, endUserFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnavailableNetworkResource, _encode_UnavailableNetworkResource } from "../IN-CS2-datatypes/UnavailableNetworkResource.ta.mjs";
import { errcode_systemFailure } from "../IN-CS2-errorcodes/errcode-systemFailure.va.mjs";
// export { errcode_systemFailure } from "../IN-CS2-errorcodes/errcode-systemFailure.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary systemFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemFailure ERROR ::= {
 *   PARAMETER  UnavailableNetworkResource
 *   CODE       errcode-systemFailure
 * }
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
