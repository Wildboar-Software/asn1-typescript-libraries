/* eslint-disable */
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unspecified
 * @description
 *
 * ROSE local CODE 1008. The parameter is one `Extension` from `PUMRExtSet`
 * (ECMA-282 §6.3.1). Listed on `pumRegistr`, `pumDelReg`, `pumDe-reg`, and
 * `pumInterrog`. Clause 6 tells the Home or Visitor PINX to return an
 * appropriate error and is silent on when this error is that choice.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unspecified ERROR ::= {
 *     PARAMETER Extension {{PUMRExtSet}}
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
