/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { AmmDescriptor, _decode_AmmDescriptor, _encode_AmmDescriptor } from "../MEDIA-GATEWAY-CONTROL/AmmDescriptor.ta.mjs";
// export { AmmDescriptor, _decode_AmmDescriptor, _encode_AmmDescriptor } from "../MEDIA-GATEWAY-CONTROL/AmmDescriptor.ta.mjs";


/**
 * @summary AmmRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmmRequest ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         descriptors                    [1] SEQUENCE OF AmmDescriptor,
 *         -- At most one descriptor of each type (see AmmDescriptor)
 *         -- allowed in the sequence.
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class AmmRequest {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `descriptors`.
         * @public
         * @readonly
         */
        readonly descriptors: AmmDescriptor[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AmmRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AmmRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AmmRequest`.
     * @returns {AmmRequest}
     */
    public static _from_object (_o: { [_K in keyof (AmmRequest)]: (AmmRequest)[_K] }): AmmRequest {
        return new AmmRequest(_o.terminationID, _o.descriptors, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AmmRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AmmRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("descriptors", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AmmRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AmmRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AmmRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AmmRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AmmRequest: $.ASN1Decoder<AmmRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmmRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmmRequest (el: _Element): AmmRequest {
    if (!_cached_decoder_for_AmmRequest) { _cached_decoder_for_AmmRequest = function (el: _Element): AmmRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AmmRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationID";
    sequence[1].name = "descriptors";
    let terminationID!: TerminationIDList;
    let descriptors!: AmmDescriptor[];
    terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(sequence[0]);
    descriptors = $._decode_implicit<AmmDescriptor[]>(() => $._decodeSequenceOf<AmmDescriptor>(() => _decode_AmmDescriptor))(sequence[1]);
    return new AmmRequest(
        terminationID,
        descriptors,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AmmRequest(el);
}

let _cached_encoder_for_AmmRequest: $.ASN1Encoder<AmmRequest> | null = null;

/**
 * @summary Encodes a(n) AmmRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmmRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AmmRequest (value: AmmRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmmRequest) { _cached_encoder_for_AmmRequest = function (value: AmmRequest, elGetter: $.ASN1Encoder<AmmRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AmmDescriptor>(() => _encode_AmmDescriptor, $.BER), $.BER)(value.descriptors, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AmmRequest(value, elGetter);
}


/* eslint-enable */
