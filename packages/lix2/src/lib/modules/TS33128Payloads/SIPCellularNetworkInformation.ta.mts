/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary SIPCellularNetworkInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCellularNetworkInformation ::= SEQUENCE
 * {
 *     cellularNetworkInfo  [1] UTF8String,
 *     servingPLMN          [2] PLMNID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SIPCellularNetworkInformation {
    constructor (
        /**
         * @summary `cellularNetworkInfo`.
         * @public
         * @readonly
         */
        readonly cellularNetworkInfo: UTF8String,
        /**
         * @summary `servingPLMN`.
         * @public
         * @readonly
         */
        readonly servingPLMN: OPTIONAL<PLMNID>
    ) {}

    /**
     * @summary Restructures an object into a SIPCellularNetworkInformation
     * @description
     * 
     * This takes an `object` and converts it to a `SIPCellularNetworkInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIPCellularNetworkInformation`.
     * @returns {SIPCellularNetworkInformation}
     */
    public static _from_object (_o: { [_K in keyof (SIPCellularNetworkInformation)]: (SIPCellularNetworkInformation)[_K] }): SIPCellularNetworkInformation {
        return new SIPCellularNetworkInformation(_o.cellularNetworkInfo, _o.servingPLMN);
    }


}

/**
 * @summary The Leading Root Component Types of SIPCellularNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SIPCellularNetworkInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cellularNetworkInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servingPLMN", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SIPCellularNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SIPCellularNetworkInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SIPCellularNetworkInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SIPCellularNetworkInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SIPCellularNetworkInformation: $.ASN1Decoder<SIPCellularNetworkInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCellularNetworkInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SIPCellularNetworkInformation (el: _Element): SIPCellularNetworkInformation {
    if (!_cached_decoder_for_SIPCellularNetworkInformation) { _cached_decoder_for_SIPCellularNetworkInformation = function (el: _Element): SIPCellularNetworkInformation {
    let cellularNetworkInfo!: UTF8String;
    let servingPLMN: OPTIONAL<PLMNID>;
    const callbacks: $.DecodingMap = {
        "cellularNetworkInfo": (_el: _Element): void => { cellularNetworkInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "servingPLMN": (_el: _Element): void => { servingPLMN = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIPCellularNetworkInformation,
        _extension_additions_list_spec_for_SIPCellularNetworkInformation,
        _root_component_type_list_2_spec_for_SIPCellularNetworkInformation,
        undefined,
    );
    return new SIPCellularNetworkInformation(
        cellularNetworkInfo,
        servingPLMN
    );
}; }
    return _cached_decoder_for_SIPCellularNetworkInformation(el);
}

let _cached_encoder_for_SIPCellularNetworkInformation: $.ASN1Encoder<SIPCellularNetworkInformation> | null = null;

/**
 * @summary Encodes a(n) SIPCellularNetworkInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCellularNetworkInformation, encoded as an ASN.1 Element.
 */
export
function _encode_SIPCellularNetworkInformation (value: SIPCellularNetworkInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SIPCellularNetworkInformation) { _cached_encoder_for_SIPCellularNetworkInformation = function (value: SIPCellularNetworkInformation, elGetter: $.ASN1Encoder<SIPCellularNetworkInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.cellularNetworkInfo, $.BER),
            /* IF_ABSENT  */ ((value.servingPLMN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.servingPLMN, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SIPCellularNetworkInformation(value, elGetter);
}


/* eslint-enable */
