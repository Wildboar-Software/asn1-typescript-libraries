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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary GetCapabilityList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCapabilityList-Request ::= SEQUENCE {
 *    continueAfter          MMSString OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class GetCapabilityList_Request {
    constructor (
        /**
         * @summary `continueAfter`.
         * @public
         * @readonly
         */
        readonly continueAfter: OPTIONAL<MMSString>
    ) {}

    /**
     * @summary Restructures an object into a GetCapabilityList_Request
     * @description
     * 
     * This takes an `object` and converts it to a `GetCapabilityList_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetCapabilityList_Request`.
     * @returns {GetCapabilityList_Request}
     */
    public static _from_object (_o: { [_K in keyof (GetCapabilityList_Request)]: (GetCapabilityList_Request)[_K] }): GetCapabilityList_Request {
        return new GetCapabilityList_Request(_o.continueAfter);
    }


}

/**
 * @summary The Leading Root Component Types of GetCapabilityList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetCapabilityList_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("continueAfter", true, $.or($.hasTag(_TagClass.universal, 12), $.hasTag(_TagClass.universal, 26)))
];

/**
 * @summary The Trailing Root Component Types of GetCapabilityList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetCapabilityList_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetCapabilityList_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetCapabilityList_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetCapabilityList_Request: $.ASN1Decoder<GetCapabilityList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCapabilityList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCapabilityList_Request (el: _Element): GetCapabilityList_Request {
    if (!_cached_decoder_for_GetCapabilityList_Request) { _cached_decoder_for_GetCapabilityList_Request = function (el: _Element): GetCapabilityList_Request {
    let continueAfter: OPTIONAL<MMSString>;
    const callbacks: $.DecodingMap = {
        "continueAfter": (_el: _Element): void => { continueAfter = _decode_MMSString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetCapabilityList_Request,
        _extension_additions_list_spec_for_GetCapabilityList_Request,
        _root_component_type_list_2_spec_for_GetCapabilityList_Request,
        undefined,
    );
    return new GetCapabilityList_Request(
        continueAfter
    );
}; }
    return _cached_decoder_for_GetCapabilityList_Request(el);
}

let _cached_encoder_for_GetCapabilityList_Request: $.ASN1Encoder<GetCapabilityList_Request> | null = null;

/**
 * @summary Encodes a(n) GetCapabilityList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCapabilityList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetCapabilityList_Request (value: GetCapabilityList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCapabilityList_Request) { _cached_encoder_for_GetCapabilityList_Request = function (value: GetCapabilityList_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.continueAfter === undefined) ? undefined : _encode_MMSString(value.continueAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetCapabilityList_Request(value, elGetter);
}


/* eslint-enable */
