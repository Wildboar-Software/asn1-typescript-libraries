/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomNetworkAE } from "../LdapDicom/id-oc-dicomNetworkAE.va.mjs";

import { dicomDescription } from "../LdapDicom/dicomDescription.oa.mjs";
import { dicomVendorData } from "../LdapDicom/dicomVendorData.oa.mjs";
import { dicomApplicationCluster } from "../LdapDicom/dicomApplicationCluster.oa.mjs";
import { dicomPreferredCalledAETitle } from "../LdapDicom/dicomPreferredCalledAETitle.oa.mjs";
import { dicomPreferredCallingAETitle } from "../LdapDicom/dicomPreferredCallingAETitle.oa.mjs";
import { dicomSupportedCharacterSet } from "../LdapDicom/dicomSupportedCharacterSet.oa.mjs";
import { dicomInstalled } from "../LdapDicom/dicomInstalled.oa.mjs";
import { dicomAETitle } from "../LdapDicom/dicomAETitle.oa.mjs";
import { dicomNetworkConnectionReference } from "../LdapDicom/dicomNetworkConnectionReference.oa.mjs";
import { dicomAssociationInitiator } from "../LdapDicom/dicomAssociationInitiator.oa.mjs";
import { dicomAssociationAcceptor } from "../LdapDicom/dicomAssociationAcceptor.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dicomAETitle, dicomNetworkConnectionReference, dicomAssociationInitiator, dicomAssociationAcceptor, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dicomDescription, dicomVendorData, dicomApplicationCluster, dicomPreferredCalledAETitle, dicomPreferredCallingAETitle, dicomSupportedCharacterSet, dicomInstalled, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dicomNetworkAE" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DICOM Network AE related information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomNetworkAE /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
