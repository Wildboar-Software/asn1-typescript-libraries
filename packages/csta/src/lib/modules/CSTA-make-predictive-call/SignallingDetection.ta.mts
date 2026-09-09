/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import {
    SignallingCondition,
    _enum_for_SignallingCondition,
    _decode_SignallingCondition,
    _encode_SignallingCondition
} from "../CSTA-make-predictive-call/SignallingCondition.ta.mjs";

import {
    SignallingConditionsAction,
    _enum_for_SignallingConditionsAction,
    _decode_SignallingConditionsAction,
    _encode_SignallingConditionsAction
} from "../CSTA-make-predictive-call/SignallingConditionsAction.ta.mjs";



/**
 * @summary SignallingDetection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignallingDetection ::= SEQUENCE
 * {     signallingCondition         SignallingCondition,
 *     signallingConditionsAction     SignallingConditionsAction }
 * ```
 * 
 * @class
 */
export
class SignallingDetection {
    constructor (
        /**
         * @summary `signallingCondition`.
         * @public
         * @readonly
         */
        readonly signallingCondition: SignallingCondition,
        /**
         * @summary `signallingConditionsAction`.
         * @public
         * @readonly
         */
        readonly signallingConditionsAction: SignallingConditionsAction
    ) {}

    /**
     * @summary Restructures an object into a SignallingDetection
     * @description
     * 
     * This takes an `object` and converts it to a `SignallingDetection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignallingDetection`.
     * @returns {SignallingDetection}
     */
    public static _from_object (_o: { [_K in keyof (SignallingDetection)]: (SignallingDetection)[_K] }): SignallingDetection {
        return new SignallingDetection(_o.signallingCondition, _o.signallingConditionsAction);
    }

        /**
         * @summary The enum used as the type of the component `signallingCondition`
         * @public
         * @static
         */

    public static _enum_for_signallingCondition = _enum_for_SignallingCondition;        /**
         * @summary The enum used as the type of the component `signallingConditionsAction`
         * @public
         * @static
         */

    public static _enum_for_signallingConditionsAction = _enum_for_SignallingConditionsAction;
}

/**
 * @summary The Leading Root Component Types of SignallingDetection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignallingDetection: $.ComponentSpec[] = [
    new $.ComponentSpec("signallingCondition", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("signallingConditionsAction", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of SignallingDetection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignallingDetection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SignallingDetection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignallingDetection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SignallingDetection: $.ASN1Decoder<SignallingDetection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignallingDetection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignallingDetection (el: _Element): SignallingDetection {
    if (!_cached_decoder_for_SignallingDetection) { _cached_decoder_for_SignallingDetection = function (el: _Element): SignallingDetection {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SignallingDetection contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "signallingCondition";
    sequence[1].name = "signallingConditionsAction";
    let signallingCondition!: SignallingCondition;
    let signallingConditionsAction!: SignallingConditionsAction;
    signallingCondition = _decode_SignallingCondition(sequence[0]);
    signallingConditionsAction = _decode_SignallingConditionsAction(sequence[1]);
    return new SignallingDetection(
        signallingCondition,
        signallingConditionsAction,

    );
}; }
    return _cached_decoder_for_SignallingDetection(el);
}

let _cached_encoder_for_SignallingDetection: $.ASN1Encoder<SignallingDetection> | null = null;

/**
 * @summary Encodes a(n) SignallingDetection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignallingDetection, encoded as an ASN.1 Element.
 */
export
function _encode_SignallingDetection (value: SignallingDetection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignallingDetection) { _cached_encoder_for_SignallingDetection = function (value: SignallingDetection, elGetter: $.ASN1Encoder<SignallingDetection>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SignallingCondition(value.signallingCondition, $.BER),
            /* REQUIRED   */ _encode_SignallingConditionsAction(value.signallingConditionsAction, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignallingDetection(value, elGetter);
}


/* eslint-enable */
