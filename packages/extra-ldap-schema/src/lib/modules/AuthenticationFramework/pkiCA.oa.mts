/* eslint-disable */
import { id_oc_pkiCA } from "../AuthenticationFramework/id-oc-pkiCA.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { authorityRevocationList } from "./authorityRevocationList.oa.mjs";
import { cACertificate } from "./cACertificate.oa.mjs";
import { certificateRevocationList } from "./certificateRevocationList.oa.mjs";
import { crossCertificatePair } from "./crossCertificatePair.oa.mjs";
import { eepkCertificateRevocationList } from "./eepkCertificateRevocationList.oa.mjs";

/**
 * @summary pkiCA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiCA OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {cACertificate |
 *                        certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        crossCertificatePair}
 *   LDAP-NAME           {"pkiCA"}
 *   LDAP-DESC           "X.509 PKI Certificate Authority"
 *   ID                  id-oc-pkiCA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pkiCA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [cACertificate, certificateRevocationList, eepkCertificateRevocationList, authorityRevocationList, crossCertificatePair] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pkiCA"],
    "&ldapDesc": "X.509 PKI Certificate Authority" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
