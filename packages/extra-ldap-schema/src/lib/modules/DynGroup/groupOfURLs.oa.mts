/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nsdsoc } from "../DynGroup/id-nsdsoc.va.mjs";
import { memberURL } from "../DynGroup/memberURL.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
// export { id_nsdsoc } from "../DynGroup/id-nsdsoc.va.mjs";


/**
 * @summary groupOfURLs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfURLs OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {commonName}
 *     MAY CONTAIN        {
 *         memberURL
 *         | businessCategory
 *         | description
 *         | organizationName
 *         | organizationalUnitName
 *         | owner
 *         | seeAlso
 *     }
 *     LDAP-NAME        {"groupOfURLs"}
 *     ID                { id-nsdsoc 33 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfURLs: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberURL, businessCategory, description, organizationName, organizationalUnitName, owner, seeAlso, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupOfURLs" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([33,], id_nsdsoc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
