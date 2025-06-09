/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa.js";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.js";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa.js";
import { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa.js";
import { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa.js";
import { id_oc_pkiCA } from "../AuthenticationFramework/id-oc-pkiCA.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
export { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa.js";
export { cACertificate } from "../AuthenticationFramework/cACertificate.oa.js";
export { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa.js";
export { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa.js";
export { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa.js";
export { id_oc_pkiCA } from "../AuthenticationFramework/id-oc-pkiCA.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta.js";
export { top } from "../InformationFramework/top.oa.js";

/* START_OF_SYMBOL_DEFINITION pkiCA */
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
export const pkiCA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        cACertificate,
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        crossCertificatePair,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pkiCA"],
    "&ldapDesc": "X.509 PKI Certificate Authority" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiCA */

/* eslint-enable */
