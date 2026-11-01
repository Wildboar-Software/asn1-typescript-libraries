/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sunNameSpaceUniqueAttrs } from "../Ldapmigration70sunSchema2/sunNameSpaceUniqueAttrs.oa.mjs";
import { id_oc_sunNameSpace } from "../Ldapmigration70sunSchema2/id-oc-sunNameSpace.va.mjs";


/**
 * @summary sunNameSpace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunNameSpace OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunNameSpaceUniqueAttrs }
 *   LDAP-NAME                 {"sunNameSpace"}
 *   LDAP-DESC                 "Auxiliary class which must be present at the root of a subtree representing a namespace"
 *   ID                        id-oc-sunNameSpace }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunNameSpace: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunNameSpaceUniqueAttrs, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunNameSpace" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auxiliary class which must be present at the root of a subtree representing a namespace" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunNameSpace /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

