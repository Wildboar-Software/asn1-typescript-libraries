/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { sip_id_oc } from "../H323-X500-Schema/sip-id-oc.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sIPIdentityAddress } from "./sIPIdentityAddress.oa.mjs";
import { sIPIdentityPassword } from "./sIPIdentityPassword.oa.mjs";
import { sIPIdentityProxyAddress } from "./sIPIdentityProxyAddress.oa.mjs";
import { sIPIdentityRegistrarAddress } from "./sIPIdentityRegistrarAddress.oa.mjs";
import { sIPIdentitySIPURI } from "./sIPIdentitySIPURI.oa.mjs";
import { sIPIdentityServiceLevel } from "./sIPIdentityServiceLevel.oa.mjs";
import { sIPIdentityUserName } from "./sIPIdentityUserName.oa.mjs";
import { userSMIMECertificate } from "./userSMIMECertificate.oa.mjs";

/**
 * @summary sIPIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sIPIdentity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN
 *     {sIPIdentitySIPURI | sIPIdentityRegistrarAddress | sIPIdentityProxyAddress
 *       | sIPIdentityAddress | sIPIdentityPassword | sIPIdentityUserName |
 *       sIPIdentityServiceLevel | userSMIMECertificate}
 *   ID           {sip-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sIPIdentity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sIPIdentitySIPURI, sIPIdentityRegistrarAddress, sIPIdentityProxyAddress, sIPIdentityAddress, sIPIdentityPassword, sIPIdentityUserName, sIPIdentityServiceLevel, userSMIMECertificate] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
    ], sip_id_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
