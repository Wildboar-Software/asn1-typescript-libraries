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
 * Octet string of size 1 to 256. The module gives no encoding.
 *
 * Table A.3.3 names subscriber controlled input data as
 * `dSS1-parameters-codeset-0` or `sciData`. Clause A.5.5 sends activation,
 * deactivation, and interrogation of supplementary services in an IRI-REPORT.
 * When the target uses the DSS1 functional protocol (EN 300 196-1), the
 * functional information elements are copied as received by the target
 * exchange. For an analogue target, or the ISDN keypad protocol (EN 300
 * 122-1), other parameters are used: the string sent by the user, or
 * system-specific parameters that identify the service. The IRI-REPORT
 * indicates whether the target's request was processed successfully. A remote
 * change to the target's subscriber data is reported as if the control
 * procedure had been local.
 *
 * Table A.8.2 maps non-call-related subscriber controlled input which the
 * MSC/VLR receives from the ME to party information `sciData`. Clause A.5.5
 * does not define this octet layout.
 *
 * Clause D.1's general rule for an OCTET STRING puts the most significant
 * half-octet in bits 5 to 8 and the least significant half-octet in bits 1 to
 * 4. No imported format is named here, and no octet layout is stated.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.5.5, table A.3.3, table A.8.2,
 * clause D.1, annex D, clause D.5.
 *
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
