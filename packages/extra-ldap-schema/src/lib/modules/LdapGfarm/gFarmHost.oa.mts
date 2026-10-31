/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmHost } from "../LdapGfarm/id-oc-gFarmHost.va.mjs";
import { architecture } from "./architecture.oa.mjs";
import { flags } from "./flags.oa.mjs";
import { fsngroupname } from "./fsngroupname.oa.mjs";
import { hostaliases } from "./hostaliases.oa.mjs";
import { hostname } from "./hostname.oa.mjs";
import { ncpu } from "./ncpu.oa.mjs";
import { port } from "./port.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [hostname, port, architecture, ncpu, flags] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [hostaliases, fsngroupname] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GFarmHost"],
    "&id": id_oc_gFarmHost /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
