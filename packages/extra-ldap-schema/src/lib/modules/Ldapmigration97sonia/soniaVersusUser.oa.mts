/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVersusUser } from "../Ldapmigration97sonia/id-oc-soniaVersusUser.va.mjs";
import { versusOrgChangeOrigin } from "./versusOrgChangeOrigin.oa.mjs";
import { versusOrgChangeRequest } from "./versusOrgChangeRequest.oa.mjs";
import { versusOrgChangeRequestor } from "./versusOrgChangeRequestor.oa.mjs";
import { versusOrgChangeTarget } from "./versusOrgChangeTarget.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [versusOrgChangeOrigin, versusOrgChangeTarget, versusOrgChangeRequest, versusOrgChangeRequestor] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SoniaVersusUser"],
    "&id": id_oc_soniaVersusUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
