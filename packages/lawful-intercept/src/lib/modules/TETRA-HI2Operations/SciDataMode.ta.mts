/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SciDataMode
 * @description
 * 
 * Subscriber-controlled input. Clause A.3.3 lists it, with DSS1 codeset 0, as
 * the LI-specific parameter for that input. Clause A.5.5 carries activation,
 * deactivation, and interrogation in an IRI-REPORT. DSS1 functional information
 * elements are copied as received. For an analogue target, or for the ISDN
 * keypad protocol, the parameters may be the string the user sent or
 * system-specific parameters that identify the service. The IRI-REPORT shall
 * indicate whether the target's request was processed successfully. The present
 * document does not name that indicator in this octet string, and it does not
 * define the octet contents.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.5.5, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SciDataMode  ::=  OCTET STRING (SIZE (1..256))
 * ```
 */
export
type SciDataMode = OCTET_STRING; // OctetStringType
export const _decode_SciDataMode: $.ASN1Decoder<SciDataMode> = (el: _Element): SciDataMode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 256) {
        throw new ASN1SizeError("SciDataMode violates SIZE constraint");
    }
    return value;
};
export const _encode_SciDataMode: $.ASN1Encoder<SciDataMode> = $._encodeOctetString;


/* eslint-enable */
