/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
// export { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";


/**
 * @summary simpleSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * simpleSecurityObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {userPassword}
 *     LDAP-NAME       {"simpleSecurityObject"}
 *     LDAP-DESC       "RFC1274: simple security object"
 *     ID              { 0 9 2342 19200300 100 4 19 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const simpleSecurityObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ userPassword, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "simpleSecurityObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: simple security object" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([0, 9, 2342, 19200300, 100, 4, 19,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
