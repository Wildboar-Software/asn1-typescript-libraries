/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PerceivedSeverity, _enum_for_PerceivedSeverity, _decode_PerceivedSeverity, _encode_PerceivedSeverity } from "../Attribute-ASN1Module/PerceivedSeverity.ta.mjs";
/**
 * @summary SecurityAlarmSeverity
 * @description
 * 
 * `PerceivedSeverity` constrained to exclude `cleared` (indeterminate |
 * critical | major | minor | warning). MATCHES FOR EQUALITY. `{smi2AttributeID
 * 23}`. ITU-T Rec. X.721 (02/92) §10.7.1.18, §14.2; ITU-T Rec. X.736 | ISO/IEC
 * 10164-7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmSeverity  ::= 
 *   PerceivedSeverity(indeterminate | critical | major | minor | warning)
 * ```
 */
export
type SecurityAlarmSeverity = PerceivedSeverity; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmSeverity} The decoded data structure.
 */
export const _decode_SecurityAlarmSeverity: $.ASN1Decoder<SecurityAlarmSeverity> = _decode_PerceivedSeverity;

/**
 * @summary Encodes a(n) SecurityAlarmSeverity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmSeverity, encoded as an ASN.1 Element.
 */
export const _encode_SecurityAlarmSeverity: $.ASN1Encoder<SecurityAlarmSeverity> = _encode_PerceivedSeverity;


/* eslint-enable */
