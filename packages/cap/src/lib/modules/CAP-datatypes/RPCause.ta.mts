import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary RPCause
 * @description
 *
 * RP cause according to 3GPP TS 24.011 or 3GPP TS 29.002. The gsmSCF sends this
 * in ReleaseSMS. For MO-SMS the MSC or SGSN sends it to the originating MS and
 * overwrites the RP-Cause element in the RP-ERROR RPDU. For MT-SMS it is sent
 * to the sending SMS-GMSC and likewise overwrites RP-Cause in the RP-ERROR
 * RPDU. (3GPP TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RPCause ::= OCTET STRING (SIZE (1))
 * ```
 *
 */
export type RPCause = OCTET_STRING;
export const _decode_RPCause = (el: _Element): RPCause => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("RPCause violates SIZE constraint");
    }
    return value;
};
export const _encode_RPCause = $._encodeOctetString;
