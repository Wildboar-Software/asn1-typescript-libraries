/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    CRLStreamIdentifier,
    _decode_CRLStreamIdentifier,
    _encode_CRLStreamIdentifier,
} from "../CertificateExtensions/CRLStreamIdentifier.ta.mjs";
import { id_ce_cRLStreamIdentifier } from "../CertificateExtensions/id-ce-cRLStreamIdentifier.va.mjs";
/**
 * @summary cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLStreamIdentifier EXTENSION ::= {
 *   SYNTAX         CRLStreamIdentifier
 *   IDENTIFIED BY  id-ce-cRLStreamIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION<CRLStreamIdentifier>}
 * @implements {EXTENSION<CRLStreamIdentifier>}
 */
export const cRLStreamIdentifier: EXTENSION<CRLStreamIdentifier> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_CRLStreamIdentifier,
    },
    encoderFor: {
        "&ExtnType": _encode_CRLStreamIdentifier,
    },
    "&id": id_ce_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
