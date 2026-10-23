/* eslint-disable */
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unspecified
 * @description
 *
 * Unspecified SS-MCR error (ECMA-344 §6.3.1). ROSE local CODE 1008. Parameter
 * is one `Extension` from `MakeCallRequestExtension`. Listed on `mCRequest`
 * and `mCInform`. This edition defines no extensions.
 *
 * The procedures require an appropriate return error and never name this code.
 * That covers a request the Co-operating PINX will not perform, a busy
 * Co-operating User, a Co-operating User who rejects after prompting,
 * Requested-Call failure, and a busy Destination User (§6.5.2.2.2,
 * §6.5.3.2.2). §6.8.10 to §6.8.13 and §6.8.17 likewise say only "an
 * appropriate error" when forwarding, deflection, or do-not-disturb is not
 * overridden. The standard is silent on when to choose this code rather than a
 * specific error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unspecified ERROR ::= {
 *     PARAMETER Extension {{MakeCallRequestExtension}}
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
