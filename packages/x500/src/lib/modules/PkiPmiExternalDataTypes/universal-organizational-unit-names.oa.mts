/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalOrganizationalUnitNames,
    _decode_UniversalOrganizationalUnitNames,
    _encode_UniversalOrganizationalUnitNames,
} from "../PkiPmiExternalDataTypes/UniversalOrganizationalUnitNames.ta.mjs";
/**
 * @summary universal_organizational_unit_names
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organizational-unit-names EXTENSION-ATTRIBUTE ::= {
 *                  UniversalOrganizationalUnitNames
 *   IDENTIFIED BY  27 }
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

/* eslint-enable */
