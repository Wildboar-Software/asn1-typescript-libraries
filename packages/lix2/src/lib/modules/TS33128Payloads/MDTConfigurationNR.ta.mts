/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MDTActivation, _decode_MDTActivation, _encode_MDTActivation, _enum_for_MDTActivation } from "../TS33128Payloads/MDTActivation.ta.mjs";
// export { MDTActivation, _enum_for_MDTActivation, MDTActivation_immediateMDTOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, immediateMDTOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MDTActivation_loggedMDTOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, loggedMDTOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, MDTActivation_immediateMDTandTrace /* IMPORTED_LONG_ENUMERATION_ITEM */, immediateMDTandTrace /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MDTActivation, _encode_MDTActivation } from "../TS33128Payloads/MDTActivation.ta.mjs";
import { AreaScopeOfMDT, _decode_AreaScopeOfMDT, _encode_AreaScopeOfMDT } from "../TS33128Payloads/AreaScopeOfMDT.ta.mjs";
// export { AreaScopeOfMDT, _decode_AreaScopeOfMDT, _encode_AreaScopeOfMDT } from "../TS33128Payloads/AreaScopeOfMDT.ta.mjs";
import { MDTMode, _decode_MDTMode, _encode_MDTMode } from "../TS33128Payloads/MDTMode.ta.mjs";
// export { MDTMode, _decode_MDTMode, _encode_MDTMode } from "../TS33128Payloads/MDTMode.ta.mjs";
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
// export { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";


/**
 * @summary MDTConfigurationNR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDTConfigurationNR ::= SEQUENCE
 * {
 *     mDTActivation                 [1] MDTActivation,
 *     areaScopeofMDT                [2] AreaScopeOfMDT,
 *     mDTModeNR                     [3] MDTMode,
 *     signallingBasedMDTPLMNList    [4] PLMNList
 * }
 * ```
 * 
 * @class
 */
export
class MDTConfigurationNR {
    constructor (
        /**
         * @summary `mDTActivation`.
         * @public
         * @readonly
         */
        readonly mDTActivation: MDTActivation,
        /**
         * @summary `areaScopeofMDT`.
         * @public
         * @readonly
         */
        readonly areaScopeofMDT: AreaScopeOfMDT,
        /**
         * @summary `mDTModeNR`.
         * @public
         * @readonly
         */
        readonly mDTModeNR: MDTMode,
        /**
         * @summary `signallingBasedMDTPLMNList`.
         * @public
         * @readonly
         */
        readonly signallingBasedMDTPLMNList: PLMNList
    ) {}

    /**
     * @summary Restructures an object into a MDTConfigurationNR
     * @description
     * 
     * This takes an `object` and converts it to a `MDTConfigurationNR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MDTConfigurationNR`.
     * @returns {MDTConfigurationNR}
     */
    public static _from_object (_o: { [_K in keyof (MDTConfigurationNR)]: (MDTConfigurationNR)[_K] }): MDTConfigurationNR {
        return new MDTConfigurationNR(_o.mDTActivation, _o.areaScopeofMDT, _o.mDTModeNR, _o.signallingBasedMDTPLMNList);
    }

        /**
         * @summary The enum used as the type of the component `mDTActivation`
         * @public
         * @static
         */

    public static _enum_for_mDTActivation = _enum_for_MDTActivation;
}

/**
 * @summary The Leading Root Component Types of MDTConfigurationNR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MDTConfigurationNR: $.ComponentSpec[] = [
    new $.ComponentSpec("mDTActivation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("areaScopeofMDT", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mDTModeNR", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("signallingBasedMDTPLMNList", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MDTConfigurationNR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MDTConfigurationNR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MDTConfigurationNR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MDTConfigurationNR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MDTConfigurationNR: $.ASN1Decoder<MDTConfigurationNR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDTConfigurationNR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDTConfigurationNR (el: _Element): MDTConfigurationNR {
    if (!_cached_decoder_for_MDTConfigurationNR) { _cached_decoder_for_MDTConfigurationNR = function (el: _Element): MDTConfigurationNR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("MDTConfigurationNR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mDTActivation";
    sequence[1].name = "areaScopeofMDT";
    sequence[2].name = "mDTModeNR";
    sequence[3].name = "signallingBasedMDTPLMNList";
    let mDTActivation!: MDTActivation;
    let areaScopeofMDT!: AreaScopeOfMDT;
    let mDTModeNR!: MDTMode;
    let signallingBasedMDTPLMNList!: PLMNList;
    mDTActivation = $._decode_implicit<MDTActivation>(() => _decode_MDTActivation)(sequence[0]);
    areaScopeofMDT = $._decode_explicit<AreaScopeOfMDT>(() => _decode_AreaScopeOfMDT)(sequence[1]);
    mDTModeNR = $._decode_explicit<MDTMode>(() => _decode_MDTMode)(sequence[2]);
    signallingBasedMDTPLMNList = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(sequence[3]);
    return new MDTConfigurationNR(
        mDTActivation,
        areaScopeofMDT,
        mDTModeNR,
        signallingBasedMDTPLMNList,

    );
}; }
    return _cached_decoder_for_MDTConfigurationNR(el);
}

let _cached_encoder_for_MDTConfigurationNR: $.ASN1Encoder<MDTConfigurationNR> | null = null;

/**
 * @summary Encodes a(n) MDTConfigurationNR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDTConfigurationNR, encoded as an ASN.1 Element.
 */
export
function _encode_MDTConfigurationNR (value: MDTConfigurationNR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDTConfigurationNR) { _cached_encoder_for_MDTConfigurationNR = function (value: MDTConfigurationNR, elGetter: $.ASN1Encoder<MDTConfigurationNR>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MDTActivation, $.BER)(value.mDTActivation, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_AreaScopeOfMDT, $.BER)(value.areaScopeofMDT, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_MDTMode, $.BER)(value.mDTModeNR, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PLMNList, $.BER)(value.signallingBasedMDTPLMNList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MDTConfigurationNR(value, elGetter);
}


/* eslint-enable */
