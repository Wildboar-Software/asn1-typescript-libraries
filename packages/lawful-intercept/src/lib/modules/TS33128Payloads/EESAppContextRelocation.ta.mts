/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { EESACRDetOrInit, _decode_EESACRDetOrInit, _encode_EESACRDetOrInit } from "../TS33128Payloads/EESACRDetOrInit.ta.mjs";
// export { EESACRDetOrInit, _decode_EESACRDetOrInit, _encode_EESACRDetOrInit } from "../TS33128Payloads/EESACRDetOrInit.ta.mjs";


/**
 * @summary EESAppContextRelocation
 * @description
 * 
 * Table 7.14.2.11-1 gives the LI_HI2 IRI message type for this record as
 * REPORT.
 *
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESAppContextRelocation ::= SEQUENCE
 * {
 *     eECID              [1] UTF8String,
 *     gPSI               [2] GPSI OPTIONAL,
 *     eESACRDetOrInit    [3] EESACRDetOrInit
 * }
 * ```
 * 
 * @class
 */
export
class EESAppContextRelocation {
    /**
     * @summary `eECID`.
     * @public
     * @readonly
     */
    readonly eECID: UTF8String;
    /**
     * @summary `gPSI`.
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `eESACRDetOrInit`.
     * @public
     * @readonly
     */
    readonly eESACRDetOrInit: EESACRDetOrInit;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eECID: UTF8String,
        gPSI: OPTIONAL<GPSI>,
        eESACRDetOrInit: EESACRDetOrInit,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eECID = eECID;
        this.gPSI = gPSI;
        this.eESACRDetOrInit = eESACRDetOrInit;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EESAppContextRelocation
     * @description
     * 
     * This takes an `object` and converts it to a `EESAppContextRelocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESAppContextRelocation`.
     * @returns {EESAppContextRelocation}
     */
    public static _from_object (_o: { [_K in keyof (EESAppContextRelocation)]: (EESAppContextRelocation)[_K] }): EESAppContextRelocation {
        return new EESAppContextRelocation(_o.eECID, _o.gPSI, _o.eESACRDetOrInit, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eESACRDetOrInit", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESAppContextRelocation: $.ASN1Decoder<EESAppContextRelocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESAppContextRelocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESAppContextRelocation (el: _Element): EESAppContextRelocation {
    if (!_cached_decoder_for_EESAppContextRelocation) { _cached_decoder_for_EESAppContextRelocation = function (el: _Element): EESAppContextRelocation {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let eESACRDetOrInit!: EESACRDetOrInit;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "eESACRDetOrInit": (_el: _Element): void => { eESACRDetOrInit = $._decode_explicit<EESACRDetOrInit>(() => _decode_EESACRDetOrInit)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESAppContextRelocation,
        _extension_additions_list_spec_for_EESAppContextRelocation,
        _root_component_type_list_2_spec_for_EESAppContextRelocation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EESAppContextRelocation(
        eECID,
        gPSI,
        eESACRDetOrInit,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EESAppContextRelocation(el);
}

let _cached_encoder_for_EESAppContextRelocation: $.ASN1Encoder<EESAppContextRelocation> | null = null;

/**
 * @summary Encodes a(n) EESAppContextRelocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESAppContextRelocation, encoded as an ASN.1 Element.
 */
export
function _encode_EESAppContextRelocation (value: EESAppContextRelocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESAppContextRelocation) { _cached_encoder_for_EESAppContextRelocation = function (value: EESAppContextRelocation, elGetter: $.ASN1Encoder<EESAppContextRelocation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER);
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_EESACRDetOrInit, $.BER)(value.eESACRDetOrInit, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EESAppContextRelocation(value, elGetter);
}


/* eslint-enable */
