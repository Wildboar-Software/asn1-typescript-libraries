/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../TS33128Payloads/LocationInfo.ta.mjs";
// export { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../TS33128Payloads/LocationInfo.ta.mjs";
import { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";
// export { CellInformation, _decode_CellInformation, _encode_CellInformation } from "../TS33128Payloads/CellInformation.ta.mjs";


/**
 * @summary SIPLocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPLocationInfo ::= SEQUENCE
 * {
 *     locationInfo    [1] LocationInfo OPTIONAL,
 *     cellInformation [2] CellInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPLocationInfo {
    constructor (
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfo>,
        /**
         * @summary `cellInformation`.
         * @public
         * @readonly
         */
        readonly cellInformation: OPTIONAL<CellInformation>
    ) {}

    /**
     * @summary Restructures an object into a SIPLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SIPLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPLocationInfo`.
     * @returns {SIPLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (SIPLocationInfo)]: (SIPLocationInfo)[_K] }): SIPLocationInfo {
        return new SIPLocationInfo(_o.locationInfo, _o.cellInformation);
    }


}

/**
 * @summary The Leading Root Component Types of SIPLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellInformation", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPLocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPLocationInfo: $.ASN1Decoder<SIPLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPLocationInfo (el: _Element): SIPLocationInfo {
    if (!_cached_decoder_for_SIPLocationInfo) { _cached_decoder_for_SIPLocationInfo = function (el: _Element): SIPLocationInfo {
    let locationInfo: OPTIONAL<LocationInfo>;
    let cellInformation: OPTIONAL<CellInformation>;
    const callbacks: $.DecodingMap = {
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfo>(() => _decode_LocationInfo)(_el); },
        "cellInformation": (_el: _Element): void => { cellInformation = $._decode_implicit<CellInformation>(() => _decode_CellInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPLocationInfo,
        _extension_additions_list_spec_for_SIPLocationInfo,
        _root_component_type_list_2_spec_for_SIPLocationInfo,
        undefined,
    );
    return new SIPLocationInfo(
        locationInfo,
        cellInformation
    );
}; }
    return _cached_decoder_for_SIPLocationInfo(el);
}

let _cached_encoder_for_SIPLocationInfo: $.ASN1Encoder<SIPLocationInfo> | null = null;

/**
 * @summary Encodes a(n) SIPLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SIPLocationInfo (value: SIPLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPLocationInfo) { _cached_encoder_for_SIPLocationInfo = function (value: SIPLocationInfo, elGetter: $.ASN1Encoder<SIPLocationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_LocationInfo, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.cellInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CellInformation, $.BER)(value.cellInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPLocationInfo(value, elGetter);
}


/* eslint-enable */
