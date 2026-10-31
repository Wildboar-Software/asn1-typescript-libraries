/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_yubikeyOwner } from "../LdapYubi/id-oc-yubikeyOwner.va.mjs";
import { passwordFactor } from "./passwordFactor.oa.mjs";
import { yubikeyID } from "./yubikeyID.oa.mjs";

/**
 * @summary yubikeyOwner
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * yubikeyOwner OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { yubikeyID
 *                               | passwordFactor }
 *   LDAP-NAME                 {"yubikeyOwner"}
 *   LDAP-DESC                 "Object that has a Yubikey"
 *   ID                        id-oc-yubikeyOwner }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const yubikeyOwner: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [yubikeyID, passwordFactor] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["yubikeyOwner"],
    "&ldapDesc": "Object that has a Yubikey" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_yubikeyOwner /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
