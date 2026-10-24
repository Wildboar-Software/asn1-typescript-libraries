/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPCIoTEPSOptimisationIndicator
 * @description
 * 
 * Whether Control Plane CIoT EPS Optimisation is used for this transfer
 * (Control Plane NAS PDU via S11-U between S-GW and MME) or not (user
 * plane via S1-U between S-GW and eNB), when the feature is enabled (table
 * 6.1.2.1). A change of user plane closes the open S-GW volume containers
 * (clause 5.2.3.3.1). Clause 6.3.1.2 notes that how this indicator is
 * handled when charging per IP-CAN session is active is still for further
 * study.
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPCIoTEPSOptimisationIndicator  ::=  BOOLEAN
 * ```
 */
export
type CPCIoTEPSOptimisationIndicator = BOOLEAN; // BooleanType

export
const _decode_CPCIoTEPSOptimisationIndicator: $.ASN1Decoder<CPCIoTEPSOptimisationIndicator> = $._decodeBoolean;

export
const _encode_CPCIoTEPSOptimisationIndicator: $.ASN1Encoder<CPCIoTEPSOptimisationIndicator> = $._encodeBoolean;

/* eslint-enable */
