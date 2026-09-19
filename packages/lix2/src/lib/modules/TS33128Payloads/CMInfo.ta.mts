/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CMState, _encode_CMState, _enum_for_CMState, CMState } from "../TS33128Payloads/CMState.ta.mjs";
// export { CMState, _enum_for_CMState, CMState_idle /* IMPORTED_LONG_ENUMERATION_ITEM */, idle /* IMPORTED_SHORT_ENUMERATION_ITEM */, CMState_connected /* IMPORTED_LONG_ENUMERATION_ITEM */, connected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CMState, _encode_CMState } from "../TS33128Payloads/CMState.ta.mjs";
import { _decode_AccessType, _encode_AccessType, _enum_for_AccessType, AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";


/**
 * @summary CMInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CMInfo ::= SEQUENCE
 * {
 *     cMState                     [1] CMState,
 *     accessType                  [2] AccessType
 * }
 * ```
 * 
 * @class
 */
export
class CMInfo {
    constructor (
        /**
         * @summary `cMState`.
         * @public
         * @readonly
         */
        readonly cMState: CMState,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: AccessType
    ) {}

    /**
     * @summary Restructures an object into a CMInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CMInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CMInfo`.
     * @returns {CMInfo}
     */
    public static _from_object (_o: { [_K in keyof (CMInfo)]: (CMInfo)[_K] }): CMInfo {
        return new CMInfo(_o.cMState, _o.accessType);
    }

        /**
         * @summary The enum used as the type of the component `cMState`
         * @public
         * @static
         */

    public static _enum_for_cMState = _enum_for_CMState;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of CMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CMInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cMState", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CMInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CMInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CMInfo: $.ASN1Decoder<CMInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CMInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CMInfo (el: _Element): CMInfo {
    if (!_cached_decoder_for_CMInfo) { _cached_decoder_for_CMInfo = function (el: _Element): CMInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CMInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cMState";
    sequence[1].name = "accessType";
    let cMState!: CMState;
    let accessType!: AccessType;
    cMState = $._decode_implicit<CMState>(() => _decode_CMState)(sequence[0]);
    accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(sequence[1]);
    return new CMInfo(
        cMState,
        accessType,

    );
}; }
    return _cached_decoder_for_CMInfo(el);
}

let _cached_encoder_for_CMInfo: $.ASN1Encoder<CMInfo> | null = null;

/**
 * @summary Encodes a(n) CMInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CMInfo (value: CMInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CMInfo) { _cached_encoder_for_CMInfo = function (value: CMInfo, elGetter: $.ASN1Encoder<CMInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CMState, $.BER)(value.cMState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CMInfo(value, elGetter);
}


/* eslint-enable */
