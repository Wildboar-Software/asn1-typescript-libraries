/* eslint-disable */
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_ce_userNotice } from "../AttributeCertificateDefinitions/id-ce-userNotice.va.mjs";
import {
    UserNotice,
    _decode_UserNotice,
    _encode_UserNotice,
} from "../AttributeCertificateDefinitions/UserNotice.ta.mjs";
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userNotice EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF UserNotice
 *   IDENTIFIED BY  id-ce-userNotice }
 * ```
 *
 * @constant
 * @type {EXTENSION<UserNotice[]>}
 * @implements {EXTENSION<UserNotice[]>}
 */
export const userNotice: EXTENSION<UserNotice[]> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<UserNotice>(() => _decode_UserNotice),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<UserNotice>(
            () => _encode_UserNotice,
            $.DER
        ),
    },
    "&id": id_ce_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
