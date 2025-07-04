/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_objectClasses } from "../SchemaAdministration/id-soa-objectClasses.va.mjs";
import {
    ObjectClassDescription,
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta.mjs";
import { objectClassDescription } from "../SelectedAttributeTypes/objectClassDescription.oa.mjs";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa.mjs";
/**
 * @summary objectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClasses ATTRIBUTE ::= {
 *   WITH SYNTAX              ObjectClassDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              objectClassDescription.&id
 *   LDAP-NAME                {"objectClasses"}
 *   ID                       id-soa-objectClasses }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ObjectClassDescription>}
 * @implements {ATTRIBUTE<ObjectClassDescription>}
 */
export const objectClasses: ATTRIBUTE<ObjectClassDescription> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ObjectClassDescription,
    },
    encoderFor: {
        "&Type": _encode_ObjectClassDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": objectClassDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["objectClasses"],
    "&id": id_soa_objectClasses /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
