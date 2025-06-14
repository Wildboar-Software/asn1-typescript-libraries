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
} from 'asn1-ts';
import {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta.mjs';
import {
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.mjs';
/* START_OF_SYMBOL_DEFINITION nullBidirectionalValues */
/**
 * @summary nullBidirectionalValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullBidirectionalValues BidirectionalValues ::= {incoming dontCare:NULL, outgoing dontCare:NULL}
 * ```
 *
 * @constant
 */
export const nullBidirectionalValues: BidirectionalValues = BidirectionalValues._from_object(
    { incoming: { dontCare: null }, outgoing: { dontCare: null } }
);
/* END_OF_SYMBOL_DEFINITION nullBidirectionalValues */

/* eslint-enable */
