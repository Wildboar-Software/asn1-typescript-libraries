/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { dicomHostname } from "../LdapDicom/dicomHostname.oa.mjs";
import { id_oc_dicomNetworkConnection } from "../LdapDicom/id-oc-dicomNetworkConnection.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { dicomInstalled } from "./dicomInstalled.oa.mjs";
import { dicomPort } from "./dicomPort.oa.mjs";
import { dicomTLSCipherSuite } from "./dicomTLSCipherSuite.oa.mjs";

/**
 * @summary dicomNetworkConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomNetworkConnection OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomHostname }
 *   MAY CONTAIN               { commonName
 *                               | dicomPort
 *                               | dicomTLSCipherSuite
 *                               | dicomInstalled }
 *   LDAP-NAME                 {"dicomNetworkConnection"}
 *   LDAP-DESC                 "DICOM Network Connection information"
 *   ID                        id-oc-dicomNetworkConnection }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomNetworkConnection: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dicomHostname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, dicomPort, dicomTLSCipherSuite, dicomInstalled] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomNetworkConnection"],
    "&ldapDesc": "DICOM Network Connection information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomNetworkConnection /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
