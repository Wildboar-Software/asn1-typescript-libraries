/* eslint-disable */
import {
    OPTIONAL,
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
import { Start_Request_executionArgument, _decode_Start_Request_executionArgument, _encode_Start_Request_executionArgument } from "../ISO-9506-MMS-1/Start-Request-executionArgument.ta.mjs";
// export { Start_Request_executionArgument, _decode_Start_Request_executionArgument, _encode_Start_Request_executionArgument } from "../ISO-9506-MMS-1/Start-Request-executionArgument.ta.mjs";


/**
 * @summary Start_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Start-Request ::= SEQUENCE {
 *    programInvocationName      [0] IMPLICIT Identifier,
 *    executionArgument          CHOICE {
 *        simpleString               [1] IMPLICIT MMSString,
 *        encodedString              EXTERNAL,
 *        embeddedString             EMBEDDED PDV  } OPTIONAL }
 * ```
 * 
 * @class
 */
export
class Start_Request {
    constructor (
        /**
         * @summary `programInvocationName`.
         * @public
         * @readonly
         */
        readonly programInvocationName: Identifier,
        /**
         * @summary `executionArgument`.
         * @public
         * @readonly
         */
        readonly executionArgument: OPTIONAL<Start_Request_executionArgument>
    ) {}

    /**
     * @summary Restructures an object into a Start_Request
     * @description
     * 
     * This takes an `object` and converts it to a `Start_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Start_Request`.
     * @returns {Start_Request}
     */
    public static _from_object (_o: { [_K in keyof (Start_Request)]: (Start_Request)[_K] }): Start_Request {
        return new Start_Request(_o.programInvocationName, _o.executionArgument);
    }


}

/**
 * @summary The Leading Root Component Types of Start_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Start_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("programInvocationName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("executionArgument", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.universal, 8), $.hasTag(_TagClass.universal, 11)))
];

/**
 * @summary The Trailing Root Component Types of Start_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Start_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Start_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Start_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Start_Request: $.ASN1Decoder<Start_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Start_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Start_Request (el: _Element): Start_Request {
    if (!_cached_decoder_for_Start_Request) { _cached_decoder_for_Start_Request = function (el: _Element): Start_Request {
    let programInvocationName!: Identifier;
    let executionArgument: OPTIONAL<Start_Request_executionArgument>;
    const callbacks: $.DecodingMap = {
        "programInvocationName": (_el: _Element): void => { programInvocationName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "executionArgument": (_el: _Element): void => { executionArgument = _decode_Start_Request_executionArgument(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Start_Request,
        _extension_additions_list_spec_for_Start_Request,
        _root_component_type_list_2_spec_for_Start_Request,
        undefined,
    );
    return new Start_Request(
        programInvocationName,
        executionArgument
    );
}; }
    return _cached_decoder_for_Start_Request(el);
}

let _cached_encoder_for_Start_Request: $.ASN1Encoder<Start_Request> | null = null;

/**
 * @summary Encodes a(n) Start_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Start_Request, encoded as an ASN.1 Element.
 */
export
function _encode_Start_Request (value: Start_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Start_Request) { _cached_encoder_for_Start_Request = function (value: Start_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.programInvocationName, $.BER),
            /* IF_ABSENT  */ ((value.executionArgument === undefined) ? undefined : _encode_Start_Request_executionArgument(value.executionArgument, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Start_Request(value, elGetter);
}


/* eslint-enable */
