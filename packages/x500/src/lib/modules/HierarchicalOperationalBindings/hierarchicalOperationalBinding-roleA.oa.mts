/* eslint-disable */
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta.mjs";
import {
    SuperiorToSubordinateModification,
    _decode_SuperiorToSubordinateModification,
    _encode_SuperiorToSubordinateModification,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinateModification.ta.mjs";
import { type OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary hierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<SuperiorToSubordinate, SuperiorToSubordinateModification>}
 * @implements {OP_BIND_ROLE<SuperiorToSubordinate, SuperiorToSubordinateModification>}
 */
export const hierarchicalOperationalBinding_roleA: OP_BIND_ROLE<
    SuperiorToSubordinate,
    SuperiorToSubordinateModification
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SuperiorToSubordinate,
        "&ModifyParam": _decode_SuperiorToSubordinateModification,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SuperiorToSubordinate,
        "&ModifyParam": _encode_SuperiorToSubordinateModification,
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
