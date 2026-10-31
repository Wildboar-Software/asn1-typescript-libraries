/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";

/**
 * @summary labeledURIObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * labeledURIObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN     {labeledURI}
 *     LDAP-NAME       {"labeledURIObject"}
 *     LDAP-DESC       "RFC2079: object that contains the URI attribute type"
 *     ID              { 1 3 6 1 4 1 250 3 15 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const labeledURIObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [labeledURI] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["labeledURIObject"],
    "&ldapDesc": "RFC2079: object that contains the URI attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        1,
        3,
        6,
        1,
        4,
        1,
        250,
        3,
        15,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
