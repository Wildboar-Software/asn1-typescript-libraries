/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { ProbableCause, _decode_ProbableCause, _encode_ProbableCause } from "../Attribute-ASN1Module/ProbableCause.ta.mjs";
import { arfProbableCause } from "../Attribute-ASN1Module/arfProbableCause.va.mjs";
/**
 * @summary thresholdCrossed
 * @description
 * 
 * Registered `ProbableCause` `globalValue` `{arfProbableCause 51}` for X.733
 * quality-of-service-alarm notifications. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.733 | ISO/IEC 10164-4 §8.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * thresholdCrossed ProbableCause ::= globalValue:{arfProbableCause 51}
 * ```
 * 
 * @constant
 */
export
const thresholdCrossed: ProbableCause = { globalValue: _OID.fromParts([51,], arfProbableCause) };

/* eslint-enable */
