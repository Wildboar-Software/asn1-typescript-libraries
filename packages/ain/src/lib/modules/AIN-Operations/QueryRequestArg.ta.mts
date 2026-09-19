/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
import { ProvideInfo, _decode_ProvideInfo, _encode_ProvideInfo } from "../AIN-Parameters/ProvideInfo.ta.mjs";
// export { ProvideInfo, _decode_ProvideInfo, _encode_ProvideInfo } from "../AIN-Parameters/ProvideInfo.ta.mjs";


/**
 * @summary QueryRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueryRequestArg ::= SEQUENCE{
 *             userID                         UserID OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             controlEncountered             ControlEncountered OPTIONAL,
 *             provideInfo                    ProvideInfo OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class QueryRequestArg {
    constructor (
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: OPTIONAL<UserID>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `controlEncountered`.
         * @public
         * @readonly
         */
        readonly controlEncountered: OPTIONAL<ControlEncountered>,
        /**
         * @summary `provideInfo`.
         * @public
         * @readonly
         */
        readonly provideInfo: OPTIONAL<ProvideInfo>
    ) {}

    /**
     * @summary Restructures an object into a QueryRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `QueryRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QueryRequestArg`.
     * @returns {QueryRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (QueryRequestArg)]: (QueryRequestArg)[_K] }): QueryRequestArg {
        return new QueryRequestArg(_o.userID, _o.amp1, _o.amp2, _o.extensionParameter, _o.controlEncountered, _o.provideInfo);
    }


}

/**
 * @summary The Leading Root Component Types of QueryRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QueryRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("controlEncountered", true, $.hasTag(_TagClass.context, 127)),
    new $.ComponentSpec("provideInfo", true, $.hasTag(_TagClass.context, 114))
];

/**
 * @summary The Trailing Root Component Types of QueryRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QueryRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QueryRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QueryRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QueryRequestArg: $.ASN1Decoder<QueryRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueryRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueryRequestArg (el: _Element): QueryRequestArg {
    if (!_cached_decoder_for_QueryRequestArg) { _cached_decoder_for_QueryRequestArg = function (el: _Element): QueryRequestArg {
    let userID: OPTIONAL<UserID>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let controlEncountered: OPTIONAL<ControlEncountered>;
    let provideInfo: OPTIONAL<ProvideInfo>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "controlEncountered": (_el: _Element): void => { controlEncountered = _decode_ControlEncountered(_el); },
        "provideInfo": (_el: _Element): void => { provideInfo = _decode_ProvideInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QueryRequestArg,
        _extension_additions_list_spec_for_QueryRequestArg,
        _root_component_type_list_2_spec_for_QueryRequestArg,
        undefined,
    );
    return new QueryRequestArg(
        userID,
        amp1,
        amp2,
        extensionParameter,
        controlEncountered,
        provideInfo
    );
}; }
    return _cached_decoder_for_QueryRequestArg(el);
}

let _cached_encoder_for_QueryRequestArg: $.ASN1Encoder<QueryRequestArg> | null = null;

/**
 * @summary Encodes a(n) QueryRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_QueryRequestArg (value: QueryRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueryRequestArg) { _cached_encoder_for_QueryRequestArg = function (value: QueryRequestArg, elGetter: $.ASN1Encoder<QueryRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.userID === undefined) ? undefined : _encode_UserID(value.userID, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.controlEncountered === undefined) ? undefined : _encode_ControlEncountered(value.controlEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.provideInfo === undefined) ? undefined : _encode_ProvideInfo(value.provideInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QueryRequestArg(value, elGetter);
}


/* eslint-enable */
