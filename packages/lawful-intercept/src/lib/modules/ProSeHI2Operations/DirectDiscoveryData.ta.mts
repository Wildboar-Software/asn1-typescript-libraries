/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ProSeAppMask, _decode_ProSeAppMask, _encode_ProSeAppMask } from "../ProSeHI2Operations/ProSeAppMask.ta.mjs";
// export { ProSeAppMask, _decode_ProSeAppMask, _encode_ProSeAppMask } from "../ProSeHI2Operations/ProSeAppMask.ta.mjs";


/**
 * @summary DirectDiscoveryData
 * @description
 * 
 * Discovery PLMN, application name, announced or filtered application code,
 * optional mask, and the timer the network assigned. Stage 2 allows more than
 * one PLMN, name, timer, and code when the target is monitoring; this structure
 * carries one of each. Several masks can be carried together. 3GPP TS 33.108,
 * clause 13.2.2.2 and annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectDiscoveryData ::= SEQUENCE
 * {
 *     discoveryPLMNID             [1] UTF8String,
 *     proseAppIdName                [2] UTF8String,
 *     proseAppCode                [3] OCTET STRING (SIZE (23)),
 *             -- See format in TS 23.003 [25]
 *     proseAppMask                [4] ProSeAppMask OPTIONAL,
 *     timer                        [5] INTEGER,
 *     
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class DirectDiscoveryData {
    /**
     * @summary `discoveryPLMNID`.
     * @description
     * 
     * PLMN where discovery takes place. Required. On a discovery request, more
     * than one may be reported when the target is monitoring. The character
     * format is not further defined. 3GPP TS 33.108, clause 13.2, tables
     * 13.2.1-2 and 13.2.2.2-1.
     * 
     * @public
     * @readonly
     */
    readonly discoveryPLMNID: UTF8String;
    /**
     * @summary `proseAppIdName`.
     * @description
     * 
     * Identity of a user within one application. Required. On a discovery
     * request, more than one may be reported when the target is monitoring.
     * 3GPP TS 33.108, clause 13.2, table 13.2.1-2.
     * 
     * @public
     * @readonly
     */
    readonly proseAppIdName: UTF8String;
    /**
     * @summary `proseAppCode`.
     * @description
     * 
     * Bit string announced over the air, or included in a discovery filter
     * applied by the UE. Required. 23 octets, format in 3GPP TS 23.003
     * (reference 25). On a discovery request, more than one may be reported
     * when the target is monitoring. 3GPP TS 33.108, clause 13.2 and annex
     * B.13.
     * 
     * @public
     * @readonly
     */
    readonly proseAppCode: OCTET_STRING;
    /**
     * @summary `proseAppMask`.
     * @description
     * 
     * Mask the monitoring UE uses for full or partial matching against the
     * application code. Same length as that code. Conditional on a discovery
     * request, and only when the target is monitoring and a mask is available.
     * A discovery filter may include several masks. Not listed on the
     * match-report record. 3GPP TS 33.108, clause 13.2.2.2, table 13.2.2.2-1,
     * and annex B.13.
     * 
     * @public
     * @readonly
     */
    readonly proseAppMask: OPTIONAL<ProSeAppMask>;
    /**
     * @summary `timer`.
     * @description
     * 
     * Validity Timer or Time to Live that the network assigned to an
     * application code or discovery filter. It limits how long the UE may
     * announce or monitor. Required. The unit is not stated. On a discovery
     * request, more than one may be reported when the target is monitoring.
     * 3GPP TS 33.108, clause 13.2, table 13.2.1-2.
     * 
     * @public
     * @readonly
     */
    readonly timer: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        discoveryPLMNID: UTF8String,
        proseAppIdName: UTF8String,
        proseAppCode: OCTET_STRING,
        proseAppMask: OPTIONAL<ProSeAppMask>,
        timer: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.discoveryPLMNID = discoveryPLMNID;
        this.proseAppIdName = proseAppIdName;
        this.proseAppCode = proseAppCode;
        this.proseAppMask = proseAppMask;
        this.timer = timer;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DirectDiscoveryData
     * @description
     * 
     * This takes an `object` and converts it to a `DirectDiscoveryData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectDiscoveryData`.
     * @returns {DirectDiscoveryData}
     */
    public static _from_object (_o: { [_K in keyof (DirectDiscoveryData)]: (DirectDiscoveryData)[_K] }): DirectDiscoveryData {
        return new DirectDiscoveryData(_o.discoveryPLMNID, _o.proseAppIdName, _o.proseAppCode, _o.proseAppMask, _o.timer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DirectDiscoveryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DirectDiscoveryData: $.ComponentSpec[] = [
    new $.ComponentSpec("discoveryPLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("proseAppIdName", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("proseAppCode", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("proseAppMask", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timer", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DirectDiscoveryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DirectDiscoveryData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DirectDiscoveryData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DirectDiscoveryData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DirectDiscoveryData: $.ASN1Decoder<DirectDiscoveryData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectDiscoveryData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectDiscoveryData (el: _Element): DirectDiscoveryData {
    if (!_cached_decoder_for_DirectDiscoveryData) { _cached_decoder_for_DirectDiscoveryData = function (el: _Element): DirectDiscoveryData {
    let discoveryPLMNID!: UTF8String;
    let proseAppIdName!: UTF8String;
    let proseAppCode!: OCTET_STRING;
    let proseAppMask: OPTIONAL<ProSeAppMask>;
    let timer!: INTEGER;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "discoveryPLMNID": (_el: _Element): void => { discoveryPLMNID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "proseAppIdName": (_el: _Element): void => { proseAppIdName = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "proseAppCode": (_el: _Element): void => {
            proseAppCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (proseAppCode.length < 23 || proseAppCode.length > 23) {
                throw new ASN1SizeError("DirectDiscoveryData.proseAppCode violates SIZE constraint");
            }
        },
        "proseAppMask": (_el: _Element): void => { proseAppMask = $._decode_explicit<ProSeAppMask>(() => _decode_ProSeAppMask)(_el); },
        "timer": (_el: _Element): void => { timer = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DirectDiscoveryData,
        _extension_additions_list_spec_for_DirectDiscoveryData,
        _root_component_type_list_2_spec_for_DirectDiscoveryData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DirectDiscoveryData(
        discoveryPLMNID,
        proseAppIdName,
        proseAppCode,
        proseAppMask,
        timer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DirectDiscoveryData(el);
}

let _cached_encoder_for_DirectDiscoveryData: $.ASN1Encoder<DirectDiscoveryData> | null = null;

/**
 * @summary Encodes a(n) DirectDiscoveryData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectDiscoveryData, encoded as an ASN.1 Element.
 */
export
function _encode_DirectDiscoveryData (value: DirectDiscoveryData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectDiscoveryData) { _cached_encoder_for_DirectDiscoveryData = function (value: DirectDiscoveryData, elGetter: $.ASN1Encoder<DirectDiscoveryData>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.discoveryPLMNID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.proseAppIdName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.proseAppCode, $.BER);
    if (value.proseAppMask !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_ProSeAppMask, $.BER)(value.proseAppMask, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.timer, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DirectDiscoveryData(value, elGetter);
}


/* eslint-enable */
