/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PositioningMethod, _decode_PositioningMethod, _encode_PositioningMethod, _enum_for_PositioningMethod } from "../TS33128Payloads/PositioningMethod.ta.mjs";
// export { PositioningMethod, _enum_for_PositioningMethod, PositioningMethod_cellID /* IMPORTED_LONG_ENUMERATION_ITEM */, cellID /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_eCID /* IMPORTED_LONG_ENUMERATION_ITEM */, eCID /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_oTDOA /* IMPORTED_LONG_ENUMERATION_ITEM */, oTDOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_barometricPressure /* IMPORTED_LONG_ENUMERATION_ITEM */, barometricPressure /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_bluetooth /* IMPORTED_LONG_ENUMERATION_ITEM */, bluetooth /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_mBS /* IMPORTED_LONG_ENUMERATION_ITEM */, mBS /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_motionSensor /* IMPORTED_LONG_ENUMERATION_ITEM */, motionSensor /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_dLTDOA /* IMPORTED_LONG_ENUMERATION_ITEM */, dLTDOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_dLAOD /* IMPORTED_LONG_ENUMERATION_ITEM */, dLAOD /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_multiRTT /* IMPORTED_LONG_ENUMERATION_ITEM */, multiRTT /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_nRECID /* IMPORTED_LONG_ENUMERATION_ITEM */, nRECID /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_uLTDOA /* IMPORTED_LONG_ENUMERATION_ITEM */, uLTDOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_uLAOA /* IMPORTED_LONG_ENUMERATION_ITEM */, uLAOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_networkSpecific /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSpecific /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_sLTDOA /* IMPORTED_LONG_ENUMERATION_ITEM */, sLTDOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_sLTOA /* IMPORTED_LONG_ENUMERATION_ITEM */, sLTOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_sLAOA /* IMPORTED_LONG_ENUMERATION_ITEM */, sLAOA /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMethod_sLRT /* IMPORTED_LONG_ENUMERATION_ITEM */, sLRT /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositioningMethod, _encode_PositioningMethod } from "../TS33128Payloads/PositioningMethod.ta.mjs";
import { PositioningMode, _decode_PositioningMode, _encode_PositioningMode, _enum_for_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
// export { PositioningMode, _enum_for_PositioningMode, PositioningMode_uEBased /* IMPORTED_LONG_ENUMERATION_ITEM */, uEBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_uEAssisted /* IMPORTED_LONG_ENUMERATION_ITEM */, uEAssisted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PositioningMode_conventional /* IMPORTED_LONG_ENUMERATION_ITEM */, conventional /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PositioningMode, _encode_PositioningMode } from "../TS33128Payloads/PositioningMode.ta.mjs";
import { Usage, _decode_Usage, _encode_Usage, _enum_for_Usage } from "../TS33128Payloads/Usage.ta.mjs";
// export { Usage, _enum_for_Usage, Usage_unsuccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsNotUsed /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsNotUsed /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToVerifyLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToVerifyLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successResultsUsedToGenerateLocation /* IMPORTED_LONG_ENUMERATION_ITEM */, successResultsUsedToGenerateLocation /* IMPORTED_SHORT_ENUMERATION_ITEM */, Usage_successMethodNotDetermined /* IMPORTED_LONG_ENUMERATION_ITEM */, successMethodNotDetermined /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Usage, _encode_Usage } from "../TS33128Payloads/Usage.ta.mjs";
import { MethodCode, _decode_MethodCode, _encode_MethodCode } from "../TS33128Payloads/MethodCode.ta.mjs";
// export { MethodCode, _decode_MethodCode, _encode_MethodCode } from "../TS33128Payloads/MethodCode.ta.mjs";


/**
 * @summary PositioningMethodAndUsage
 * @description
 * 
 * The PositioningMethodAndUsage type is derived from the data present in the
 * PositioningMethodAndUsage type defined in TS 29.572 [24] clause 6.1.6.2.15.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.41.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethodAndUsage ::= SEQUENCE
 * {
 *     method                              [1] PositioningMethod,
 *     mode                                [2] PositioningMode,
 *     usage                               [3] Usage,
 *     methodCode                          [4] MethodCode OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PositioningMethodAndUsage {
    /**
     * @summary `method`.
     * @description
     *
     * Indicates the related positioning method. Shall be encoded as described
     * in TS 29.572 [24] clause 6.1.6.3.6.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.41.
     *
     * @public
     * @readonly
     */
    readonly method: PositioningMethod;
    /**
     * @summary `mode`.
     * @description
     *
     * Indicates the mode of the location measurement from the related
     * positioning method. Shall be encoded as described in TS 29.572 [24]
     * clause 6.1.6.3.7.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.41.
     *
     * @public
     * @readonly
     */
    readonly mode: PositioningMode;
    /**
     * @summary `usage`.
     * @description
     *
     * Indicates the usage of the location measurement from the related
     * positioning method. Shall be encoded as described in TS 29.572 [24]
     * clause 6.1.6.3.9.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.41.
     *
     * @public
     * @readonly
     */
    readonly usage: Usage;
    /**
     * @summary `methodCode`.
     * @description
     *
     * This field shall be present when the method field is set as
     * "networkSpecific". Shall be encoded as described in TS 29.572 [24] clause
     * 6.1.6.2.15.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.41.
     *
     * @public
     * @readonly
     */
    readonly methodCode: OPTIONAL<MethodCode>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        method: PositioningMethod,
        mode: PositioningMode,
        usage: Usage,
        methodCode?: OPTIONAL<MethodCode>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.method = method;
        this.mode = mode;
        this.usage = usage;
        this.methodCode = methodCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PositioningMethodAndUsage
     * @description
     * 
     * This takes an `object` and converts it to a `PositioningMethodAndUsage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PositioningMethodAndUsage`.
     * @returns {PositioningMethodAndUsage}
     */
    public static _from_object (_o: { [_K in keyof (PositioningMethodAndUsage)]: (PositioningMethodAndUsage)[_K] }): PositioningMethodAndUsage {
        return new PositioningMethodAndUsage(_o.method, _o.mode, _o.usage, _o.methodCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `method`
         * @public
         * @static
         */

    public static _enum_for_method = _enum_for_PositioningMethod;        /**
         * @summary The enum used as the type of the component `mode`
         * @public
         * @static
         */

    public static _enum_for_mode = _enum_for_PositioningMode;        /**
         * @summary The enum used as the type of the component `usage`
         * @public
         * @static
         */

    public static _enum_for_usage = _enum_for_Usage;
}

/**
 * @summary The Leading Root Component Types of PositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PositioningMethodAndUsage: $.ComponentSpec[] = [
    new $.ComponentSpec("method", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mode", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("usage", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("methodCode", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PositioningMethodAndUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PositioningMethodAndUsage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PositioningMethodAndUsage: $.ASN1Decoder<PositioningMethodAndUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningMethodAndUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositioningMethodAndUsage (el: _Element): PositioningMethodAndUsage {
    if (!_cached_decoder_for_PositioningMethodAndUsage) { _cached_decoder_for_PositioningMethodAndUsage = function (el: _Element): PositioningMethodAndUsage {
    let method!: PositioningMethod;
    let mode!: PositioningMode;
    let usage!: Usage;
    let methodCode: OPTIONAL<MethodCode>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "method": (_el: _Element): void => { method = $._decode_implicit<PositioningMethod>(() => _decode_PositioningMethod)(_el); },
        "mode": (_el: _Element): void => { mode = $._decode_implicit<PositioningMode>(() => _decode_PositioningMode)(_el); },
        "usage": (_el: _Element): void => { usage = $._decode_implicit<Usage>(() => _decode_Usage)(_el); },
        "methodCode": (_el: _Element): void => { methodCode = $._decode_implicit<MethodCode>(() => _decode_MethodCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PositioningMethodAndUsage,
        _extension_additions_list_spec_for_PositioningMethodAndUsage,
        _root_component_type_list_2_spec_for_PositioningMethodAndUsage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PositioningMethodAndUsage(
        method,
        mode,
        usage,
        methodCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PositioningMethodAndUsage(el);
}

let _cached_encoder_for_PositioningMethodAndUsage: $.ASN1Encoder<PositioningMethodAndUsage> | null = null;

/**
 * @summary Encodes a(n) PositioningMethodAndUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningMethodAndUsage, encoded as an ASN.1 Element.
 */
export
function _encode_PositioningMethodAndUsage (value: PositioningMethodAndUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositioningMethodAndUsage) { _cached_encoder_for_PositioningMethodAndUsage = function (value: PositioningMethodAndUsage, elGetter: $.ASN1Encoder<PositioningMethodAndUsage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PositioningMethod, $.BER)(value.method, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PositioningMode, $.BER)(value.mode, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Usage, $.BER)(value.usage, $.BER);
    if (value.methodCode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_MethodCode, $.BER)(value.methodCode, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PositioningMethodAndUsage(value, elGetter);
}


/* eslint-enable */
