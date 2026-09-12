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
import { StartUnitControl_Request_executionArgument, _decode_StartUnitControl_Request_executionArgument, _encode_StartUnitControl_Request_executionArgument } from "../ISO-9506-MMS-1/StartUnitControl-Request-executionArgument.ta.mjs";
// export { StartUnitControl_Request_executionArgument, _decode_StartUnitControl_Request_executionArgument, _encode_StartUnitControl_Request_executionArgument } from "../ISO-9506-MMS-1/StartUnitControl-Request-executionArgument.ta.mjs";


/**
 * @summary StartUnitControl_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartUnitControl-Request ::= SEQUENCE {
 *     unitControlName        [0] IMPLICIT Identifier, -- Unit Control Name
 *     executionArgument      CHOICE {
 *         simpleString           [1] IMPLICIT MMSString,
 *         encodedString          EXTERNAL,
 *         enmbeddedString        EMBEDDED PDV } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartUnitControl_Request {
    constructor (
        /**
         * @summary `unitControlName`.
         * @public
         * @readonly
         */
        readonly unitControlName: Identifier,
        /**
         * @summary `executionArgument`.
         * @public
         * @readonly
         */
        readonly executionArgument: OPTIONAL<StartUnitControl_Request_executionArgument>
    ) {}

    /**
     * @summary Restructures an object into a StartUnitControl_Request
     * @description
     * 
     * This takes an `object` and converts it to a `StartUnitControl_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartUnitControl_Request`.
     * @returns {StartUnitControl_Request}
     */
    public static _from_object (_o: { [_K in keyof (StartUnitControl_Request)]: (StartUnitControl_Request)[_K] }): StartUnitControl_Request {
        return new StartUnitControl_Request(_o.unitControlName, _o.executionArgument);
    }


}

/**
 * @summary The Leading Root Component Types of StartUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartUnitControl_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("unitControlName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("executionArgument", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.universal, 8), $.hasTag(_TagClass.universal, 11)))
];

/**
 * @summary The Trailing Root Component Types of StartUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartUnitControl_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartUnitControl_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartUnitControl_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartUnitControl_Request: $.ASN1Decoder<StartUnitControl_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartUnitControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartUnitControl_Request (el: _Element): StartUnitControl_Request {
    if (!_cached_decoder_for_StartUnitControl_Request) { _cached_decoder_for_StartUnitControl_Request = function (el: _Element): StartUnitControl_Request {
    let unitControlName!: Identifier;
    let executionArgument: OPTIONAL<StartUnitControl_Request_executionArgument>;
    const callbacks: $.DecodingMap = {
        "unitControlName": (_el: _Element): void => { unitControlName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "executionArgument": (_el: _Element): void => { executionArgument = _decode_StartUnitControl_Request_executionArgument(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartUnitControl_Request,
        _extension_additions_list_spec_for_StartUnitControl_Request,
        _root_component_type_list_2_spec_for_StartUnitControl_Request,
        undefined,
    );
    return new StartUnitControl_Request(
        unitControlName,
        executionArgument
    );
}; }
    return _cached_decoder_for_StartUnitControl_Request(el);
}

let _cached_encoder_for_StartUnitControl_Request: $.ASN1Encoder<StartUnitControl_Request> | null = null;

/**
 * @summary Encodes a(n) StartUnitControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartUnitControl_Request, encoded as an ASN.1 Element.
 */
export
function _encode_StartUnitControl_Request (value: StartUnitControl_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartUnitControl_Request) { _cached_encoder_for_StartUnitControl_Request = function (value: StartUnitControl_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.unitControlName, $.BER),
            /* IF_ABSENT  */ ((value.executionArgument === undefined) ? undefined : _encode_StartUnitControl_Request_executionArgument(value.executionArgument, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartUnitControl_Request(value, elGetter);
}


/* eslint-enable */
