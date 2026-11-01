/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVersusUser } from "../Ldapmigration97sonia/id-oc-soniaVersusUser.va.mjs";
import { versusOrgChangeOrigin } from "../Ldapmigration97sonia/versusOrgChangeOrigin.oa.mjs";
import { versusOrgChangeTarget } from "../Ldapmigration97sonia/versusOrgChangeTarget.oa.mjs";
import { versusOrgChangeRequest } from "../Ldapmigration97sonia/versusOrgChangeRequest.oa.mjs";
import { versusOrgChangeRequestor } from "../Ldapmigration97sonia/versusOrgChangeRequestor.oa.mjs";


/**
 * @summary soniaVersusUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaVersusUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { versusOrgChangeOrigin
 *                               | versusOrgChangeTarget
 *                               | versusOrgChangeRequest
 *                               | versusOrgChangeRequestor }
 *   LDAP-NAME                 {"SoniaVersusUser"}
 *   ID                        id-oc-soniaVersusUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaVersusUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ versusOrgChangeOrigin, versusOrgChangeTarget, versusOrgChangeRequest, versusOrgChangeRequestor, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SoniaVersusUser" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaVersusUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

