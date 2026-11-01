/* eslint-disable */
import { account } from "../Cosine/account.oa.mjs";
// export { account } from "../Cosine/account.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { id_nf_accountNameForm } from "../Cosine/id-nf-accountNameForm.va.mjs";
// export { id_nf_accountNameForm } from "../Cosine/id-nf-accountNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary accountNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accountNameForm NAME-FORM ::= {
 *     NAMES                account
 *     WITH ATTRIBUTES        {uid}
 *     LDAP-NAME            {"accountNameForm"}
 *     ID                    id-nf-accountNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const accountNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": account /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "accountNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_accountNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
