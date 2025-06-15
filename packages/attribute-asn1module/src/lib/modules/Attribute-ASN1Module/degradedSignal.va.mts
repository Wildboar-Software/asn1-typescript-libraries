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
} from "asn1-ts";
import { ProbableCause, _decode_ProbableCause, _encode_ProbableCause } from "../Attribute-ASN1Module/ProbableCause.ta.mjs";
import { arfProbableCause } from "../Attribute-ASN1Module/arfProbableCause.va.mjs";
/**
 * @summary degradedSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * degradedSignal ProbableCause ::= globalValue:{arfProbableCause 12}
 * ```
 * 
 * @constant
 */
export
const degradedSignal: ProbableCause = { globalValue: new _OID([12,], arfProbableCause) };

/* eslint-enable */
