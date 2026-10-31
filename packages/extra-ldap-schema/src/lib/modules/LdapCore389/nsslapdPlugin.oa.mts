/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsslapdPlugin } from "../LdapCore389/id-oc-nsslapdPlugin.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsslapd_plugin_depends_on_type } from "./nsslapd-plugin-depends-on-type.oa.mjs";
import { nsslapd_pluginConfigArea } from "./nsslapd-pluginConfigArea.oa.mjs";
import { nsslapd_pluginDescription } from "./nsslapd-pluginDescription.oa.mjs";
import { nsslapd_pluginEnabled } from "./nsslapd-pluginEnabled.oa.mjs";
import { nsslapd_pluginId } from "./nsslapd-pluginId.oa.mjs";
import { nsslapd_pluginInitfunc } from "./nsslapd-pluginInitfunc.oa.mjs";
import { nsslapd_pluginPath } from "./nsslapd-pluginPath.oa.mjs";
import { nsslapd_pluginType } from "./nsslapd-pluginType.oa.mjs";
import { nsslapd_pluginVendor } from "./nsslapd-pluginVendor.oa.mjs";
import { nsslapd_pluginVersion } from "./nsslapd-pluginVersion.oa.mjs";

/**
 * @summary nsslapdPlugin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsslapdPlugin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsslapd-pluginPath
 *                               | nsslapd-pluginInitfunc
 *                               | nsslapd-pluginType
 *                               | nsslapd-pluginId
 *                               | nsslapd-pluginVersion
 *                               | nsslapd-pluginVendor
 *                               | nsslapd-pluginDescription
 *                               | nsslapd-pluginEnabled }
 *   MAY CONTAIN               { nsslapd-pluginConfigArea
 *                               | nsslapd-plugin-depends-on-type }
 *   LDAP-NAME                 {"nsslapdPlugin"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsslapdPlugin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsslapdPlugin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, nsslapd_pluginPath, nsslapd_pluginInitfunc, nsslapd_pluginType, nsslapd_pluginId, nsslapd_pluginVersion, nsslapd_pluginVendor, nsslapd_pluginDescription, nsslapd_pluginEnabled] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsslapd_pluginConfigArea, nsslapd_plugin_depends_on_type] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsslapdPlugin"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsslapdPlugin /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
