/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa.mjs";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa.mjs";
import { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { h235_id_oc } from "../H323-X500-Schema/h235-id-oc.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { h235IdentityEndpointID } from "./h235IdentityEndpointID.oa.mjs";
import { h235IdentityPassword } from "./h235IdentityPassword.oa.mjs";

/**
 * @summary h235Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h235Identity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN
 *     {h235IdentityEndpointID | h235IdentityPassword | userCertificate |
 *       cACertificate | authorityRevocationList | certificateRevocationList |
 *       crossCertificatePair}
 *   ID           {h235-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const h235Identity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [h235IdentityEndpointID, h235IdentityPassword, userCertificate, cACertificate, authorityRevocationList, certificateRevocationList, crossCertificatePair] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
    ], h235_id_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
