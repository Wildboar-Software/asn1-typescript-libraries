/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RMState, _decode_RMState, _encode_RMState, _enum_for_RMState } from "../TS33128Payloads/RMState.ta.mjs";
// export { RMState, _enum_for_RMState, RMState_registered /* IMPORTED_LONG_ENUMERATION_ITEM */, registered /* IMPORTED_SHORT_ENUMERATION_ITEM */, RMState_deregistered /* IMPORTED_LONG_ENUMERATION_ITEM */, deregistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RMState, _encode_RMState } from "../TS33128Payloads/RMState.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";


/**
 * @summary RMInfo
 * @description
 * 
 * The RMInfo type is derived from the data present in the RMInfo type defined
 * in TS 29.518 [22] clause 6.2.6.2.8. Table 7.3.3.2.49-1 contains the details
 * for the RMInfo type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.49.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RMInfo ::= SEQUENCE
 * {
 *     rMState                     [1] RMState,
 *     accessType                  [2] AccessType
 * }
 * ```
 * 
 * @class
 */
export
class RMInfo {
    /**
     * @summary `rMState`.
     * @description
     *
     * Describes the registration management state of the UE.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.49.
     *
     * @public
     * @readonly
     */
    readonly rMState: RMState;
    /**
     * @summary `accessType`.
     * @description
     *
     * Describes the access type of the UE that applies to the registration
     * management state reported.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.49.
     *
     * @public
     * @readonly
     */
    readonly accessType: AccessType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        rMState: RMState,
        accessType: AccessType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rMState = rMState;
        this.accessType = accessType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RMInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RMInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RMInfo`.
     * @returns {RMInfo}
     */
    public static _from_object (_o: { [_K in keyof (RMInfo)]: (RMInfo)[_K] }): RMInfo {
        return new RMInfo(_o.rMState, _o.accessType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rMState`
         * @public
         * @static
         */

    public static _enum_for_rMState = _enum_for_RMState;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RMInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("rMState", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("accessType", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RMInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RMInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RMInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RMInfo: $.ASN1Decoder<RMInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RMInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RMInfo (el: _Element): RMInfo {
    if (!_cached_decoder_for_RMInfo) { _cached_decoder_for_RMInfo = function (el: _Element): RMInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RMInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rMState";
    sequence[1].name = "accessType";
    let rMState!: RMState;
    let accessType!: AccessType;
    rMState = $._decode_implicit<RMState>(() => _decode_RMState)(sequence[0]);
    accessType = $._decode_implicit<AccessType>(() => _decode_AccessType)(sequence[1]);
    return new RMInfo(
        rMState,
        accessType,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_RMInfo(el);
}

let _cached_encoder_for_RMInfo: $.ASN1Encoder<RMInfo> | null = null;

/**
 * @summary Encodes a(n) RMInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RMInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RMInfo (value: RMInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RMInfo) { _cached_encoder_for_RMInfo = function (value: RMInfo, elGetter: $.ASN1Encoder<RMInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RMState, $.BER)(value.rMState, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AccessType, $.BER)(value.accessType, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RMInfo(value, elGetter);
}


/* eslint-enable */
