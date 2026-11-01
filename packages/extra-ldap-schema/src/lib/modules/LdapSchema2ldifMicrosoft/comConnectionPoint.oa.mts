/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_comConnectionPoint } from "../LdapSchema2ldifMicrosoft/id-oc-comConnectionPoint.va.mjs";

import { marshalledInterface } from "../MSUser/marshalledInterface.oa.mjs";
import { moniker } from "../MSUser/moniker.oa.mjs";
import { monikerDisplayName } from "../MSUser/monikerDisplayName.oa.mjs";
/**
 * @summary comConnectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * comConnectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { marshalledInterface
 *                               | moniker
 *                               | monikerDisplayName }
 *   LDAP-NAME                 {"comConnectionPoint"}
 *   ID                        id-oc-comConnectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const comConnectionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ connectionPoint, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ marshalledInterface, moniker, monikerDisplayName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "comConnectionPoint" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_comConnectionPoint /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
