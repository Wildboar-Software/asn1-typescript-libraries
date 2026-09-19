/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
// export { SIPAccessInfo, _decode_SIPAccessInfo, _encode_SIPAccessInfo } from "../TS33128Payloads/SIPAccessInfo.ta.mjs";
import { SIPCNICellInfoAge, _decode_SIPCNICellInfoAge, _encode_SIPCNICellInfoAge } from "../TS33128Payloads/SIPCNICellInfoAge.ta.mjs";
// export { SIPCNICellInfoAge, _decode_SIPCNICellInfoAge, _encode_SIPCNICellInfoAge } from "../TS33128Payloads/SIPCNICellInfoAge.ta.mjs";


/**
 * @summary SIPCellularAccessInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCellularAccessInfo ::= SEQUENCE
 * {
 *     accessInfo  [1] SIPAccessInfo,
 *     cellInfoAge [2] SIPCNICellInfoAge
 * }
 * ```
 * 
 * @class
 */
export
class SIPCellularAccessInfo {
    constructor (
        /**
         * @summary `accessInfo`.
         * @public
         * @readonly
         */
        readonly accessInfo: SIPAccessInfo,
        /**
         * @summary `cellInfoAge`.
         * @public
         * @readonly
         */
        readonly cellInfoAge: SIPCNICellInfoAge
    ) {}

    /**
     * @summary Restructures an object into a SIPCellularAccessInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SIPCellularAccessInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPCellularAccessInfo`.
     * @returns {SIPCellularAccessInfo}
     */
    public static _from_object (_o: { [_K in keyof (SIPCellularAccessInfo)]: (SIPCellularAccessInfo)[_K] }): SIPCellularAccessInfo {
        return new SIPCellularAccessInfo(_o.accessInfo, _o.cellInfoAge);
    }


}

/**
 * @summary The Leading Root Component Types of SIPCellularAccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPCellularAccessInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("accessInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellInfoAge", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPCellularAccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPCellularAccessInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPCellularAccessInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPCellularAccessInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPCellularAccessInfo: $.ASN1Decoder<SIPCellularAccessInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCellularAccessInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPCellularAccessInfo (el: _Element): SIPCellularAccessInfo {
    if (!_cached_decoder_for_SIPCellularAccessInfo) { _cached_decoder_for_SIPCellularAccessInfo = function (el: _Element): SIPCellularAccessInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SIPCellularAccessInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessInfo";
    sequence[1].name = "cellInfoAge";
    let accessInfo!: SIPAccessInfo;
    let cellInfoAge!: SIPCNICellInfoAge;
    accessInfo = $._decode_implicit<SIPAccessInfo>(() => _decode_SIPAccessInfo)(sequence[0]);
    cellInfoAge = $._decode_implicit<SIPCNICellInfoAge>(() => _decode_SIPCNICellInfoAge)(sequence[1]);
    return new SIPCellularAccessInfo(
        accessInfo,
        cellInfoAge,

    );
}; }
    return _cached_decoder_for_SIPCellularAccessInfo(el);
}

let _cached_encoder_for_SIPCellularAccessInfo: $.ASN1Encoder<SIPCellularAccessInfo> | null = null;

/**
 * @summary Encodes a(n) SIPCellularAccessInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCellularAccessInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPCellularAccessInfo (value: SIPCellularAccessInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPCellularAccessInfo) { _cached_encoder_for_SIPCellularAccessInfo = function (value: SIPCellularAccessInfo, elGetter: $.ASN1Encoder<SIPCellularAccessInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SIPAccessInfo, $.BER)(value.accessInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SIPCNICellInfoAge, $.BER)(value.cellInfoAge, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPCellularAccessInfo(value, elGetter);
}


/* eslint-enable */
