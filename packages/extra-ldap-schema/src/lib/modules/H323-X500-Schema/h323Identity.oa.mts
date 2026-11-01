/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { h323_id_oc } from "../H323-X500-Schema/h323-id-oc.va.mjs";
import { h323IdentityGKDomain } from "../H323-X500-Schema/h323IdentityGKDomain.oa.mjs";
import { h323Identityh323_ID } from "../H323-X500-Schema/h323Identityh323-ID.oa.mjs";
import { h323IdentitydialedDigits } from "../H323-X500-Schema/h323IdentitydialedDigits.oa.mjs";
import { h323Identityemail_ID } from "../H323-X500-Schema/h323Identityemail-ID.oa.mjs";
import { h323IdentityURL_ID } from "../H323-X500-Schema/h323IdentityURL-ID.oa.mjs";
import { h323IdentitytransportID } from "../H323-X500-Schema/h323IdentitytransportID.oa.mjs";
import { h323IdentitypartyNumber } from "../H323-X500-Schema/h323IdentitypartyNumber.oa.mjs";
import { h323IdentitymobileUIM } from "../H323-X500-Schema/h323IdentitymobileUIM.oa.mjs";
import { h323IdentityEndpointType } from "../H323-X500-Schema/h323IdentityEndpointType.oa.mjs";
import { h323IdentityServiceLevel } from "../H323-X500-Schema/h323IdentityServiceLevel.oa.mjs";
// export { h323_id_oc } from "../H323-X500-Schema/h323-id-oc.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ h323IdentityGKDomain, h323Identityh323_ID, h323IdentitydialedDigits, h323Identityemail_ID, h323IdentityURL_ID, h323IdentitytransportID, h323IdentitypartyNumber, h323IdentitymobileUIM, h323IdentityEndpointType, h323IdentityServiceLevel, ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1,], h323_id_oc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
