/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { creator } from "../MSUser/creator.oa.mjs";
// export { creator } from "../MSUser/creator.oa.mjs";
import { id_oc_indexServerCatalog } from "../LdapSchema2ldifMicrosoft/id-oc-indexServerCatalog.va.mjs";
import { uNCName } from "../MSUser/uNCName.oa.mjs";
import { queryPoint } from "../MSUser/queryPoint.oa.mjs";
import { indexedScopes } from "../MSUser/indexedScopes.oa.mjs";
import { friendlyNames } from "../MSUser/friendlyNames.oa.mjs";
// export { id_oc_indexServerCatalog } from "../LdapSchema2ldifMicrosoft/id-oc-indexServerCatalog.va.mjs";


/**
 * @summary indexServerCatalog
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * indexServerCatalog OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { creator }
 *   MAY CONTAIN               { uNCName
 *                               | queryPoint
 *                               | indexedScopes
 *                               | friendlyNames }
 *   LDAP-NAME                 {"indexServerCatalog"}
 *   ID                        id-oc-indexServerCatalog }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const indexServerCatalog: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ connectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ creator, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ uNCName, queryPoint, indexedScopes, friendlyNames, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "indexServerCatalog" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_indexServerCatalog /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
