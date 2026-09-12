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
import { CS_AlterEventConditionMonitoring_Request_changeDisplay, _decode_CS_AlterEventConditionMonitoring_Request_changeDisplay, _encode_CS_AlterEventConditionMonitoring_Request_changeDisplay } from "../ISO-9506-MMS-1/CS-AlterEventConditionMonitoring-Request-changeDisplay.ta.mjs";
// export { CS_AlterEventConditionMonitoring_Request_changeDisplay, _decode_CS_AlterEventConditionMonitoring_Request_changeDisplay, _encode_CS_AlterEventConditionMonitoring_Request_changeDisplay } from "../ISO-9506-MMS-1/CS-AlterEventConditionMonitoring-Request-changeDisplay.ta.mjs";


/**
 * @summary CS_AlterEventConditionMonitoring_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-AlterEventConditionMonitoring-Request ::= SEQUENCE {
 *    changeDisplay          CHOICE {
 *        string                 [0] IMPLICIT VisibleString,
 *        index                  [1] IMPLICIT INTEGER,
 *        noEnhancement          [2] NULL  } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class CS_AlterEventConditionMonitoring_Request {
    constructor (
        /**
         * @summary `changeDisplay`.
         * @public
         * @readonly
         */
        readonly changeDisplay: OPTIONAL<CS_AlterEventConditionMonitoring_Request_changeDisplay>
    ) {}

    /**
     * @summary Restructures an object into a CS_AlterEventConditionMonitoring_Request
     * @description
     * 
     * This takes an `object` and converts it to a `CS_AlterEventConditionMonitoring_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_AlterEventConditionMonitoring_Request`.
     * @returns {CS_AlterEventConditionMonitoring_Request}
     */
    public static _from_object (_o: { [_K in keyof (CS_AlterEventConditionMonitoring_Request)]: (CS_AlterEventConditionMonitoring_Request)[_K] }): CS_AlterEventConditionMonitoring_Request {
        return new CS_AlterEventConditionMonitoring_Request(_o.changeDisplay);
    }


}

/**
 * @summary The Leading Root Component Types of CS_AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("changeDisplay", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CS_AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_AlterEventConditionMonitoring_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_AlterEventConditionMonitoring_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_AlterEventConditionMonitoring_Request: $.ASN1Decoder<CS_AlterEventConditionMonitoring_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_AlterEventConditionMonitoring_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_AlterEventConditionMonitoring_Request (el: _Element): CS_AlterEventConditionMonitoring_Request {
    if (!_cached_decoder_for_CS_AlterEventConditionMonitoring_Request) { _cached_decoder_for_CS_AlterEventConditionMonitoring_Request = function (el: _Element): CS_AlterEventConditionMonitoring_Request {
    let changeDisplay: OPTIONAL<CS_AlterEventConditionMonitoring_Request_changeDisplay>;
    const callbacks: $.DecodingMap = {
        "changeDisplay": (_el: _Element): void => { changeDisplay = _decode_CS_AlterEventConditionMonitoring_Request_changeDisplay(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CS_AlterEventConditionMonitoring_Request,
        _extension_additions_list_spec_for_CS_AlterEventConditionMonitoring_Request,
        _root_component_type_list_2_spec_for_CS_AlterEventConditionMonitoring_Request,
        undefined,
    );
    return new CS_AlterEventConditionMonitoring_Request(
        changeDisplay
    );
}; }
    return _cached_decoder_for_CS_AlterEventConditionMonitoring_Request(el);
}

let _cached_encoder_for_CS_AlterEventConditionMonitoring_Request: $.ASN1Encoder<CS_AlterEventConditionMonitoring_Request> | null = null;

/**
 * @summary Encodes a(n) CS_AlterEventConditionMonitoring_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_AlterEventConditionMonitoring_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CS_AlterEventConditionMonitoring_Request (value: CS_AlterEventConditionMonitoring_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_AlterEventConditionMonitoring_Request) { _cached_encoder_for_CS_AlterEventConditionMonitoring_Request = function (value: CS_AlterEventConditionMonitoring_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.changeDisplay === undefined) ? undefined : _encode_CS_AlterEventConditionMonitoring_Request_changeDisplay(value.changeDisplay, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_AlterEventConditionMonitoring_Request(value, elGetter);
}


/* eslint-enable */
