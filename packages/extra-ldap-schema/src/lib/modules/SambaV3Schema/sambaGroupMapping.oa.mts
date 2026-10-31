/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { sambaGroupType } from "./sambaGroupType.oa.mjs";
import { sambaSID } from "./sambaSID.oa.mjs";
import { sambaSIDList } from "./sambaSIDList.oa.mjs";

/**
 * @summary sambaGroupMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaGroupMapping OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {gidNumber | sambaGroupType | sambaSID}
 *     MAY CONTAIN     {description | displayName | sambaSIDList}
 *     LDAP-NAME       {"sambaGroupMapping"}
 *     LDAP-DESC       "Samba Group Mapping"
 *     ID              { 1 3 6 1 4 1 7165 2 2 4 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaGroupMapping: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gidNumber, sambaGroupType, sambaSID] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, displayName, sambaSIDList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaGroupMapping"],
    "&ldapDesc": "Samba Group Mapping" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
        3,
        6,
        1,
        4,
        1,
        7165,
        2,
        2,
        4,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
