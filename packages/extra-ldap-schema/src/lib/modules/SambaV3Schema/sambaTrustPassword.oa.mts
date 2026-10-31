/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sambaDomainName } from "./sambaDomainName.oa.mjs";
import { sambaNTPassword } from "./sambaNTPassword.oa.mjs";
import { sambaPwdLastSet } from "./sambaPwdLastSet.oa.mjs";
import { sambaSID } from "./sambaSID.oa.mjs";
import { sambaTrustFlags } from "./sambaTrustFlags.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [sambaDomainName, sambaNTPassword, sambaTrustFlags] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sambaPwdLastSet, sambaSID] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sambaTrustPassword"],
    "&ldapDesc": "Samba Trust Password" /* OBJECT_FIELD_SETTING */,
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
        14,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
