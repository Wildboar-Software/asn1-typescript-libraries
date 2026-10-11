/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MBMSinformation_mbms_Mode, _decode_MBMSinformation_mbms_Mode, _encode_MBMSinformation_mbms_Mode, _enum_for_MBMSinformation_mbms_Mode } from "../MBMSUmtsHI2Operations/MBMSinformation-mbms-Mode.ta.mjs";
// export { MBMSinformation_mbms_Mode, _enum_for_MBMSinformation_mbms_Mode, MBMSinformation_mbms_Mode_multicast /* IMPORTED_LONG_ENUMERATION_ITEM */, multicast /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSinformation_mbms_Mode_broadcast /* IMPORTED_LONG_ENUMERATION_ITEM */, broadcast /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MBMSinformation_mbms_Mode, _encode_MBMSinformation_mbms_Mode } from "../MBMSUmtsHI2Operations/MBMSinformation-mbms-Mode.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
import { MBMSinformation_mbmsLeavingReason, _decode_MBMSinformation_mbmsLeavingReason, _encode_MBMSinformation_mbmsLeavingReason, _enum_for_MBMSinformation_mbmsLeavingReason } from "../MBMSUmtsHI2Operations/MBMSinformation-mbmsLeavingReason.ta.mjs";
// export { MBMSinformation_mbmsLeavingReason, _enum_for_MBMSinformation_mbmsLeavingReason, MBMSinformation_mbmsLeavingReason_uEinitiatedRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, uEinitiatedRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSinformation_mbmsLeavingReason_bMSCorNetworkTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, bMSCorNetworkTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MBMSinformation_mbmsLeavingReason, _encode_MBMSinformation_mbmsLeavingReason } from "../MBMSUmtsHI2Operations/MBMSinformation-mbmsLeavingReason.ta.mjs";
import { MBMSinformation_mbmsSubsTermReason, _decode_MBMSinformation_mbmsSubsTermReason, _encode_MBMSinformation_mbmsSubsTermReason, _enum_for_MBMSinformation_mbmsSubsTermReason } from "../MBMSUmtsHI2Operations/MBMSinformation-mbmsSubsTermReason.ta.mjs";
// export { MBMSinformation_mbmsSubsTermReason, _enum_for_MBMSinformation_mbmsSubsTermReason, MBMSinformation_mbmsSubsTermReason_userInitiated /* IMPORTED_LONG_ENUMERATION_ITEM */, userInitiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSinformation_mbmsSubsTermReason_subscriptionExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MBMSinformation_mbmsSubsTermReason, _encode_MBMSinformation_mbmsSubsTermReason } from "../MBMSUmtsHI2Operations/MBMSinformation-mbmsSubsTermReason.ta.mjs";
import { MBMSSerSubscriberList, _decode_MBMSSerSubscriberList, _encode_MBMSSerSubscriberList } from "../MBMSUmtsHI2Operations/MBMSSerSubscriberList.ta.mjs";
// export { MBMSSerSubscriberList, _decode_MBMSSerSubscriberList, _encode_MBMSSerSubscriberList } from "../MBMSUmtsHI2Operations/MBMSSerSubscriberList.ta.mjs";
import { MBMSNodeList, _decode_MBMSNodeList, _encode_MBMSNodeList } from "../MBMSUmtsHI2Operations/MBMSNodeList.ta.mjs";
// export { MBMSNodeList, _decode_MBMSNodeList, _encode_MBMSNodeList } from "../MBMSUmtsHI2Operations/MBMSNodeList.ta.mjs";


/**
 * @summary MBMSinformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMSinformation ::= SEQUENCE
 * {
 *     mbmsServiceName                     [1] UTF8String        OPTIONAL,
 *     mbms-join-time                      [2] UTF8String        OPTIONAL,
 *     mbms-Mode                              [3] ENUMERATED            
 *     {
 *         multicast    (0),
 *         broadcast    (1),
 *     ...
 *     } OPTIONAL,
 *     mbmsIPIPv6Address                    [4]    IPAddress            OPTIONAL,
 *     mbmsLeavingReason                    [5]    ENUMERATED            
 *     {
 *         uEinitiatedRequested    (0),
 *         bMSCorNetworkTerminated    (1),
 *     ...
 *     } OPTIONAL,
 *     mbmsSubsTermReason                    [6]    ENUMERATED            
 *     {
 *         userInitiated            (0),
 *         subscriptionExpired        (1),
 *     ...
 *     } OPTIONAL,
 *     mBMSapn                             [7] UTF8String                        OPTIONAL,    
 *     -- The Access Point Name (APN) is coded in accordance with
 *         -- 3GPP TS 24.008 [9] without the APN IEI (only the last 100 octets are used).
 *         -- Octets are coded according to 3GPP TS 23.003 [25].
 *     mbmsSerSubscriberList                [8] MBMSSerSubscriberList            OPTIONAL,
 *     mbmsNodeList                        [9] MBMSNodeList                    OPTIONAL,
 * 
 * ...
 * 
 * }
 * ```
 * 
 * @class
 */
