/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { GetRRCInfArg, _decode_GetRRCInfArg, _encode_GetRRCInfArg } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfArg.ta.mjs";
import { GetRRCInfRes, _decode_GetRRCInfRes, _encode_GetRRCInfRes } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary getRRCInf
 * @description
 *
 * Fetch route-restriction information for a WTM user (ANF-WTINFO, ECMA-302
 * §7.5). The Visitor PINX sends it to the Home PINX. ROSE local CODE 97. The
 * Home PINX reads the HDB and returns the route restriction class, an
 * alternative identity, or both, when it has them (§7.5.2.1). If it cannot
 * retrieve the information, for example because the user is unknown, it returns
 * an error; §7.5.2.2 is silent on whether that error is `notAvailable` or
 * `unspecified`. Timer T5, at least 15 s, runs in VisitWaitRRC (§7.10.1). When
 * SS-WTAT is supported, the Home PINX may put `transferAuthParam` (`authKey` or
 * `challLen`) in the same message as the result (§7.9.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getRRCInf OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT GetRRCInfArg
 *     RESULT GetRRCInfRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 97
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetRRCInfArg, GetRRCInfRes>}
 * @implements {OPERATION<GetRRCInfArg, GetRRCInfRes>}
 */
export
const getRRCInf: OPERATION<GetRRCInfArg, GetRRCInfRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetRRCInfArg,
        "&ResultType": _decode_GetRRCInfRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetRRCInfArg,
        "&ResultType": _encode_GetRRCInfRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 97 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
