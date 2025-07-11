/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_extKeyUsage } from "../CertificateExtensions/id-ce-extKeyUsage.va.mjs";
import {
    KeyPurposeId,
    _decode_KeyPurposeId,
    _encode_KeyPurposeId,
} from "../CertificateExtensions/KeyPurposeId.ta.mjs";
/**
 * @summary extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extKeyUsage EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF KeyPurposeId
 *   IDENTIFIED BY  id-ce-extKeyUsage }
 * ```
 *
 * @constant
 * @type {EXTENSION<KeyPurposeId[]>}
 * @implements {EXTENSION<KeyPurposeId[]>}
 */
export const extKeyUsage: EXTENSION<KeyPurposeId[]> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<KeyPurposeId>(
            () => _decode_KeyPurposeId
        ),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<KeyPurposeId>(
            () => _encode_KeyPurposeId,
            $.DER
        ),
    },
    "&id": id_ce_extKeyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
