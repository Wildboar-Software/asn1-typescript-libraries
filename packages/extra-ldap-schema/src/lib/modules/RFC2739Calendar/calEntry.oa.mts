/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { msoc } from "../RFC2739Calendar/msoc.va.mjs";
import { calCalURI } from "../RFC2739Calendar/calCalURI.oa.mjs";
import { calFBURL } from "../RFC2739Calendar/calFBURL.oa.mjs";
import { calCAPURI } from "../RFC2739Calendar/calCAPURI.oa.mjs";
import { calCalAdrURI } from "../RFC2739Calendar/calCalAdrURI.oa.mjs";
import { calOtherCalURIs } from "../RFC2739Calendar/calOtherCalURIs.oa.mjs";
import { calOtherFBURLs } from "../RFC2739Calendar/calOtherFBURLs.oa.mjs";
import { calOtherCAPURIs } from "../RFC2739Calendar/calOtherCAPURIs.oa.mjs";
import { calOtherCalAdrURIs } from "../RFC2739Calendar/calOtherCalAdrURIs.oa.mjs";
// export { msoc } from "../RFC2739Calendar/msoc.va.mjs";


/**
 * @summary calEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * calEntry OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN {
 *         calCalURI
 *         | calFBURL
 *         | calCAPURI
 *         | calCalAdrURI
 *         | calOtherCalURIs
 *         | calOtherFBURLs
 *         | calOtherCAPURIs
 *         | calOtherCalAdrURIs
 *     }
 *     LDAP-NAME       {"calEntry"}
 *     LDAP-DESC       "Calendering and free/busy information"
 *     ID              { msoc 87 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const calEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ calCalURI, calFBURL, calCAPURI, calCalAdrURI, calOtherCalURIs, calOtherFBURLs, calOtherCAPURIs, calOtherCalAdrURIs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "calEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Calendering and free/busy information" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([87,], msoc) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
