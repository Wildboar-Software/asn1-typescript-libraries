/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { bhsmpsid } from "../XBHSM/bhsmpsid.va.mjs";
import { type BHSM_PSID } from "../XBHSM/BHSM-PSID.oca.mjs";

/**
 * @summary bioRef
 * @description
 *
 * `BHSM-PSID` information object: a `BIT STRING` identified by
 * `{bhsmpsid 3}` (`1.0.17922.2.1.3`). Only named object in
 * `SupportedBHSM-PSID`
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). The spec does not describe the
 * BIT STRING contents or how this object is used beyond the
 * ASN.1 assignment.
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
