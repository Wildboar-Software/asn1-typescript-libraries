/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { loginShell } from "../NIS/loginShell.oa.mjs";
import { gecos } from "../NIS/gecos.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary posixAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * posixAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {
 *         commonName
 *         | uid
 *         | uidNumber
 *         | gidNumber
 *         | homeDirectory
 *     }
 *     MAY CONTAIN        {
 *         userPassword
 *         | loginShell
 *         | gecos
 *         | description
 *     }
 *     LDAP-NAME        {"posixAccount"}
 *     LDAP-DESC        "Abstraction of an account with POSIX attributes"
 *     ID                { id-nis-oc 0 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const posixAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, uid, uidNumber, gidNumber, homeDirectory, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPassword, loginShell, gecos, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "posixAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Abstraction of an account with POSIX attributes" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([0,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

