/* eslint-disable */
import {
    type UTF8String,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCSessionType, _decode_PTCSessionType, _encode_PTCSessionType, _enum_for_PTCSessionType } from "../TS33128Payloads/PTCSessionType.ta.mjs";
// export { PTCSessionType, _enum_for_PTCSessionType, PTCSessionType_ondemand /* IMPORTED_LONG_ENUMERATION_ITEM */, ondemand /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionType_preEstablished /* IMPORTED_LONG_ENUMERATION_ITEM */, preEstablished /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionType_adhoc /* IMPORTED_LONG_ENUMERATION_ITEM */, adhoc /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionType_prearranged /* IMPORTED_LONG_ENUMERATION_ITEM */, prearranged /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionType_groupSession /* IMPORTED_LONG_ENUMERATION_ITEM */, groupSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCSessionType, _encode_PTCSessionType } from "../TS33128Payloads/PTCSessionType.ta.mjs";


/**
 * @summary PTCSessionInfo
 * @description
 * 
 * Shall provide PTC session information such as PTC Session URI and PTC Session
 * type (e.g. on-demand, pre-established, ad-hoc, pre-arranged, group session)
 * when available.
 *
 * 3GPP TS 33.128, clause 7.5.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionInfo ::= SEQUENCE
 * {
 *     pTCSessionURI              [1] UTF8String,
 *     pTCSessionType             [2] PTCSessionType
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionInfo {
    /**
     * @summary `pTCSessionURI`.
     * @public
     * @readonly
     */
    readonly pTCSessionURI: UTF8String;
    /**
     * @summary `pTCSessionType`.
     * @public
     * @readonly
     */
    readonly pTCSessionType: PTCSessionType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCSessionURI: UTF8String,
        pTCSessionType: PTCSessionType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCSessionURI = pTCSessionURI;
        this.pTCSessionType = pTCSessionType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCSessionInfo
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionInfo`.
     * @returns {PTCSessionInfo}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionInfo)]: (PTCSessionInfo)[_K] }): PTCSessionInfo {
        return new PTCSessionInfo(_o.pTCSessionURI, _o.pTCSessionType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCSessionType`
         * @public
         * @static
         */

    public static _enum_for_pTCSessionType = _enum_for_PTCSessionType;
}

/**
 * @summary The Leading Root Component Types of PTCSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCSessionURI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCSessionType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionInfo: $.ASN1Decoder<PTCSessionInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionInfo (el: _Element): PTCSessionInfo {
    if (!_cached_decoder_for_PTCSessionInfo) { _cached_decoder_for_PTCSessionInfo = function (el: _Element): PTCSessionInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PTCSessionInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCSessionURI";
    sequence[1].name = "pTCSessionType";
    let pTCSessionURI!: UTF8String;
    let pTCSessionType!: PTCSessionType;
    pTCSessionURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    pTCSessionType = $._decode_implicit<PTCSessionType>(() => _decode_PTCSessionType)(sequence[1]);
    return new PTCSessionInfo(
        pTCSessionURI,
        pTCSessionType,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PTCSessionInfo(el);
}

let _cached_encoder_for_PTCSessionInfo: $.ASN1Encoder<PTCSessionInfo> | null = null;

/**
 * @summary Encodes a(n) PTCSessionInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionInfo (value: PTCSessionInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionInfo) { _cached_encoder_for_PTCSessionInfo = function (value: PTCSessionInfo, elGetter: $.ASN1Encoder<PTCSessionInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.pTCSessionURI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCSessionType, $.BER)(value.pTCSessionType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCSessionInfo(value, elGetter);
}


/* eslint-enable */
