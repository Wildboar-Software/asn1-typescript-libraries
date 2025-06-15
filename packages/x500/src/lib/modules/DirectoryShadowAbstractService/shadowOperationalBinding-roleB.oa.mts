/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ModificationParameter,
    _decode_ModificationParameter,
    _encode_ModificationParameter,
} from "../DirectoryShadowAbstractService/ModificationParameter.ta.mjs";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary shadowOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<NULL, ModificationParameter>}
 * @implements {OP_BIND_ROLE<NULL, ModificationParameter>}
 */
export const shadowOperationalBinding_roleB: OP_BIND_ROLE<
    NULL,
    ModificationParameter
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": $._decodeNull,
        "&ModifyParam": _decode_ModificationParameter,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": $._encodeNull,
        "&ModifyParam": _encode_ModificationParameter,
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
