/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalOrganizationalUnitNames,
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from "../MTSAbstractService/UniversalOrganizationalUnitNames.ta.mjs";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs";
export {
    UniversalOrganizationalUnitNames,
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from "../MTSAbstractService/UniversalOrganizationalUnitNames.ta.mjs";

/* START_OF_SYMBOL_DEFINITION universal_organizational_unit_names */
/**
 * @summary universal_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *   UniversalOrganizationalUnitNames
 *   IDENTIFIED BY  27
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames>}
 */
export const universal_organizational_unit_names: EXTENSION_ATTRIBUTE<UniversalOrganizationalUnitNames> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationalUnitNames,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationalUnitNames,
    },
    "&id": 27 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_organizational_unit_names */

/* eslint-enable */
