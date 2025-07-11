/* eslint-disable */
import {
    NHOBSuperiorToSubordinate,
    _decode_NHOBSuperiorToSubordinate,
    _encode_NHOBSuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/NHOBSuperiorToSubordinate.ta.mjs";
import { type OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary nonSpecificHierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<NHOBSuperiorToSubordinate, NHOBSuperiorToSubordinate>}
 * @implements {OP_BIND_ROLE<NHOBSuperiorToSubordinate, NHOBSuperiorToSubordinate>}
 */
export const nonSpecificHierarchicalOperationalBinding_roleA: OP_BIND_ROLE<
    NHOBSuperiorToSubordinate,
    NHOBSuperiorToSubordinate
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _decode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _encode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    "&modify": true /* OBJECT_FIELD_SETTING */,
    "&terminate": true /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&establish": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
