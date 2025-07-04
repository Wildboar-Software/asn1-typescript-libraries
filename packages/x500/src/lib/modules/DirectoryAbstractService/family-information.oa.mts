/* eslint-disable */
import {
    FamilyEntries,
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../DirectoryAbstractService/FamilyEntries.ta.mjs";
import { id_at_family_information } from "../DirectoryAbstractService/id-at-family-information.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary family_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * family-information ATTRIBUTE ::= {
 *   WITH SYNTAX  FamilyEntries
 *   USAGE        directoryOperation
 *   ID           id-at-family-information }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FamilyEntries>}
 * @implements {ATTRIBUTE<FamilyEntries>}
 */
export const family_information: ATTRIBUTE<FamilyEntries> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FamilyEntries,
    },
    encoderFor: {
        "&Type": _encode_FamilyEntries,
    },
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_at_family_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
