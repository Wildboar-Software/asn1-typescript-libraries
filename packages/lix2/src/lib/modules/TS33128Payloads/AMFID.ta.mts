/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFRegionID, _decode_AMFRegionID, _encode_AMFRegionID } from "../TS33128Payloads/AMFRegionID.ta.mjs";
// export { AMFRegionID, _decode_AMFRegionID, _encode_AMFRegionID } from "../TS33128Payloads/AMFRegionID.ta.mjs";
import { AMFSetID, _decode_AMFSetID, _encode_AMFSetID } from "../TS33128Payloads/AMFSetID.ta.mjs";
// export { AMFSetID, _decode_AMFSetID, _encode_AMFSetID } from "../TS33128Payloads/AMFSetID.ta.mjs";
import { AMFPointer, _decode_AMFPointer, _encode_AMFPointer } from "../TS33128Payloads/AMFPointer.ta.mjs";
// export { AMFPointer, _decode_AMFPointer, _encode_AMFPointer } from "../TS33128Payloads/AMFPointer.ta.mjs";


/**
 * @summary AMFID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFID ::= SEQUENCE
 * {
 *     aMFRegionID [1] AMFRegionID,
 *     aMFSetID    [2] AMFSetID,
 *     aMFPointer  [3] AMFPointer
 * }
 * ```
 * 
 * @class
 */
export
class AMFID {
    constructor (
        /**
         * @summary `aMFRegionID`.
         * @public
         * @readonly
         */
        readonly aMFRegionID: AMFRegionID,
        /**
         * @summary `aMFSetID`.
         * @public
         * @readonly
         */
        readonly aMFSetID: AMFSetID,
        /**
         * @summary `aMFPointer`.
         * @public
         * @readonly
         */
        readonly aMFPointer: AMFPointer
    ) {}

    /**
     * @summary Restructures an object into a AMFID
     * @description
     * 
     * This takes an `object` and converts it to a `AMFID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFID`.
     * @returns {AMFID}
     */
    public static _from_object (_o: { [_K in keyof (AMFID)]: (AMFID)[_K] }): AMFID {
        return new AMFID(_o.aMFRegionID, _o.aMFSetID, _o.aMFPointer);
    }


}

/**
 * @summary The Leading Root Component Types of AMFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFID: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFRegionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aMFSetID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aMFPointer", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AMFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFID: $.ASN1Decoder<AMFID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFID (el: _Element): AMFID {
    if (!_cached_decoder_for_AMFID) { _cached_decoder_for_AMFID = function (el: _Element): AMFID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AMFID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aMFRegionID";
    sequence[1].name = "aMFSetID";
    sequence[2].name = "aMFPointer";
    let aMFRegionID!: AMFRegionID;
    let aMFSetID!: AMFSetID;
    let aMFPointer!: AMFPointer;
    aMFRegionID = $._decode_implicit<AMFRegionID>(() => _decode_AMFRegionID)(sequence[0]);
    aMFSetID = $._decode_implicit<AMFSetID>(() => _decode_AMFSetID)(sequence[1]);
    aMFPointer = $._decode_implicit<AMFPointer>(() => _decode_AMFPointer)(sequence[2]);
    return new AMFID(
        aMFRegionID,
        aMFSetID,
        aMFPointer,

    );
}; }
    return _cached_decoder_for_AMFID(el);
}

let _cached_encoder_for_AMFID: $.ASN1Encoder<AMFID> | null = null;

/**
 * @summary Encodes a(n) AMFID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFID, encoded as an ASN.1 Element.
 */
export
function _encode_AMFID (value: AMFID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFID) { _cached_encoder_for_AMFID = function (value: AMFID, elGetter: $.ASN1Encoder<AMFID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFRegionID, $.BER)(value.aMFRegionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AMFSetID, $.BER)(value.aMFSetID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AMFPointer, $.BER)(value.aMFPointer, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFID(value, elGetter);
}


/* eslint-enable */
