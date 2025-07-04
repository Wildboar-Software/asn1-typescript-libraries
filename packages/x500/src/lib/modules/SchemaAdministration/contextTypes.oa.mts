/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    ContextDescription,
    _decode_ContextDescription,
    _encode_ContextDescription,
} from "../SchemaAdministration/ContextDescription.ta.mjs";
import { id_soa_contextTypes } from "../SchemaAdministration/id-soa-contextTypes.va.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary contextTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextTypes ATTRIBUTE ::= {
 *   WITH SYNTAX             ContextDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-contextTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ContextDescription>}
 * @implements {ATTRIBUTE<ContextDescription>}
 */
export const contextTypes: ATTRIBUTE<ContextDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextDescription,
    },
    encoderFor: {
        "&Type": _encode_ContextDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_contextTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
