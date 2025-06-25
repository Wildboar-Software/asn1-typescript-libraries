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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';

/**
 * @summary ArcProbableCauseList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcProbableCauseList  ::=  SET OF ProbableCause
 * ```
 */
export type ArcProbableCauseList = ProbableCause[]; // SetOfType


let _cached_decoder_for_ArcProbableCauseList: $.ASN1Decoder<ArcProbableCauseList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcProbableCauseList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcProbableCauseList} The decoded data structure.
 */
export function _decode_ArcProbableCauseList(el: _Element): ArcProbableCauseList {
    if (!_cached_decoder_for_ArcProbableCauseList) {
        _cached_decoder_for_ArcProbableCauseList = $._decodeSetOf<ProbableCause>(
            () => _decode_ProbableCause
        );
    }
    return _cached_decoder_for_ArcProbableCauseList(el);
}


let _cached_encoder_for_ArcProbableCauseList: $.ASN1Encoder<ArcProbableCauseList> | null = null;


/**
 * @summary Encodes a(n) ArcProbableCauseList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcProbableCauseList, encoded as an ASN.1 Element.
 */
export function _encode_ArcProbableCauseList(
    value: ArcProbableCauseList,
    elGetter: $.ASN1Encoder<ArcProbableCauseList>
): _Element {
    if (!_cached_encoder_for_ArcProbableCauseList) {
        _cached_encoder_for_ArcProbableCauseList = $._encodeSetOf<ProbableCause>(
            () => _encode_ProbableCause,
            $.BER
        );
    }
    return _cached_encoder_for_ArcProbableCauseList(value, elGetter);
}


/* eslint-enable */
