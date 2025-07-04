/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa.mjs";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa.mjs";
import { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_certificationAuthority } from "../SelectedObjectClasses/id-oc-certificationAuthority.va.mjs";
/**
 * @summary certificationAuthority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {cACertificate |
 *                  certificateRevocationList |
 *                  authorityRevocationList}
 *   MAY CONTAIN   {crossCertificatePair}
 *   LDAP-NAME     {"certificationAuthority"} -- RFC 4523
 *   LDAP-DESC     {"X.509 certificate authority"}
 *   ID            id-oc-certificationAuthority }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        cACertificate,
        certificateRevocationList,
        authorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [crossCertificatePair] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["certificationAuthority"],
    "&ldapDesc": "X.509 certificate authority",
    "&id": id_oc_certificationAuthority /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
