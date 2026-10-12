/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_flowControl_ArgumentType_controlReceiver, _encode_flowControl_ArgumentType_controlReceiver, _enum_for_flowControl_ArgumentType_controlReceiver, flowControl_ArgumentType_controlReceiver } from "../Flow-Control/flowControl-ArgumentType-controlReceiver.ta.mjs";

function integerInRange (value: INTEGER, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

/**
 * @summary flowControl_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * flowControl-ArgumentType ::= SEQUENCE {
 *   controlReceiver
 *     ENUMERATED {receiverNotReady(0), receiverReady(1)},
 *   maximumNumberOfMessages  [0] IMPLICIT INTEGER(1..255) OPTIONAL,
 *   replenishmentParameter   [1] IMPLICIT INTEGER(1..255) OPTIONAL,
 *   timerT                   [2] IMPLICIT INTEGER(1..30) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class flowControl_ArgumentType {
    /**
     * @summary `controlReceiver`.
     * @public
     * @readonly
     */
    readonly controlReceiver: flowControl_ArgumentType_controlReceiver;
    /**
     * @summary `maximumNumberOfMessages`.
     * @public
     * @readonly
     */
    readonly maximumNumberOfMessages: OPTIONAL<INTEGER>;
    /**
     * @summary `replenishmentParameter`.
     * @public
     * @readonly
     */
    readonly replenishmentParameter: OPTIONAL<INTEGER>;
    /**
     * @summary `timerT`.
     * @public
     * @readonly
     */
    readonly timerT: OPTIONAL<INTEGER>;

    constructor (
        controlReceiver: flowControl_ArgumentType_controlReceiver,
        maximumNumberOfMessages: OPTIONAL<INTEGER>,
        replenishmentParameter: OPTIONAL<INTEGER>,
        timerT: OPTIONAL<INTEGER>
    ) {
        if (maximumNumberOfMessages !== undefined && !integerInRange(maximumNumberOfMessages, 1n, 255n)) {
            throw new ASN1OverflowError("maximumNumberOfMessages violates INTEGER (1..255)");
        }
        if (replenishmentParameter !== undefined && !integerInRange(replenishmentParameter, 1n, 255n)) {
            throw new ASN1OverflowError("replenishmentParameter violates INTEGER (1..255)");
        }
        if (timerT !== undefined && !integerInRange(timerT, 1n, 30n)) {
            throw new ASN1OverflowError("timerT violates INTEGER (1..30)");
        }
        this.controlReceiver = controlReceiver;
        this.maximumNumberOfMessages = maximumNumberOfMessages;
        this.replenishmentParameter = replenishmentParameter;
        this.timerT = timerT;
    }

    /**
     * @summary Restructures an object into a flowControl_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `flowControl_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `flowControl_ArgumentType`.
     * @returns {flowControl_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (flowControl_ArgumentType)]: (flowControl_ArgumentType)[_K] }): flowControl_ArgumentType {
        return new flowControl_ArgumentType(_o.controlReceiver, _o.maximumNumberOfMessages, _o.replenishmentParameter, _o.timerT);
    }

        /**
         * @summary The enum used as the type of the component `controlReceiver`
         * @public
         * @static
         */

    public static _enum_for_controlReceiver = _enum_for_flowControl_ArgumentType_controlReceiver;
}

/**
 * @summary The Leading Root Component Types of flowControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_flowControl_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("controlReceiver", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("maximumNumberOfMessages", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("replenishmentParameter", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timerT", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of flowControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_flowControl_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of flowControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_flowControl_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_flowControl_ArgumentType: $.ASN1Decoder<flowControl_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) flowControl_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_flowControl_ArgumentType (el: _Element): flowControl_ArgumentType {
    if (!_cached_decoder_for_flowControl_ArgumentType) { _cached_decoder_for_flowControl_ArgumentType = function (el: _Element): flowControl_ArgumentType {
    let controlReceiver!: flowControl_ArgumentType_controlReceiver;
    let maximumNumberOfMessages: OPTIONAL<INTEGER>;
    let replenishmentParameter: OPTIONAL<INTEGER>;
    let timerT: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "controlReceiver": (_el: _Element): void => { controlReceiver = _decode_flowControl_ArgumentType_controlReceiver(_el); },
        "maximumNumberOfMessages": (_el: _Element): void => { maximumNumberOfMessages = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "replenishmentParameter": (_el: _Element): void => { replenishmentParameter = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timerT": (_el: _Element): void => { timerT = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_flowControl_ArgumentType,
        _extension_additions_list_spec_for_flowControl_ArgumentType,
        _root_component_type_list_2_spec_for_flowControl_ArgumentType,
        undefined,
    );
    return new flowControl_ArgumentType(
        controlReceiver,
        maximumNumberOfMessages,
        replenishmentParameter,
        timerT
    );
}; }
    return _cached_decoder_for_flowControl_ArgumentType(el);
}

let _cached_encoder_for_flowControl_ArgumentType: $.ASN1Encoder<flowControl_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) flowControl_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The flowControl_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_flowControl_ArgumentType (value: flowControl_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_flowControl_ArgumentType) { _cached_encoder_for_flowControl_ArgumentType = function (value: flowControl_ArgumentType, _elGetter: $.ASN1Encoder<flowControl_ArgumentType>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_flowControl_ArgumentType_controlReceiver(value.controlReceiver, $.BER);
    if (value.maximumNumberOfMessages !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.maximumNumberOfMessages, $.BER);
    }
    if (value.replenishmentParameter !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.replenishmentParameter, $.BER);
    }
    if (value.timerT !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.timerT, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_flowControl_ArgumentType(value, elGetter);
}


/* eslint-enable */
