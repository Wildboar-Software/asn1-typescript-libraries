/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary shadowOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<NULL>}
 * @implements {OP_BIND_ROLE<NULL>}
 */
export const shadowOperationalBinding_roleA: OP_BIND_ROLE<NULL> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": $._decodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": $._encodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    "&establish": true /* OBJECT_FIELD_SETTING */,
    "&modify": true /* OBJECT_FIELD_SETTING */,
    "&terminate": true /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
