/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServingEntity
 * @description
 *
 * E.164 address of the serving node for a GMLC location request.
 * Category C on LCS-GMO-CDR and LCS-GNI-CDR.
 *
 * On an LCS-GMO-CDR this is the serving MSC for a CS-MO-LR, or the
 * serving SGSN for a PS-MO-LR. On an LCS-GNI-CDR it is the serving
 * MSC for a CS-NI-LR, or the serving SGSN for a PS-NI-LR.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.1 and 6.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingEntity  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type ServingEntity = OCTET_STRING; // OctetStringType

export const _decode_ServingEntity = (el: _Element): ServingEntity => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("ServingEntity violates SIZE constraint");
    }
    return value;
};

export
const _encode_ServingEntity: $.ASN1Encoder<ServingEntity> = $._encodeOctetString;

/* eslint-enable */
