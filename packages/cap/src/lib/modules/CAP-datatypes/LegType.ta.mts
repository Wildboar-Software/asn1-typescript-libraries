import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary LegType
 * @description
 *
 * Sending Side LegID is always gsmSCF → gsmSSF; Receiving Side LegID is
 * always gsmSSF → gsmSCF.
 *
 * Leg 1 = calling party present when InitialDP is sent. Leg 2 = called party
 * created by InitialDP plus Connect, Continue, or ContinueWithArgument. Leg > 2
 * = called party created by InitiateCallAttempt plus ContinueWithArgument.
 * (3GPP TS 29.078 V19.0.0 clause 4.1.5)
 *
 * ASN.1 values: `leg1` = `'01'H`, `leg2` = `'02'H`. (3GPP TS 29.078 V19.0.0
 * clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LegType ::= OCTET STRING (SIZE(1))
 * leg1 LegType	::= '01'H
 * leg2 LegType	::= '02'H
 * ```
 *
 */
export type LegType = OCTET_STRING;
export const _decode_LegType = (el: _Element): LegType => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("LegType violates SIZE constraint");
    }
    return value;
};
export const _encode_LegType = $._encodeOctetString;
