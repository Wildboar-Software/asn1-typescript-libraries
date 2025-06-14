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
/* START_OF_SYMBOL_DEFINITION dTE_DCEInterfaceError */
/**
 * @summary dTE_DCEInterfaceError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dTE-DCEInterfaceError ProbableCause ::= globalValue:{arfProbableCause 13}
 * ```
 * 
 * @constant
 */
export
const dTE_DCEInterfaceError: ProbableCause = { globalValue: new _OID([13,], arfProbableCause) };
/* END_OF_SYMBOL_DEFINITION dTE_DCEInterfaceError */

/* eslint-enable */
