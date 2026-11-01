/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmHost } from "../LdapGfarm/id-oc-gFarmHost.va.mjs";

import { hostaliases } from "../LdapGfarm/hostaliases.oa.mjs";
import { fsngroupname } from "../LdapGfarm/fsngroupname.oa.mjs";
import { hostname } from "../LdapGfarm/hostname.oa.mjs";
import { port } from "../LdapGfarm/port.oa.mjs";
import { architecture } from "../LdapGfarm/architecture.oa.mjs";
import { ncpu } from "../LdapGfarm/ncpu.oa.mjs";
import { flags } from "../LdapGfarm/flags.oa.mjs";
/**
 * @summary gFarmHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { hostname
 *                               | port
 *                               | architecture
 *                               | ncpu
 *                               | flags }
 *   MAY CONTAIN               { hostaliases
 *                               | fsngroupname }
 *   LDAP-NAME                 {"GFarmHost"}
 *   ID                        id-oc-gFarmHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ hostname, port, architecture, ncpu, flags, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ hostaliases, fsngroupname, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GFarmHost" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gFarmHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
