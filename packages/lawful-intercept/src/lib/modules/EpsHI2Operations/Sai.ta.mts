/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sai
 * @description
 * 
 * Service area identity: seven octets. Octets 1 to 3 are the PLMN identity,
 * octets 4 and 5 the LAC, and octets 6 and 7 the SAC, according to 3GPP TS
 * 25.413 (module comment). Clause 6 carries it in the location of the target at
 * the SGSN. Clause 10 LALS reports can carry the same location parameter
 * (locationOfTheTarget in clause 10.5.2). EPS bearer location uses the EPS
 * location parameter, which does not include this service area identity.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sai                 ::=     OCTET STRING (SIZE (7))
 * ```
 */
export
type Sai = OCTET_STRING; // OctetStringType
export const _decode_Sai: $.ASN1Decoder<Sai> = (el: _Element): Sai => {
    const value = $._decodeOctetString(el);
    if (value.length < 7 || value.length > 7) {
        throw new ASN1SizeError("Sai violates SIZE constraint");
    }
    return value;
};
export const _encode_Sai: $.ASN1Encoder<Sai> = $._encodeOctetString;


/* eslint-enable */
