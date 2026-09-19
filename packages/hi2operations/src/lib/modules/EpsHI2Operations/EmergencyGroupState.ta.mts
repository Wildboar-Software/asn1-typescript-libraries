/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EmergencyGroupState_clientEmergencyState, _decode_EmergencyGroupState_clientEmergencyState, _encode_EmergencyGroupState_clientEmergencyState, _enum_for_EmergencyGroupState_clientEmergencyState } from "../EpsHI2Operations/EmergencyGroupState-clientEmergencyState.ta.mjs";
// export { EmergencyGroupState_clientEmergencyState, _enum_for_EmergencyGroupState_clientEmergencyState, EmergencyGroupState_clientEmergencyState_inform /* IMPORTED_LONG_ENUMERATION_ITEM */, inform /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmergencyGroupState_clientEmergencyState_response /* IMPORTED_LONG_ENUMERATION_ITEM */, response /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmergencyGroupState_clientEmergencyState_cancelInform /* IMPORTED_LONG_ENUMERATION_ITEM */, EmergencyGroupState_clientEmergencyState_cancelResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_EmergencyGroupState_clientEmergencyState, _encode_EmergencyGroupState_clientEmergencyState } from "../EpsHI2Operations/EmergencyGroupState-clientEmergencyState.ta.mjs";
import { EmergencyGroupState_groupEmergencyState, _decode_EmergencyGroupState_groupEmergencyState, _encode_EmergencyGroupState_groupEmergencyState, _enum_for_EmergencyGroupState_groupEmergencyState } from "../EpsHI2Operations/EmergencyGroupState-groupEmergencyState.ta.mjs";
// export { EmergencyGroupState_groupEmergencyState, _enum_for_EmergencyGroupState_groupEmergencyState, EmergencyGroupState_groupEmergencyState_inForm /* IMPORTED_LONG_ENUMERATION_ITEM */, inForm /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmergencyGroupState_groupEmergencyState_reSponse /* IMPORTED_LONG_ENUMERATION_ITEM */, reSponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EmergencyGroupState_groupEmergencyState_cancelInform /* IMPORTED_LONG_ENUMERATION_ITEM */, EmergencyGroupState_groupEmergencyState_cancelResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_EmergencyGroupState_groupEmergencyState, _encode_EmergencyGroupState_groupEmergencyState } from "../EpsHI2Operations/EmergencyGroupState-groupEmergencyState.ta.mjs";


/**
 * @summary EmergencyGroupState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyGroupState ::= SEQUENCE
 * {
 *  -- indicates the state of the call, at least one of these information
 *  -- elements shall be present.
 *  clientEmergencyState [1] ENUMERATED
 * {
 *  -- in case of MCPTT call, indicates the response for the client
 *  inform (1),
 *  response (2),
 *  cancelInform (3),
 *  cancelResponse (4),
 *  ...
 * } OPTIONAL,
 *  groupEmergencyState [2] ENUMERATED
 * {
 *  -- in case of MCPTT group call, indicates if there is a group emergency or
 *  -- a response from the Target to indicate current Client state of emergency.
 *  inForm (1),
 *  reSponse (2),
 *  cancelInform (3),
 *  cancelResponse (4),
 * ...
 *  },
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class EmergencyGroupState {
    constructor (
        /**
         * @summary `clientEmergencyState`.
         * @public
         * @readonly
         */
        readonly clientEmergencyState: OPTIONAL<EmergencyGroupState_clientEmergencyState>,
        /**
         * @summary `groupEmergencyState`.
         * @public
         * @readonly
         */
        readonly groupEmergencyState: EmergencyGroupState_groupEmergencyState,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EmergencyGroupState
     * @description
     * 
     * This takes an `object` and converts it to a `EmergencyGroupState`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EmergencyGroupState`.
     * @returns {EmergencyGroupState}
     */
    public static _from_object (_o: { [_K in keyof (EmergencyGroupState)]: (EmergencyGroupState)[_K] }): EmergencyGroupState {
        return new EmergencyGroupState(_o.clientEmergencyState, _o.groupEmergencyState, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `clientEmergencyState`
         * @public
         * @static
         */

    public static _enum_for_clientEmergencyState = _enum_for_EmergencyGroupState_clientEmergencyState;        /**
         * @summary The enum used as the type of the component `groupEmergencyState`
         * @public
         * @static
         */

    public static _enum_for_groupEmergencyState = _enum_for_EmergencyGroupState_groupEmergencyState;
}

/**
 * @summary The Leading Root Component Types of EmergencyGroupState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EmergencyGroupState: $.ComponentSpec[] = [
    new $.ComponentSpec("clientEmergencyState", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("groupEmergencyState", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EmergencyGroupState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EmergencyGroupState: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EmergencyGroupState
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EmergencyGroupState: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EmergencyGroupState: $.ASN1Decoder<EmergencyGroupState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EmergencyGroupState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EmergencyGroupState (el: _Element): EmergencyGroupState {
    if (!_cached_decoder_for_EmergencyGroupState) { _cached_decoder_for_EmergencyGroupState = function (el: _Element): EmergencyGroupState {
    let clientEmergencyState: OPTIONAL<EmergencyGroupState_clientEmergencyState>;
    let groupEmergencyState!: EmergencyGroupState_groupEmergencyState;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "clientEmergencyState": (_el: _Element): void => { clientEmergencyState = $._decode_implicit<EmergencyGroupState_clientEmergencyState>(() => _decode_EmergencyGroupState_clientEmergencyState)(_el); },
        "groupEmergencyState": (_el: _Element): void => { groupEmergencyState = $._decode_implicit<EmergencyGroupState_groupEmergencyState>(() => _decode_EmergencyGroupState_groupEmergencyState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EmergencyGroupState,
        _extension_additions_list_spec_for_EmergencyGroupState,
        _root_component_type_list_2_spec_for_EmergencyGroupState,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EmergencyGroupState(
        clientEmergencyState,
        groupEmergencyState,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EmergencyGroupState(el);
}

let _cached_encoder_for_EmergencyGroupState: $.ASN1Encoder<EmergencyGroupState> | null = null;

/**
 * @summary Encodes a(n) EmergencyGroupState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmergencyGroupState, encoded as an ASN.1 Element.
 */
export
function _encode_EmergencyGroupState (value: EmergencyGroupState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EmergencyGroupState) { _cached_encoder_for_EmergencyGroupState = function (value: EmergencyGroupState, elGetter: $.ASN1Encoder<EmergencyGroupState>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.clientEmergencyState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EmergencyGroupState_clientEmergencyState, $.BER)(value.clientEmergencyState, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EmergencyGroupState_groupEmergencyState, $.BER)(value.groupEmergencyState, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EmergencyGroupState(value, elGetter);
}


/* eslint-enable */
