import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Digits
 * @description
 *
 * Address signalling digits. ETSI EN 300 356-1 Generic Number and Generic
 * Digits. CAP ignores `NumberQualifier` / `TypeOfDigits` (ASN.1 tags identify
 * the parameter); ISUP still requires those subfields, whose value is
 * network-operator specific.
 *
 * Generic Number: AdditionalCallingPartyNumber (InitialDP),
 * AssistingSSPIPRoutingAddress (EstablishTemporaryConnection), CorrelationID
 * (AssistRequestInstructions), CalledAddressValue and CallingAddressValue (all
 * occurrences).
 *
 * Generic Digits: CorrelationID (EstablishTemporaryConnection), `number` in
 * VariablePart, `digitsResponse` in ReceivedInformationArg, `midCallEvents` in
 * o/tMidCallSpecificInfo. When CorrelationID uses Generic Digits, digits are
 * always BCD.
 *
 * In digitsResponse and midCallEvents, `*`, `#`, a, b, c, d may use IA5. If BCD
 * even/odd is used: `1011` (*), `1100` (#). AssistingSSPIPRoutingAddress (ETC)
 * and CorrelationID (ARI) may contain Hex B; see Annex A.6.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digits {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minDigitsLength .. bound.&maxDigitsLength))
 * ```
 *
 */
export type Digits = OCTET_STRING;
export const _decode_Digits = $._decodeOctetString;
export const _encode_Digits = $._encodeOctetString;
