/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Signal, _decode_Signal, _encode_Signal } from "../MEDIA-GATEWAY-CONTROL/Signal.ta.mjs";
// export { Signal, _decode_Signal, _encode_Signal } from "../MEDIA-GATEWAY-CONTROL/Signal.ta.mjs";


/**
 * @summary SeqSigList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SeqSigList ::= SEQUENCE
 *     {
 *         id                        [0] INTEGER(0..65535),
 *         signalList                [1] SEQUENCE OF Signal
 *     }
 * ```
 * 
 * @class
 */
export
class SeqSigList {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER,
        /**
         * @summary `signalList`.
         * @public
         * @readonly
         */
        readonly signalList: Signal[]
    ) {}

    /**
     * @summary Restructures an object into a SeqSigList
     * @description
     * 
     * This takes an `object` and converts it to a `SeqSigList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SeqSigList`.
     * @returns {SeqSigList}
     */
    public static _from_object (_o: { [_K in keyof (SeqSigList)]: (SeqSigList)[_K] }): SeqSigList {
        return new SeqSigList(_o.id, _o.signalList);
    }


}

/**
 * @summary The Leading Root Component Types of SeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SeqSigList: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signalList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SeqSigList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SeqSigList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SeqSigList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SeqSigList: $.ASN1Decoder<SeqSigList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SeqSigList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SeqSigList (el: _Element): SeqSigList {
    if (!_cached_decoder_for_SeqSigList) { _cached_decoder_for_SeqSigList = function (el: _Element): SeqSigList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SeqSigList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "signalList";
    let id!: INTEGER;
    let signalList!: Signal[];
    id = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    signalList = $._decode_implicit<Signal[]>(() => $._decodeSequenceOf<Signal>(() => _decode_Signal))(sequence[1]);
    return new SeqSigList(
        id,
        signalList,

    );
}; }
    return _cached_decoder_for_SeqSigList(el);
}

let _cached_encoder_for_SeqSigList: $.ASN1Encoder<SeqSigList> | null = null;

/**
 * @summary Encodes a(n) SeqSigList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SeqSigList, encoded as an ASN.1 Element.
 */
export
function _encode_SeqSigList (value: SeqSigList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SeqSigList) { _cached_encoder_for_SeqSigList = function (value: SeqSigList, elGetter: $.ASN1Encoder<SeqSigList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.id, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Signal>(() => _encode_Signal, $.BER), $.BER)(value.signalList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SeqSigList(value, elGetter);
}


/* eslint-enable */
