/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sambaDomainName } from "../SambaV3Schema/sambaDomainName.oa.mjs";
import { sambaNTPassword } from "../SambaV3Schema/sambaNTPassword.oa.mjs";
import { sambaTrustFlags } from "../SambaV3Schema/sambaTrustFlags.oa.mjs";
import { sambaPwdLastSet } from "../SambaV3Schema/sambaPwdLastSet.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";


/**
 * @summary sambaTrustPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustPassword OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     MUST CONTAIN    {sambaDomainName | sambaNTPassword | sambaTrustFlags}
 *     MAY CONTAIN     {sambaPwdLastSet | sambaSID}
 *     LDAP-NAME       {"sambaTrustPassword"}
 *     LDAP-DESC       "Samba Trust Password"
 *     ID              { 1 3 6 1 4 1 7165 2 2 14 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaTrustPassword: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaDomainName, sambaNTPassword, sambaTrustFlags, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sambaPwdLastSet, sambaSID, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaTrustPassword" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Trust Password" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 14,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
