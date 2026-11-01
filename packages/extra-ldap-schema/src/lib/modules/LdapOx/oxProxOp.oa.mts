/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_oxProxOp } from "../LdapOx/id-oc-oxProxOp.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { oxDomain } from "../LdapOx/oxDomain.oa.mjs";
import { oxId } from "../LdapOx/oxId.oa.mjs";
import { oxX509PEM } from "../LdapOx/oxX509PEM.oa.mjs";
import { oxX509URL } from "../LdapOx/oxX509URL.oa.mjs";
// export { id_oc_oxProxOp } from "../LdapOx/id-oc-oxProxOp.va.mjs";


/**
 * @summary oxProxOp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxProxOp OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | displayName
 *                               | inum
 *                               | localityName
 *                               | oxDomain
 *                               | oxId
 *                               | oxX509PEM
 *                               | oxX509URL }
 *   LDAP-NAME                 {"oxProxOp"}
 *   ID                        id-oc-oxProxOp }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxProxOp: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, displayName, inum, localityName, oxDomain, oxId, oxX509PEM, oxX509URL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "oxProxOp" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_oxProxOp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
