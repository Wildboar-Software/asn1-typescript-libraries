/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
import { id_ce_statusReferrals } from "../CertificateExtensions/id-ce-statusReferrals.va.js";
import {
    StatusReferrals,
    _decode_StatusReferrals,
    _encode_StatusReferrals,
} from "../CertificateExtensions/StatusReferrals.ta.js";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.js";
export { id_ce_statusReferrals } from "../CertificateExtensions/id-ce-statusReferrals.va.js";
export {
    StatusReferrals,
    _decode_StatusReferrals,
    _encode_StatusReferrals,
} from "../CertificateExtensions/StatusReferrals.ta.js";

/* START_OF_SYMBOL_DEFINITION statusReferrals */
/**
 * @summary statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * statusReferrals EXTENSION ::= {
 *   SYNTAX         StatusReferrals
 *   IDENTIFIED BY  id-ce-statusReferrals }
 * ```
 *
 * @constant
 * @type {EXTENSION<StatusReferrals>}
 * @implements {EXTENSION<StatusReferrals>}
 */
export const statusReferrals: EXTENSION<StatusReferrals> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_StatusReferrals,
    },
    encoderFor: {
        "&ExtnType": _encode_StatusReferrals,
    },
    "&id": id_ce_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION statusReferrals */

/* eslint-enable */
