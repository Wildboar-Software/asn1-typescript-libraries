/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    TeletexOrganizationalUnitNames,
    _decode_TeletexOrganizationalUnitNames,
    _encode_TeletexOrganizationalUnitNames,
} from "../MTSAbstractService/TeletexOrganizationalUnitNames.ta.mjs";
/**
 * @summary teletex_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *   TeletexOrganizationalUnitNames
 *   IDENTIFIED BY  5
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames>}
 * @implements {EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames>}
 */
export const teletex_organizational_unit_names: EXTENSION_ATTRIBUTE<TeletexOrganizationalUnitNames> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexOrganizationalUnitNames,
    },
    encoderFor: {
        "&Type": _encode_TeletexOrganizationalUnitNames,
    },
    "&id": 5 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
