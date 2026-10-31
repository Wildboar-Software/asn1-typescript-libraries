/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { h323_id_oc } from "../H323-X500-Schema/h323-id-oc.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { h323IdentityEndpointType } from "./h323IdentityEndpointType.oa.mjs";
import { h323IdentityGKDomain } from "./h323IdentityGKDomain.oa.mjs";
import { h323IdentityServiceLevel } from "./h323IdentityServiceLevel.oa.mjs";
import { h323IdentityURL_ID } from "./h323IdentityURL-ID.oa.mjs";
import { h323IdentitydialedDigits } from "./h323IdentitydialedDigits.oa.mjs";
import { h323Identityemail_ID } from "./h323Identityemail-ID.oa.mjs";
import { h323Identityh323_ID } from "./h323Identityh323-ID.oa.mjs";
import { h323IdentitymobileUIM } from "./h323IdentitymobileUIM.oa.mjs";
import { h323IdentitypartyNumber } from "./h323IdentitypartyNumber.oa.mjs";
import { h323IdentitytransportID } from "./h323IdentitytransportID.oa.mjs";

/**
 * @summary h323Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h323Identity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN
 *     {h323IdentityGKDomain | h323Identityh323-ID | h323IdentitydialedDigits |
 *       h323Identityemail-ID | h323IdentityURL-ID | h323IdentitytransportID |
 *       h323IdentitypartyNumber | h323IdentitymobileUIM |
 *       h323IdentityEndpointType | h323IdentityServiceLevel}
 *   ID           {h323-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const h323Identity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [h323IdentityGKDomain, h323Identityh323_ID, h323IdentitydialedDigits, h323Identityemail_ID, h323IdentityURL_ID, h323IdentitytransportID, h323IdentitypartyNumber, h323IdentitymobileUIM, h323IdentityEndpointType, h323IdentityServiceLevel] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
    ], h323_id_oc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
