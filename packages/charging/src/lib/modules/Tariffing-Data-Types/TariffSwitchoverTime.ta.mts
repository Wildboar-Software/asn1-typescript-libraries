/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffSwitchoverTime
 * @description
 *
 * Absolute time of day, GMT, at which the next tariff replaces the
 * current one. One binary octet, in steps of 15 minutes.
 *
 * - `0`: spare.
 * - `1`: 00:15.
 * - `2`: 00:30.
 * - `3`: 00:45.
 * - `4`: 01:00.
 * - `96`: 24:00.
 * - `97` to `255`: spare.
 *
 * A charge determination point shall not send a switch-over more
 * than 23 hours and 45 minutes ahead (clause 6.1 a). The next tariff
 * and this time are always sent together. If the time has already
 * passed when charging starts, the next tariff is the one applied
 * (clauses 6.3.1.4 and 6.3.8).
 *
 * [ES 201 296 V1.3.1, clauses 3.1, 6.1, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSwitchoverTime  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type TariffSwitchoverTime = OCTET_STRING; // OctetStringType
export const _decode_TariffSwitchoverTime = (el: _Element): TariffSwitchoverTime => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("TariffSwitchoverTime violates SIZE constraint");
    }
    return value;
};
export const _encode_TariffSwitchoverTime = $._encodeOctetString;


/* eslint-enable */
