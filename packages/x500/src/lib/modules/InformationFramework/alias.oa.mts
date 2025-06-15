/* eslint-disable */
import { aliasedEntryName } from "../InformationFramework/aliasedEntryName.oa.mjs";
import { id_oc_alias } from "../InformationFramework/id-oc-alias.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary alias
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alias OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {aliasedEntryName}
 *   LDAP-NAME     {"alias"}
 *   ID            id-oc-alias }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const alias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [aliasedEntryName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["alias"],
    "&id": id_oc_alias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
