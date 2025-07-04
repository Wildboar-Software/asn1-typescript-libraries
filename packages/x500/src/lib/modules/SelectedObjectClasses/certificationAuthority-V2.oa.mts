/* eslint-disable */
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { certificationAuthority } from "../SelectedObjectClasses/certificationAuthority.oa.mjs";
import { id_oc_certificationAuthority_V2 } from "../SelectedObjectClasses/id-oc-certificationAuthority-V2.va.mjs";
/**
 * @summary certificationAuthority_V2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority-V2 OBJECT-CLASS ::= {
 *   SUBCLASS OF   {certificationAuthority}
 *   KIND          auxiliary
 *   MAY CONTAIN   {deltaRevocationList}
 *   LDAP-NAME     {"certificationAuthority-V2"}
 *   LDAP-DESC     {"X.509 certificate authority, version 2"} -- RFC 4523
 *   ID            id-oc-certificationAuthority-V2 }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority_V2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [certificationAuthority] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [deltaRevocationList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificationAuthority-V2"],
    "&ldapDesc": "X.509 certificate authority, version 2",
    "&id": id_oc_certificationAuthority_V2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
