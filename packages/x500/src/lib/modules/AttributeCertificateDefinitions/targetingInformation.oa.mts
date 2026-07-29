/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { id_ce_targetingInformation } from "../AttributeCertificateDefinitions/id-ce-targetingInformation.va.mjs";
import {
    Targets,
    _decode_Targets,
    _encode_Targets,
} from "../AttributeCertificateDefinitions/Targets.ta.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
/**
 * @summary targetingInformation
 * @description
 * 
 * Just a heads up: the fact that this syntax is a `SEQUENCE OF SEQUENCE OF`
 * means absolutely nothing. I think it was a mistake that is part of the
 * permanent specification now. IETF RFC 5755 says that this extension
 * should always only have a single `Targets`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * targetingInformation EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF Targets
 *   IDENTIFIED BY  id-ce-targetingInformation }
 * ```
 *
 * @constant
 * @type {EXTENSION<Targets[]>}
 * @implements {EXTENSION<Targets[]>}
 */
export const targetingInformation: EXTENSION<Targets[]> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<Targets>(() => _decode_Targets),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<Targets>(() => _encode_Targets, $.DER),
    },
    "&id": id_ce_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
