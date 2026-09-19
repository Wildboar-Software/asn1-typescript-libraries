/* eslint-disable */
import {
    BIT_STRING,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TraceDepth, _decode_TraceDepth, _encode_TraceDepth, _enum_for_TraceDepth } from "../TS33128Payloads/TraceDepth.ta.mjs";
// export { TraceDepth, _enum_for_TraceDepth, TraceDepth_minimum /* IMPORTED_LONG_ENUMERATION_ITEM */, minimum /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_medium /* IMPORTED_LONG_ENUMERATION_ITEM */, medium /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_maximum /* IMPORTED_LONG_ENUMERATION_ITEM */, maximum /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_minimumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, minimumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_mediumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, mediumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, TraceDepth_maximumWithoutVendorSpecificExtension /* IMPORTED_LONG_ENUMERATION_ITEM */, maximumWithoutVendorSpecificExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TraceDepth, _encode_TraceDepth } from "../TS33128Payloads/TraceDepth.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { MDTConfiguration, _decode_MDTConfiguration, _encode_MDTConfiguration, _enum_for_MDTConfiguration } from "../TS33128Payloads/MDTConfiguration.ta.mjs";
// export { MDTConfiguration, _enum_for_MDTConfiguration, MDTConfiguration_mDTConfigurationNR /* IMPORTED_LONG_ENUMERATION_ITEM */, mDTConfigurationNR /* IMPORTED_SHORT_ENUMERATION_ITEM */, MDTConfiguration_mDTConfigurationEUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, mDTConfigurationEUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MDTConfiguration, _encode_MDTConfiguration } from "../TS33128Payloads/MDTConfiguration.ta.mjs";


/**
 * @summary TraceActivationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceActivationInfo ::= SEQUENCE
 * {
 *     nGRANTraceID                     [1] OCTET STRING (SIZE(8)),
 *     interfacestoTrace                [2] BIT STRING (SIZE(8)),
 *     traceDepth                       [3] TraceDepth,
 *     traceCollectionEntityIPAddress   [4] IPAddress,
 *     mDTConfiguration                 [5] MDTConfiguration OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TraceActivationInfo {
    constructor (
        /**
         * @summary `nGRANTraceID`.
         * @public
         * @readonly
         */
        readonly nGRANTraceID: OCTET_STRING,
        /**
         * @summary `interfacestoTrace`.
         * @public
         * @readonly
         */
        readonly interfacestoTrace: BIT_STRING,
        /**
         * @summary `traceDepth`.
         * @public
         * @readonly
         */
        readonly traceDepth: TraceDepth,
        /**
         * @summary `traceCollectionEntityIPAddress`.
         * @public
         * @readonly
         */
        readonly traceCollectionEntityIPAddress: IPAddress,
        /**
         * @summary `mDTConfiguration`.
         * @public
         * @readonly
         */
        readonly mDTConfiguration: OPTIONAL<MDTConfiguration>
    ) {}

    /**
     * @summary Restructures an object into a TraceActivationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TraceActivationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TraceActivationInfo`.
     * @returns {TraceActivationInfo}
     */
    public static _from_object (_o: { [_K in keyof (TraceActivationInfo)]: (TraceActivationInfo)[_K] }): TraceActivationInfo {
        return new TraceActivationInfo(_o.nGRANTraceID, _o.interfacestoTrace, _o.traceDepth, _o.traceCollectionEntityIPAddress, _o.mDTConfiguration);
    }

        /**
         * @summary The enum used as the type of the component `traceDepth`
         * @public
         * @static
         */

    public static _enum_for_traceDepth = _enum_for_TraceDepth;        /**
         * @summary The enum used as the type of the component `mDTConfiguration`
         * @public
         * @static
         */

    public static _enum_for_mDTConfiguration = _enum_for_MDTConfiguration;
}

/**
 * @summary The Leading Root Component Types of TraceActivationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TraceActivationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("nGRANTraceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("interfacestoTrace", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("traceDepth", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("traceCollectionEntityIPAddress", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mDTConfiguration", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TraceActivationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TraceActivationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TraceActivationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TraceActivationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TraceActivationInfo: $.ASN1Decoder<TraceActivationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceActivationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceActivationInfo (el: _Element): TraceActivationInfo {
    if (!_cached_decoder_for_TraceActivationInfo) { _cached_decoder_for_TraceActivationInfo = function (el: _Element): TraceActivationInfo {
    let nGRANTraceID!: OCTET_STRING;
    let interfacestoTrace!: BIT_STRING;
    let traceDepth!: TraceDepth;
    let traceCollectionEntityIPAddress!: IPAddress;
    let mDTConfiguration: OPTIONAL<MDTConfiguration>;
    const callbacks: $.DecodingMap = {
        "nGRANTraceID": (_el: _Element): void => { nGRANTraceID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "interfacestoTrace": (_el: _Element): void => { interfacestoTrace = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "traceDepth": (_el: _Element): void => { traceDepth = $._decode_implicit<TraceDepth>(() => _decode_TraceDepth)(_el); },
        "traceCollectionEntityIPAddress": (_el: _Element): void => { traceCollectionEntityIPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "mDTConfiguration": (_el: _Element): void => { mDTConfiguration = $._decode_implicit<MDTConfiguration>(() => _decode_MDTConfiguration)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TraceActivationInfo,
        _extension_additions_list_spec_for_TraceActivationInfo,
        _root_component_type_list_2_spec_for_TraceActivationInfo,
        undefined,
    );
    return new TraceActivationInfo(
        nGRANTraceID,
        interfacestoTrace,
        traceDepth,
        traceCollectionEntityIPAddress,
        mDTConfiguration
    );
}; }
    return _cached_decoder_for_TraceActivationInfo(el);
}

let _cached_encoder_for_TraceActivationInfo: $.ASN1Encoder<TraceActivationInfo> | null = null;

/**
 * @summary Encodes a(n) TraceActivationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceActivationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TraceActivationInfo (value: TraceActivationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceActivationInfo) { _cached_encoder_for_TraceActivationInfo = function (value: TraceActivationInfo, elGetter: $.ASN1Encoder<TraceActivationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.nGRANTraceID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER)(value.interfacestoTrace, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TraceDepth, $.BER)(value.traceDepth, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_IPAddress, $.BER)(value.traceCollectionEntityIPAddress, $.BER),
            /* IF_ABSENT  */ ((value.mDTConfiguration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MDTConfiguration, $.BER)(value.mDTConfiguration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TraceActivationInfo(value, elGetter);
}


/* eslint-enable */
