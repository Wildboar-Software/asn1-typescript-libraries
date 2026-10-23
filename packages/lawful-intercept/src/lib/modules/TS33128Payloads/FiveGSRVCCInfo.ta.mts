/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";


/**
 * @summary FiveGSRVCCInfo
 * @description
 * 
 * Indicates whether the UE supports 5G SRVCC. See TS 29.503 [25] clause
 * 6.7.6.2.5. Shall be included if returned in the UeInfo response.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSRVCCInfo ::= SEQUENCE
 * {
 *     uE5GSRVCCCapability   [1] BOOLEAN,
 *     sessionTransferNumber [2] UTF8String OPTIONAL,
 *     correlationMSISDN     [3] MSISDN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSRVCCInfo {
    /**
     * @summary `uE5GSRVCCCapability`.
     * @public
     * @readonly
     */
    readonly uE5GSRVCCCapability: BOOLEAN;
    /**
     * @summary `sessionTransferNumber`.
     * @public
     * @readonly
     */
    readonly sessionTransferNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `correlationMSISDN`.
     * @public
     * @readonly
     */
    readonly correlationMSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uE5GSRVCCCapability: BOOLEAN,
        sessionTransferNumber?: OPTIONAL<UTF8String>,
        correlationMSISDN?: OPTIONAL<MSISDN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uE5GSRVCCCapability = uE5GSRVCCCapability;
        this.sessionTransferNumber = sessionTransferNumber;
        this.correlationMSISDN = correlationMSISDN;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGSRVCCInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSRVCCInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSRVCCInfo`.
     * @returns {FiveGSRVCCInfo}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSRVCCInfo)]: (FiveGSRVCCInfo)[_K] }): FiveGSRVCCInfo {
        return new FiveGSRVCCInfo(_o.uE5GSRVCCCapability, _o.sessionTransferNumber, _o.correlationMSISDN, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSRVCCInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSRVCCInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("uE5GSRVCCCapability", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sessionTransferNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("correlationMSISDN", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGSRVCCInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSRVCCInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSRVCCInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSRVCCInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSRVCCInfo: $.ASN1Decoder<FiveGSRVCCInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSRVCCInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSRVCCInfo (el: _Element): FiveGSRVCCInfo {
    if (!_cached_decoder_for_FiveGSRVCCInfo) { _cached_decoder_for_FiveGSRVCCInfo = function (el: _Element): FiveGSRVCCInfo {
    let uE5GSRVCCCapability!: BOOLEAN;
    let sessionTransferNumber: OPTIONAL<UTF8String>;
    let correlationMSISDN: OPTIONAL<MSISDN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uE5GSRVCCCapability": (_el: _Element): void => { uE5GSRVCCCapability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "sessionTransferNumber": (_el: _Element): void => { sessionTransferNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "correlationMSISDN": (_el: _Element): void => { correlationMSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGSRVCCInfo,
        _extension_additions_list_spec_for_FiveGSRVCCInfo,
        _root_component_type_list_2_spec_for_FiveGSRVCCInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGSRVCCInfo(
        uE5GSRVCCCapability,
        sessionTransferNumber,
        correlationMSISDN,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FiveGSRVCCInfo(el);
}

let _cached_encoder_for_FiveGSRVCCInfo: $.ASN1Encoder<FiveGSRVCCInfo> | null = null;

/**
 * @summary Encodes a(n) FiveGSRVCCInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSRVCCInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSRVCCInfo (value: FiveGSRVCCInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSRVCCInfo) { _cached_encoder_for_FiveGSRVCCInfo = function (value: FiveGSRVCCInfo, elGetter: $.ASN1Encoder<FiveGSRVCCInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.uE5GSRVCCCapability, $.BER);
    if (value.sessionTransferNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.sessionTransferNumber, $.BER);
    }
    if (value.correlationMSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MSISDN, $.BER)(value.correlationMSISDN, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGSRVCCInfo(value, elGetter);
}


/* eslint-enable */
