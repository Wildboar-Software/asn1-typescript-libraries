/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sip_id_oc } from "../H323-X500-Schema/sip-id-oc.va.mjs";
import { sIPIdentitySIPURI } from "../H323-X500-Schema/sIPIdentitySIPURI.oa.mjs";
import { sIPIdentityRegistrarAddress } from "../H323-X500-Schema/sIPIdentityRegistrarAddress.oa.mjs";
import { sIPIdentityProxyAddress } from "../H323-X500-Schema/sIPIdentityProxyAddress.oa.mjs";
import { sIPIdentityAddress } from "../H323-X500-Schema/sIPIdentityAddress.oa.mjs";
import { sIPIdentityPassword } from "../H323-X500-Schema/sIPIdentityPassword.oa.mjs";
import { sIPIdentityUserName } from "../H323-X500-Schema/sIPIdentityUserName.oa.mjs";
import { sIPIdentityServiceLevel } from "../H323-X500-Schema/sIPIdentityServiceLevel.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sIPIdentitySIPURI, sIPIdentityRegistrarAddress, sIPIdentityProxyAddress, sIPIdentityAddress, sIPIdentityPassword, sIPIdentityUserName, sIPIdentityServiceLevel, userSMIMECertificate, ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], sip_id_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

