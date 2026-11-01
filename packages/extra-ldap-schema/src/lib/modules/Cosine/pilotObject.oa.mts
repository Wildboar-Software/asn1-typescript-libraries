/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pilotObject } from "../Cosine/id-oc-pilotObject.va.mjs";
import { info } from "../Cosine/info.oa.mjs";
import { manager } from "../Cosine/manager.oa.mjs";
import { uniqueIdentifier } from "../Cosine/uniqueIdentifier.oa.mjs";
import { dITRedirect } from "../Cosine/dITRedirect.oa.mjs";
import { audio } from "../Cosine/audio.oa.mjs";


/**
 * @summary pilotObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotObject OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     MAY CONTAIN {
 *         info
 *         -- | photo
 *         | manager
 *         | uniqueIdentifier
 *         -- | lastModifiedTime
 *         -- | lastModifiedBy
 *         | dITRedirect
 *         | audio
 *     }
 *     LDAP-NAME       {"pilotObject"}
 *     LDAP-DESC       "RFC1274: pilot object"
 *     ID              id-oc-pilotObject
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pilotObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ info, manager, uniqueIdentifier, dITRedirect, audio, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: pilot object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pilotObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

