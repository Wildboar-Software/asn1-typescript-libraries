/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Do-Not-Disturb-Operations-asn1-97/DummyArg.ta.mjs";
// export { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Do-Not-Disturb-Operations-asn1-97/DummyArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Do-Not-Disturb-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Do-Not-Disturb-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary doNotDisturbOvrExecuteQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbOvrExecuteQ OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     CODE local: 39
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, DummyRes>}
 * @implements {OPERATION<DummyArg, DummyRes>}
 */
export
const doNotDisturbOvrExecuteQ: OPERATION<DummyArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 39 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
