/* eslint-disable */
import { id_ce_issuedOnBehalfOf } from "../AttributeCertificateDefinitions/id-ce-issuedOnBehalfOf.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuedOnBehalfOf EXTENSION ::= {
 *   SYNTAX         GeneralName
 *   IDENTIFIED BY  id-ce-issuedOnBehalfOf }
 * ```
 *
 * @constant
 * @type {EXTENSION<GeneralName>}
 * @implements {EXTENSION<GeneralName>}
 */
export const issuedOnBehalfOf: EXTENSION<GeneralName> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralName,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralName,
    },
    "&id": id_ce_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
