/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    DITContextUseDescription,
    _decode_DITContextUseDescription,
    _encode_DITContextUseDescription,
} from "../SchemaAdministration/DITContextUseDescription.ta.mjs";
import { id_soa_dITContextUse } from "../SchemaAdministration/id-soa-dITContextUse.va.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary dITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContextUse ATTRIBUTE ::= {
 *   WITH SYNTAX             DITContextUseDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-dITContextUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DITContextUseDescription>}
 * @implements {ATTRIBUTE<DITContextUseDescription>}
 */
export const dITContextUse: ATTRIBUTE<DITContextUseDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContextUseDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContextUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_dITContextUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
