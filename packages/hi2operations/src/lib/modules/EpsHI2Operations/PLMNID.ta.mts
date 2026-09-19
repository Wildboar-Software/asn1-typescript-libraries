/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCC, _decode_MCC, _encode_MCC } from "../EpsHI2Operations/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../EpsHI2Operations/MCC.ta.mjs";
import { MNC, _decode_MNC, _encode_MNC } from "../EpsHI2Operations/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../EpsHI2Operations/MNC.ta.mjs";


/**
 * @summary PLMNID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNID ::= SEQUENCE
 * {
 *  mCC [1] MCC,
 *  mNC [2] MNC,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class PLMNID {
    constructor (
        /**
         * @summary `mCC`.
         * @public
         * @readonly
         */
        readonly mCC: MCC,
        /**
         * @summary `mNC`.
         * @public
         * @readonly
         */
        readonly mNC: MNC,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PLMNID
     * @description
     * 
     * This takes an `object` and converts it to a `PLMNID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PLMNID`.
     * @returns {PLMNID}
     */
    public static _from_object (_o: { [_K in keyof (PLMNID)]: (PLMNID)[_K] }): PLMNID {
        return new PLMNID(_o.mCC, _o.mNC, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PLMNID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PLMNID: $.ComponentSpec[] = [
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PLMNID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PLMNID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PLMNID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PLMNID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PLMNID: $.ASN1Decoder<PLMNID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMNID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMNID (el: _Element): PLMNID {
    if (!_cached_decoder_for_PLMNID) { _cached_decoder_for_PLMNID = function (el: _Element): PLMNID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PLMNID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCC";
    sequence[1].name = "mNC";
    let mCC!: MCC;
    let mNC!: MNC;
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[0]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[1]);
    return new PLMNID(
        mCC,
        mNC,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PLMNID(el);
}

let _cached_encoder_for_PLMNID: $.ASN1Encoder<PLMNID> | null = null;

/**
 * @summary Encodes a(n) PLMNID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMNID, encoded as an ASN.1 Element.
 */
export
function _encode_PLMNID (value: PLMNID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMNID) { _cached_encoder_for_PLMNID = function (value: PLMNID, elGetter: $.ASN1Encoder<PLMNID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCC, $.BER)(value.mCC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MNC, $.BER)(value.mNC, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PLMNID(value, elGetter);
}


/* eslint-enable */
