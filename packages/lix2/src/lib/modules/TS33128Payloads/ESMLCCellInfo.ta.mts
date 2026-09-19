/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { CellPortionID, _decode_CellPortionID, _encode_CellPortionID } from "../TS33128Payloads/CellPortionID.ta.mjs";
// export { CellPortionID, _decode_CellPortionID, _encode_CellPortionID } from "../TS33128Payloads/CellPortionID.ta.mjs";


/**
 * @summary ESMLCCellInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMLCCellInfo ::= SEQUENCE
 * {
 *     eCGI          [1] ECGI,
 *     cellPortionID [2] CellPortionID
 * }
 * ```
 * 
 * @class
 */
export
class ESMLCCellInfo {
    constructor (
        /**
         * @summary `eCGI`.
         * @public
         * @readonly
         */
        readonly eCGI: ECGI,
        /**
         * @summary `cellPortionID`.
         * @public
         * @readonly
         */
        readonly cellPortionID: CellPortionID
    ) {}

    /**
     * @summary Restructures an object into a ESMLCCellInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ESMLCCellInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ESMLCCellInfo`.
     * @returns {ESMLCCellInfo}
     */
    public static _from_object (_o: { [_K in keyof (ESMLCCellInfo)]: (ESMLCCellInfo)[_K] }): ESMLCCellInfo {
        return new ESMLCCellInfo(_o.eCGI, _o.cellPortionID);
    }


}

/**
 * @summary The Leading Root Component Types of ESMLCCellInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ESMLCCellInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("eCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellPortionID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ESMLCCellInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ESMLCCellInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ESMLCCellInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ESMLCCellInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ESMLCCellInfo: $.ASN1Decoder<ESMLCCellInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ESMLCCellInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ESMLCCellInfo (el: _Element): ESMLCCellInfo {
    if (!_cached_decoder_for_ESMLCCellInfo) { _cached_decoder_for_ESMLCCellInfo = function (el: _Element): ESMLCCellInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ESMLCCellInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eCGI";
    sequence[1].name = "cellPortionID";
    let eCGI!: ECGI;
    let cellPortionID!: CellPortionID;
    eCGI = $._decode_implicit<ECGI>(() => _decode_ECGI)(sequence[0]);
    cellPortionID = $._decode_implicit<CellPortionID>(() => _decode_CellPortionID)(sequence[1]);
    return new ESMLCCellInfo(
        eCGI,
        cellPortionID,

    );
}; }
    return _cached_decoder_for_ESMLCCellInfo(el);
}

let _cached_encoder_for_ESMLCCellInfo: $.ASN1Encoder<ESMLCCellInfo> | null = null;

/**
 * @summary Encodes a(n) ESMLCCellInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ESMLCCellInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ESMLCCellInfo (value: ESMLCCellInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ESMLCCellInfo) { _cached_encoder_for_ESMLCCellInfo = function (value: ESMLCCellInfo, elGetter: $.ASN1Encoder<ESMLCCellInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ECGI, $.BER)(value.eCGI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CellPortionID, $.BER)(value.cellPortionID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ESMLCCellInfo(value, elGetter);
}


/* eslint-enable */
