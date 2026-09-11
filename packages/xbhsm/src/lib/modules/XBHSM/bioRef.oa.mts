/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { bhsmpsid } from "../XBHSM/bhsmpsid.va.mjs";
import { type BHSM_PSID } from "../XBHSM/BHSM-PSID.oca.mjs";

/**
 * @summary bioRef
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bioRef  BHSM-PSID ::= {BIT STRING IDENTIFIED BY {bhsmpsid 3}}
 * ```
 *
 * @constant
 * @type {BHSM_PSID}
 * @implements {BHSM_PSID}
 */
export const bioRef: BHSM_PSID = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&id": _OID.fromParts([3], bhsmpsid) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
