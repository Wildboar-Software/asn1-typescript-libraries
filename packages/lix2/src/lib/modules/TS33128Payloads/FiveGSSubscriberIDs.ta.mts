/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGSSubscriberID, _decode_FiveGSSubscriberID, _encode_FiveGSSubscriberID } from "../TS33128Payloads/FiveGSSubscriberID.ta.mjs";
// export { FiveGSSubscriberID, _decode_FiveGSSubscriberID, _encode_FiveGSSubscriberID } from "../TS33128Payloads/FiveGSSubscriberID.ta.mjs";


/**
 * @summary FiveGSSubscriberIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSSubscriberIDs ::= SEQUENCE
 * {
 *     fiveGSSubscriberID [1] SEQUENCE SIZE(1..MAX) OF FiveGSSubscriberID
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSSubscriberIDs {
    constructor (
        /**
         * @summary `fiveGSSubscriberID`.
         * @public
         * @readonly
         */
        readonly fiveGSSubscriberID: FiveGSSubscriberID[]
    ) {}

    /**
     * @summary Restructures an object into a FiveGSSubscriberIDs
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSSubscriberIDs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSSubscriberIDs`.
     * @returns {FiveGSSubscriberIDs}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSSubscriberIDs)]: (FiveGSSubscriberIDs)[_K] }): FiveGSSubscriberIDs {
        return new FiveGSSubscriberIDs(_o.fiveGSSubscriberID);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSSubscriberIDs: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSSubscriberID", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FiveGSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSSubscriberIDs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSSubscriberIDs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSSubscriberIDs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSSubscriberIDs: $.ASN1Decoder<FiveGSSubscriberIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSSubscriberIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSSubscriberIDs (el: _Element): FiveGSSubscriberIDs {
    if (!_cached_decoder_for_FiveGSSubscriberIDs) { _cached_decoder_for_FiveGSSubscriberIDs = function (el: _Element): FiveGSSubscriberIDs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("FiveGSSubscriberIDs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fiveGSSubscriberID";
    let fiveGSSubscriberID!: FiveGSSubscriberID[];
    fiveGSSubscriberID = $._decode_implicit<FiveGSSubscriberID[]>(() => $._decodeSequenceOf<FiveGSSubscriberID>(() => _decode_FiveGSSubscriberID))(sequence[0]);
    return new FiveGSSubscriberIDs(
        fiveGSSubscriberID,

    );
}; }
    return _cached_decoder_for_FiveGSSubscriberIDs(el);
}

let _cached_encoder_for_FiveGSSubscriberIDs: $.ASN1Encoder<FiveGSSubscriberIDs> | null = null;

/**
 * @summary Encodes a(n) FiveGSSubscriberIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSSubscriberIDs, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSSubscriberIDs (value: FiveGSSubscriberIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSSubscriberIDs) { _cached_encoder_for_FiveGSSubscriberIDs = function (value: FiveGSSubscriberIDs, elGetter: $.ASN1Encoder<FiveGSSubscriberIDs>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<FiveGSSubscriberID>(() => _encode_FiveGSSubscriberID, $.BER), $.BER)(value.fiveGSSubscriberID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGSSubscriberIDs(value, elGetter);
}


/* eslint-enable */
