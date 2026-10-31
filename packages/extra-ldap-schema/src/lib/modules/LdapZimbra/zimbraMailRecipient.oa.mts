/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraMailRecipient } from "../LdapZimbra/id-oc-zimbraMailRecipient.va.mjs";
import { zimbraHideInGal } from "./zimbraHideInGal.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraMailAddress } from "./zimbraMailAddress.oa.mjs";
import { zimbraMailAlias } from "./zimbraMailAlias.oa.mjs";
import { zimbraMailCanonicalAddress } from "./zimbraMailCanonicalAddress.oa.mjs";
import { zimbraMailCatchAllAddress } from "./zimbraMailCatchAllAddress.oa.mjs";
import { zimbraMailCatchAllCanonicalAddress } from "./zimbraMailCatchAllCanonicalAddress.oa.mjs";
import { zimbraMailCatchAllForwardingAddress } from "./zimbraMailCatchAllForwardingAddress.oa.mjs";
import { zimbraMailDeliveryAddress } from "./zimbraMailDeliveryAddress.oa.mjs";
import { zimbraMailForwardingAddress } from "./zimbraMailForwardingAddress.oa.mjs";
import { zimbraMailHost } from "./zimbraMailHost.oa.mjs";
import { zimbraMailStatus } from "./zimbraMailStatus.oa.mjs";
import { zimbraMailTransport } from "./zimbraMailTransport.oa.mjs";

/**
 * @summary zimbraMailRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailRecipient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { zimbraHideInGal
 *                               | zimbraLocale
 *                               | zimbraMailAddress
 *                               | zimbraMailAlias
 *                               | zimbraMailCanonicalAddress
 *                               | zimbraMailCatchAllAddress
 *                               | zimbraMailCatchAllCanonicalAddress
 *                               | zimbraMailCatchAllForwardingAddress
 *                               | zimbraMailDeliveryAddress
 *                               | zimbraMailForwardingAddress
 *                               | zimbraMailHost
 *                               | zimbraMailStatus
 *                               | zimbraMailTransport }
 *   LDAP-NAME                 {"zimbraMailRecipient"}
 *   LDAP-DESC                 "Mail recipient object"
 *   ID                        id-oc-zimbraMailRecipient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraMailRecipient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraHideInGal, zimbraLocale, zimbraMailAddress, zimbraMailAlias, zimbraMailCanonicalAddress, zimbraMailCatchAllAddress, zimbraMailCatchAllCanonicalAddress, zimbraMailCatchAllForwardingAddress, zimbraMailDeliveryAddress, zimbraMailForwardingAddress, zimbraMailHost, zimbraMailStatus, zimbraMailTransport] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraMailRecipient"],
    "&ldapDesc": "Mail recipient object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraMailRecipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
