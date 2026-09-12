/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary Input_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Input-Request ::= SEQUENCE {
 *    operatorStationName    [0] IMPLICIT Identifier,
 *    echo                   [1] IMPLICIT BOOLEAN DEFAULT TRUE,
 *    listOfPromptData       [2] IMPLICIT SEQUENCE OF MMSString OPTIONAL,
 *    inputTimeOut           [3] IMPLICIT Unsigned32 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class Input_Request {
    constructor (
        /**
         * @summary `operatorStationName`.
         * @public
         * @readonly
         */
        readonly operatorStationName: Identifier,
        /**
         * @summary `echo`.
         * @public
         * @readonly
         */
        readonly echo: OPTIONAL<BOOLEAN>,
        /**
         * @summary `listOfPromptData`.
         * @public
         * @readonly
         */
        readonly listOfPromptData: OPTIONAL<MMSString[]>,
        /**
         * @summary `inputTimeOut`.
         * @public
         * @readonly
         */
        readonly inputTimeOut: OPTIONAL<Unsigned32>
    ) {}

    /**
     * @summary Restructures an object into a Input_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Input_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Input_Request`.
     * @returns {Input_Request}
     */
    public static _from_object (_o: { [_K in keyof (Input_Request)]: (Input_Request)[_K] }): Input_Request {
        return new Input_Request(_o.operatorStationName, _o.echo, _o.listOfPromptData, _o.inputTimeOut);
    }

    /**
     * @summary Getter that returns the default value for `echo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_echo () { return true; }
}

/**
 * @summary The Leading Root Component Types of Input_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Input_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("operatorStationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("echo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listOfPromptData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("inputTimeOut", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Input_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Input_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Input_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Input_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Input_Request: $.ASN1Decoder<Input_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Input_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Input_Request (el: _Element): Input_Request {
    if (!_cached_decoder_for_Input_Request) { _cached_decoder_for_Input_Request = function (el: _Element): Input_Request {
    let operatorStationName!: Identifier;
    let echo: OPTIONAL<BOOLEAN> = Input_Request._default_value_for_echo;
    let listOfPromptData: OPTIONAL<MMSString[]>;
    let inputTimeOut: OPTIONAL<Unsigned32>;
    const callbacks: $.DecodingMap = {
        "operatorStationName": (_el: _Element): void => { operatorStationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "echo": (_el: _Element): void => { echo = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "listOfPromptData": (_el: _Element): void => { listOfPromptData = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "inputTimeOut": (_el: _Element): void => { inputTimeOut = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Input_Request,
        _extension_additions_list_spec_for_Input_Request,
        _root_component_type_list_2_spec_for_Input_Request,
        undefined,
    );
    return new Input_Request(
        operatorStationName,
        echo,
        listOfPromptData,
        inputTimeOut
    );
}; }
    return _cached_decoder_for_Input_Request(el);
}

let _cached_encoder_for_Input_Request: $.ASN1Encoder<Input_Request> | null = null;

/**
 * @summary Encodes a(n) Input_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Input_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Input_Request (value: Input_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Input_Request) { _cached_encoder_for_Input_Request = function (value: Input_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.operatorStationName, $.BER),
            /* IF_DEFAULT */ (value.echo === undefined || $.deepEq(value.echo, Input_Request._default_value_for_echo) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.echo, $.BER)),
            /* IF_ABSENT  */ ((value.listOfPromptData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfPromptData, $.BER)),
            /* IF_ABSENT  */ ((value.inputTimeOut === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Unsigned32, $.BER)(value.inputTimeOut, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Input_Request(value, elGetter);
}


/* eslint-enable */
