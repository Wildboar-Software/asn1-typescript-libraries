/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { id_nis_oc } from "../NIS/id-nis-oc.va.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { shadowLastChange } from "../NIS/shadowLastChange.oa.mjs";
import { shadowMin } from "../NIS/shadowMin.oa.mjs";
import { shadowMax } from "../NIS/shadowMax.oa.mjs";
import { shadowWarning } from "../NIS/shadowWarning.oa.mjs";
import { shadowInactive } from "../NIS/shadowInactive.oa.mjs";
import { shadowExpire } from "../NIS/shadowExpire.oa.mjs";
import { shadowFlag } from "../NIS/shadowFlag.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary shadowAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowAccount OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {uid}
 *     MAY CONTAIN        {
 *         userPassword
 *         | shadowLastChange
 *         | shadowMin
 *         | shadowMax
 *         | shadowWarning
 *         | shadowInactive
 *         | shadowExpire
 *         | shadowFlag
 *         | description
 *     }
 *     LDAP-NAME        {"shadowAccount"}
 *     LDAP-DESC        "Additional attributes for shadow passwords"
 *     ID                { id-nis-oc 1 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const shadowAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ userPassword, shadowLastChange, shadowMin, shadowMax, shadowWarning, shadowInactive, shadowExpire, shadowFlag, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "shadowAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Additional attributes for shadow passwords" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], id_nis_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

