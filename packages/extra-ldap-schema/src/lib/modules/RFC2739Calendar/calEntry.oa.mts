/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { msoc } from "../RFC2739Calendar/msoc.va.mjs";
import { calCAPURI } from "./calCAPURI.oa.mjs";
import { calCalAdrURI } from "./calCalAdrURI.oa.mjs";
import { calCalURI } from "./calCalURI.oa.mjs";
import { calFBURL } from "./calFBURL.oa.mjs";
import { calOtherCAPURIs } from "./calOtherCAPURIs.oa.mjs";
import { calOtherCalAdrURIs } from "./calOtherCalAdrURIs.oa.mjs";
import { calOtherCalURIs } from "./calOtherCalURIs.oa.mjs";
import { calOtherFBURLs } from "./calOtherFBURLs.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [calCalURI, calFBURL, calCAPURI, calCalAdrURI, calOtherCalURIs, calOtherFBURLs, calOtherCAPURIs, calOtherCalAdrURIs] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["calEntry"],
    "&ldapDesc": "Calendering and free/busy information" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        87,
    ], msoc) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
