/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalOrganizationName,
    _decode_UniversalOrganizationName,
    _encode_UniversalOrganizationName,
} from "../PkiPmiExternalDataTypes/UniversalOrganizationName.ta.mjs";
/**
 * @summary universal_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalOrganizationName
 *   IDENTIFIED BY  25 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalOrganizationName>}
 */
export const universal_organization_name: EXTENSION_ATTRIBUTE<UniversalOrganizationName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_UniversalOrganizationName,
    },
    "&id": 25 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
