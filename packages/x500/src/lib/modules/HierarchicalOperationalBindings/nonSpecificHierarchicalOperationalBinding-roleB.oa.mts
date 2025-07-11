/* eslint-disable */
import {
    NHOBSubordinateToSuperior,
    _decode_NHOBSubordinateToSuperior,
    _encode_NHOBSubordinateToSuperior,
} from "../HierarchicalOperationalBindings/NHOBSubordinateToSuperior.ta.mjs";
import { type OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca.mjs";
/**
 * @summary nonSpecificHierarchicalOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<NHOBSubordinateToSuperior, NHOBSubordinateToSuperior>}
 * @implements {OP_BIND_ROLE<NHOBSubordinateToSuperior, NHOBSubordinateToSuperior>}
 */
export const nonSpecificHierarchicalOperationalBinding_roleB: OP_BIND_ROLE<
    NHOBSubordinateToSuperior,
    NHOBSubordinateToSuperior
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_NHOBSubordinateToSuperior,
        "&ModifyParam": _decode_NHOBSubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_NHOBSubordinateToSuperior,
        "&ModifyParam": _encode_NHOBSubordinateToSuperior,
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
