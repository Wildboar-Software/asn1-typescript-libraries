/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomNetworkAE } from "../LdapDicom/id-oc-dicomNetworkAE.va.mjs";
import { dicomAETitle } from "./dicomAETitle.oa.mjs";
import { dicomApplicationCluster } from "./dicomApplicationCluster.oa.mjs";
import { dicomAssociationAcceptor } from "./dicomAssociationAcceptor.oa.mjs";
import { dicomAssociationInitiator } from "./dicomAssociationInitiator.oa.mjs";
import { dicomDescription } from "./dicomDescription.oa.mjs";
import { dicomInstalled } from "./dicomInstalled.oa.mjs";
import { dicomNetworkConnectionReference } from "./dicomNetworkConnectionReference.oa.mjs";
import { dicomPreferredCalledAETitle } from "./dicomPreferredCalledAETitle.oa.mjs";
import { dicomPreferredCallingAETitle } from "./dicomPreferredCallingAETitle.oa.mjs";
import { dicomSupportedCharacterSet } from "./dicomSupportedCharacterSet.oa.mjs";
import { dicomVendorData } from "./dicomVendorData.oa.mjs";

/**
 * @summary dicomNetworkAE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomNetworkAE OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomAETitle
 *                               | dicomNetworkConnectionReference
 *                               | dicomAssociationInitiator
 *                               | dicomAssociationAcceptor }
 *   MAY CONTAIN               { dicomDescription
 *                               | dicomVendorData
 *                               | dicomApplicationCluster
 *                               | dicomPreferredCalledAETitle
 *                               | dicomPreferredCallingAETitle
 *                               | dicomSupportedCharacterSet
 *                               | dicomInstalled }
 *   LDAP-NAME                 {"dicomNetworkAE"}
 *   LDAP-DESC                 "DICOM Network AE related information"
 *   ID                        id-oc-dicomNetworkAE }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomNetworkAE: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dicomAETitle, dicomNetworkConnectionReference, dicomAssociationInitiator, dicomAssociationAcceptor] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dicomDescription, dicomVendorData, dicomApplicationCluster, dicomPreferredCalledAETitle, dicomPreferredCallingAETitle, dicomSupportedCharacterSet, dicomInstalled] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomNetworkAE"],
    "&ldapDesc": "DICOM Network AE related information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomNetworkAE /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
