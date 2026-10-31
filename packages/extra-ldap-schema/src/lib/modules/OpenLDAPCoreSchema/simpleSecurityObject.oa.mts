/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [userPassword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["simpleSecurityObject"],
    "&ldapDesc": "RFC1274: simple security object" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        0,
        9,
        2342,
        19200300,
        100,
        4,
        19,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
