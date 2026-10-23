/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSCommunicationServiceIdentifier
 * @description
 *
 * IMS communication service identifier. Downstream of the originating
 * S-CSCF it is taken from P-Asserted-Service in the request. Upstream of
 * that S-CSCF it is taken from the topmost +g.3gpp.icsi-ref parameter of
 * Feature-Caps in the response (clause 6.3.1.2).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This parameter holds the IMS Communication Service Identifier (ICSI) as
 * contained in the P-Asserted-Service header of a SIP request to identify an
 * IMS Communication Service as defined in TS 24.229 [210].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.20.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCommunicationServiceIdentifier  ::=  OCTET STRING
 * ```
 */
export
type IMSCommunicationServiceIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_IMSCommunicationServiceIdentifier: $.ASN1Decoder<IMSCommunicationServiceIdentifier> = $._decodeOctetString;

export
const _encode_IMSCommunicationServiceIdentifier: $.ASN1Encoder<IMSCommunicationServiceIdentifier> = $._encodeOctetString;

/* eslint-enable */
