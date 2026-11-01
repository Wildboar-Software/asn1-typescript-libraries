/* eslint-disable */
import { room } from "../Cosine/room.oa.mjs";
// export { room } from "../Cosine/room.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_roomNameForm } from "../Cosine/id-nf-roomNameForm.va.mjs";
// export { id_nf_roomNameForm } from "../Cosine/id-nf-roomNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary roomNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roomNameForm NAME-FORM ::= {
 *     NAMES                room
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"roomNameForm"}
 *     ID                    id-nf-roomNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const roomNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": room /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "roomNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_roomNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
