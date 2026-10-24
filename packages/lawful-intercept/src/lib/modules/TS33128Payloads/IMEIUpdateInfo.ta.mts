/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
import { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";
// export { IMEISV, _decode_IMEISV, _encode_IMEISV } from "../TS33128Payloads/IMEISV.ta.mjs";


/**
 * @summary IMEIUpdateInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMEIUpdateInfo ::= SEQUENCE
 * {
 *     iMSI       [1] IMSI OPTIONAL,
 *     iMEI       [2] IMEI OPTIONAL,
 *     iMEISV     [3] IMEISV OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMEIUpdateInfo {
    /**
     * @summary `iMSI`.
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `iMEI`.
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `iMEISV`.
     * @public
     * @readonly
     */
    readonly iMEISV: OPTIONAL<IMEISV>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI?: OPTIONAL<IMSI>,
        iMEI?: OPTIONAL<IMEI>,
        iMEISV?: OPTIONAL<IMEISV>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.iMEI = iMEI;
        this.iMEISV = iMEISV;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMEIUpdateInfo
     * @description
     * 
     * This takes an `object` and converts it to a `IMEIUpdateInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMEIUpdateInfo`.
     * @returns {IMEIUpdateInfo}
     */
    public static _from_object (_o: { [_K in keyof (IMEIUpdateInfo)]: (IMEIUpdateInfo)[_K] }): IMEIUpdateInfo {
        return new IMEIUpdateInfo(_o.iMSI, _o.iMEI, _o.iMEISV, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMEISV", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMEIUpdateInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMEIUpdateInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMEIUpdateInfo: $.ASN1Decoder<IMEIUpdateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMEIUpdateInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMEIUpdateInfo (el: _Element): IMEIUpdateInfo {
    if (!_cached_decoder_for_IMEIUpdateInfo) { _cached_decoder_for_IMEIUpdateInfo = function (el: _Element): IMEIUpdateInfo {
    let iMSI: OPTIONAL<IMSI>;
    let iMEI: OPTIONAL<IMEI>;
    let iMEISV: OPTIONAL<IMEISV>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "iMEISV": (_el: _Element): void => { iMEISV = $._decode_implicit<IMEISV>(() => _decode_IMEISV)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMEIUpdateInfo,
        _extension_additions_list_spec_for_IMEIUpdateInfo,
        _root_component_type_list_2_spec_for_IMEIUpdateInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMEIUpdateInfo(
        iMSI,
        iMEI,
        iMEISV,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMEIUpdateInfo(el);
}

let _cached_encoder_for_IMEIUpdateInfo: $.ASN1Encoder<IMEIUpdateInfo> | null = null;

/**
 * @summary Encodes a(n) IMEIUpdateInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMEIUpdateInfo, encoded as an ASN.1 Element.
 */
export
function _encode_IMEIUpdateInfo (value: IMEIUpdateInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMEIUpdateInfo) { _cached_encoder_for_IMEIUpdateInfo = function (value: IMEIUpdateInfo, elGetter: $.ASN1Encoder<IMEIUpdateInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.iMEISV !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IMEISV, $.BER)(value.iMEISV, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMEIUpdateInfo(value, elGetter);
}


/* eslint-enable */
