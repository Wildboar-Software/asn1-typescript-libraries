/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceList, _decode_ServiceList, _encode_ServiceList } from "../Call-Offer-Operations-asn1-97/ServiceList.ta.mjs";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary PathRetainArg_extendedServiceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathRetainArg-extendedServiceList ::= SEQUENCE {
 *     serviceList ServiceList,
 *     extension Extension {{COExtSet}}
 * }
 * ```
 * 
 * @class
 */
export
class PathRetainArg_extendedServiceList {
    /**
     * @summary `serviceList`.
     * @public
     * @readonly
     */
    readonly serviceList: ServiceList;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: Extension;

    constructor (
        serviceList: ServiceList,
        extension: Extension
    ) {
        this.serviceList = serviceList;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a PathRetainArg_extendedServiceList
     * @description
     * 
     * This takes an `object` and converts it to a `PathRetainArg_extendedServiceList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PathRetainArg_extendedServiceList`.
     * @returns {PathRetainArg_extendedServiceList}
     */
    public static _from_object (_o: { [_K in keyof (PathRetainArg_extendedServiceList)]: (PathRetainArg_extendedServiceList)[_K] }): PathRetainArg_extendedServiceList {
        return new PathRetainArg_extendedServiceList(_o.serviceList, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of PathRetainArg_extendedServiceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PathRetainArg_extendedServiceList: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceList", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extension", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PathRetainArg_extendedServiceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PathRetainArg_extendedServiceList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PathRetainArg_extendedServiceList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PathRetainArg_extendedServiceList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PathRetainArg_extendedServiceList: $.ASN1Decoder<PathRetainArg_extendedServiceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PathRetainArg_extendedServiceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PathRetainArg_extendedServiceList (el: _Element): PathRetainArg_extendedServiceList {
    if (!_cached_decoder_for_PathRetainArg_extendedServiceList) { _cached_decoder_for_PathRetainArg_extendedServiceList = function (el: _Element): PathRetainArg_extendedServiceList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PathRetainArg-extendedServiceList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "serviceList";
    sequence[1].name = "extension";
    let serviceList!: ServiceList;
    let extension!: Extension;
    serviceList = _decode_ServiceList(sequence[0]);
    extension = _decode_Extension(sequence[1]);
    return new PathRetainArg_extendedServiceList(
        serviceList,
        extension,

    );
}; }
    return _cached_decoder_for_PathRetainArg_extendedServiceList(el);
}

let _cached_encoder_for_PathRetainArg_extendedServiceList: $.ASN1Encoder<PathRetainArg_extendedServiceList> | null = null;

/**
 * @summary Encodes a(n) PathRetainArg_extendedServiceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PathRetainArg_extendedServiceList, encoded as an ASN.1 Element.
 */
export
function _encode_PathRetainArg_extendedServiceList (value: PathRetainArg_extendedServiceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PathRetainArg_extendedServiceList) { _cached_encoder_for_PathRetainArg_extendedServiceList = function (value: PathRetainArg_extendedServiceList, elGetter: $.ASN1Encoder<PathRetainArg_extendedServiceList>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ServiceList(value.serviceList, $.BER),
        /* REQUIRED   */ _encode_Extension(value.extension, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PathRetainArg_extendedServiceList(value, elGetter);
}

/* eslint-enable */
