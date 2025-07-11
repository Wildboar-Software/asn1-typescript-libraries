/* eslint-disable */
import {
    SubordinateToSuperior,
    _decode_SubordinateToSuperior,
    _encode_SubordinateToSuperior,
} from "../HierarchicalOperationalBindings/SubordinateToSuperior.ta.mjs";
import { type OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary hierarchicalOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<SubordinateToSuperior, SubordinateToSuperior>}
 * @implements {OP_BIND_ROLE<SubordinateToSuperior, SubordinateToSuperior>}
 */
export const hierarchicalOperationalBinding_roleB: OP_BIND_ROLE<
    SubordinateToSuperior,
    SubordinateToSuperior
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SubordinateToSuperior,
        "&ModifyParam": _decode_SubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SubordinateToSuperior,
        "&ModifyParam": _encode_SubordinateToSuperior,
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
