/* eslint-disable */
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unspecified
 * @description
 *
 * ROSE local 1008. The parameter is one `Extension` from `SSCTExtSet`.
 * Listed on `ssctInitiate`. ECMA-300 §6.3.1 and §6.5 do not define when
 * this error is selected, nor the parameter contents (`SSCTExtSet` is
 * an ellipsis).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unspecified ERROR ::= {
 *     PARAMETER Extension {{SSCTExtSet}}
 *     CODE local: 1008
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<Extension>}
 * @implements {ERROR<Extension>}
 */
export
const unspecified: ERROR<Extension> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_Extension,
    },
    encoderFor: {
        "&ParameterType": _encode_Extension,
    },
    "&errorCode": { local: 1008 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