export
class MBMSinformation {
    /**
     * @summary `mbmsServiceName`.
     * @public
     * @readonly
     */
    readonly mbmsServiceName: OPTIONAL<UTF8String>;
    /**
     * @summary `mbms_join_time`.
     * @public
     * @readonly
     */
    readonly mbms_join_time: OPTIONAL<UTF8String>;
    /**
     * @summary `mbms_Mode`.
     * @public
     * @readonly
     */
    readonly mbms_Mode: OPTIONAL<MBMSinformation_mbms_Mode>;
    /**
     * @summary `mbmsIPIPv6Address`.
     * @public
     * @readonly
     */
    readonly mbmsIPIPv6Address: OPTIONAL<IPAddress>;
    /**
     * @summary `mbmsLeavingReason`.
     * @public
     * @readonly
     */
    readonly mbmsLeavingReason: OPTIONAL<MBMSinformation_mbmsLeavingReason>;
    /**
     * @summary `mbmsSubsTermReason`.
     * @public
     * @readonly
     */
    readonly mbmsSubsTermReason: OPTIONAL<MBMSinformation_mbmsSubsTermReason>;
    /**
     * @summary `mBMSapn`.
     * @public
     * @readonly
     */
    readonly mBMSapn: OPTIONAL<UTF8String>;
    /**
     * @summary `mbmsSerSubscriberList`.
     * @public
     * @readonly
     */
    readonly mbmsSerSubscriberList: OPTIONAL<MBMSSerSubscriberList>;
    /**
     * @summary `mbmsNodeList`.
     * @public
     * @readonly
     */
    readonly mbmsNodeList: OPTIONAL<MBMSNodeList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mbmsServiceName: OPTIONAL<UTF8String>,
        mbms_join_time: OPTIONAL<UTF8String>,
        mbms_Mode: OPTIONAL<MBMSinformation_mbms_Mode>,
        mbmsIPIPv6Address: OPTIONAL<IPAddress>,
        mbmsLeavingReason: OPTIONAL<MBMSinformation_mbmsLeavingReason>,
        mbmsSubsTermReason: OPTIONAL<MBMSinformation_mbmsSubsTermReason>,
        mBMSapn: OPTIONAL<UTF8String>,
        mbmsSerSubscriberList: OPTIONAL<MBMSSerSubscriberList>,
        mbmsNodeList: OPTIONAL<MBMSNodeList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mbmsServiceName = mbmsServiceName;
        this.mbms_join_time = mbms_join_time;
        this.mbms_Mode = mbms_Mode;
        this.mbmsIPIPv6Address = mbmsIPIPv6Address;
        this.mbmsLeavingReason = mbmsLeavingReason;
        this.mbmsSubsTermReason = mbmsSubsTermReason;
        this.mBMSapn = mBMSapn;
        this.mbmsSerSubscriberList = mbmsSerSubscriberList;
        this.mbmsNodeList = mbmsNodeList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MBMSinformation
     * @description
     * 
     * This takes an `object` and converts it to a `MBMSinformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MBMSinformation`.
     * @returns {MBMSinformation}
     */
    public static _from_object (_o: { [_K in keyof (MBMSinformation)]: (MBMSinformation)[_K] }): MBMSinformation {
        return new MBMSinformation(_o.mbmsServiceName, _o.mbms_join_time, _o.mbms_Mode, _o.mbmsIPIPv6Address, _o.mbmsLeavingReason, _o.mbmsSubsTermReason, _o.mBMSapn, _o.mbmsSerSubscriberList, _o.mbmsNodeList, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mbms_Mode`
         * @public
         * @static
         */

    public static _enum_for_mbms_Mode = _enum_for_MBMSinformation_mbms_Mode;        /**
         * @summary The enum used as the type of the component `mbmsLeavingReason`
         * @public
         * @static
         */

    public static _enum_for_mbmsLeavingReason = _enum_for_MBMSinformation_mbmsLeavingReason;        /**
         * @summary The enum used as the type of the component `mbmsSubsTermReason`
         * @public
         * @static
         */

    public static _enum_for_mbmsSubsTermReason = _enum_for_MBMSinformation_mbmsSubsTermReason;
}

/**
 * @summary The Leading Root Component Types of MBMSinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MBMSinformation: $.ComponentSpec[] = [
    new $.ComponentSpec("mbmsServiceName", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mbms-join-time", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mbms-Mode", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mbmsIPIPv6Address", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mbmsLeavingReason", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("mbmsSubsTermReason", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("mBMSapn", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mbmsSerSubscriberList", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mbmsNodeList", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MBMSinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MBMSinformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MBMSinformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MBMSinformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MBMSinformation: $.ASN1Decoder<MBMSinformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MBMSinformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MBMSinformation (el: _Element): MBMSinformation {
    if (!_cached_decoder_for_MBMSinformation) { _cached_decoder_for_MBMSinformation = function (el: _Element): MBMSinformation {
    let mbmsServiceName: OPTIONAL<UTF8String>;
    let mbms_join_time: OPTIONAL<UTF8String>;
    let mbms_Mode: OPTIONAL<MBMSinformation_mbms_Mode>;
    let mbmsIPIPv6Address: OPTIONAL<IPAddress>;
    let mbmsLeavingReason: OPTIONAL<MBMSinformation_mbmsLeavingReason>;
    let mbmsSubsTermReason: OPTIONAL<MBMSinformation_mbmsSubsTermReason>;
    let mBMSapn: OPTIONAL<UTF8String>;
    let mbmsSerSubscriberList: OPTIONAL<MBMSSerSubscriberList>;
    let mbmsNodeList: OPTIONAL<MBMSNodeList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mbmsServiceName": (_el: _Element): void => { mbmsServiceName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mbms-join-time": (_el: _Element): void => { mbms_join_time = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mbms-Mode": (_el: _Element): void => { mbms_Mode = $._decode_implicit<MBMSinformation_mbms_Mode>(() => _decode_MBMSinformation_mbms_Mode)(_el); },
        "mbmsIPIPv6Address": (_el: _Element): void => { mbmsIPIPv6Address = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "mbmsLeavingReason": (_el: _Element): void => { mbmsLeavingReason = $._decode_implicit<MBMSinformation_mbmsLeavingReason>(() => _decode_MBMSinformation_mbmsLeavingReason)(_el); },
        "mbmsSubsTermReason": (_el: _Element): void => { mbmsSubsTermReason = $._decode_implicit<MBMSinformation_mbmsSubsTermReason>(() => _decode_MBMSinformation_mbmsSubsTermReason)(_el); },
        "mBMSapn": (_el: _Element): void => { mBMSapn = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "mbmsSerSubscriberList": (_el: _Element): void => { mbmsSerSubscriberList = $._decode_implicit<MBMSSerSubscriberList>(() => _decode_MBMSSerSubscriberList)(_el); },
        "mbmsNodeList": (_el: _Element): void => { mbmsNodeList = $._decode_implicit<MBMSNodeList>(() => _decode_MBMSNodeList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MBMSinformation,
        _extension_additions_list_spec_for_MBMSinformation,
        _root_component_type_list_2_spec_for_MBMSinformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MBMSinformation(
        mbmsServiceName,
        mbms_join_time,
        mbms_Mode,
        mbmsIPIPv6Address,
        mbmsLeavingReason,
        mbmsSubsTermReason,
        mBMSapn,
        mbmsSerSubscriberList,
        mbmsNodeList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MBMSinformation(el);
}

let _cached_encoder_for_MBMSinformation: $.ASN1Encoder<MBMSinformation> | null = null;

/**
 * @summary Encodes a(n) MBMSinformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MBMSinformation, encoded as an ASN.1 Element.
 */
export
function _encode_MBMSinformation (value: MBMSinformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MBMSinformation) { _cached_encoder_for_MBMSinformation = function (value: MBMSinformation, elGetter: $.ASN1Encoder<MBMSinformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.mbmsServiceName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.mbmsServiceName, $.BER);
    }
    if (value.mbms_join_time !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.mbms_join_time, $.BER);
    }
    if (value.mbms_Mode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MBMSinformation_mbms_Mode, $.BER)(value.mbms_Mode, $.BER);
    }
    if (value.mbmsIPIPv6Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.mbmsIPIPv6Address, $.BER);
    }
    if (value.mbmsLeavingReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MBMSinformation_mbmsLeavingReason, $.BER)(value.mbmsLeavingReason, $.BER);
    }
    if (value.mbmsSubsTermReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MBMSinformation_mbmsSubsTermReason, $.BER)(value.mbmsSubsTermReason, $.BER);
    }
    if (value.mBMSapn !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.mBMSapn, $.BER);
    }
    if (value.mbmsSerSubscriberList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MBMSSerSubscriberList, $.BER)(value.mbmsSerSubscriberList, $.BER);
    }
    if (value.mbmsNodeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MBMSNodeList, $.BER)(value.mbmsNodeList, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MBMSinformation(value, elGetter);
}


/* eslint-enable */
