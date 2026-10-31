/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomTransferCapability } from "../LdapDicom/id-oc-dicomTransferCapability.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dicomSOPClass } from "./dicomSOPClass.oa.mjs";
import { dicomTransferRole } from "./dicomTransferRole.oa.mjs";
import { dicomTransferSyntax } from "./dicomTransferSyntax.oa.mjs";

/**
 * @summary dicomTransferCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomTransferCapability OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomSOPClass
 *                               | dicomTransferRole
 *                               | dicomTransferSyntax }
 *   MAY CONTAIN               { commonName }
 *   LDAP-NAME                 {"dicomTransferCapability"}
 *   LDAP-DESC                 "Transfer Capabilities for an Application Entity"
 *   ID                        id-oc-dicomTransferCapability }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomTransferCapability: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dicomSOPClass, dicomTransferRole, dicomTransferSyntax] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomTransferCapability"],
    "&ldapDesc": "Transfer Capabilities for an Application Entity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomTransferCapability /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
