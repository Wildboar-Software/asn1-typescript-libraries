/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SupplService, _decode_SupplService, _encode_SupplService } from "../MMTelChargingDataTypes/SupplService.ta.mjs";
// export { SupplService, _decode_SupplService, _encode_SupplService } from "../MMTelChargingDataTypes/SupplService.ta.mjs";


/**
 * @summary MMTelInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMTelInformation ::= SET {
 *    listOfSupplServices   [0] IMPLICIT SEQUENCE  OF
 *       SupplService OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMTelInformation {
    /**
     * @summary `listOfSupplServices`.
     * @public
     * @readonly
     */
    readonly listOfSupplServices: OPTIONAL<SupplService[]>;

    constructor (
        listOfSupplServices: OPTIONAL<SupplService[]>
    ) {
        this.listOfSupplServices = listOfSupplServices;
    }

    /**
     * @summary Restructures an object into a MMTelInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MMTelInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMTelInformation`.
     * @returns {MMTelInformation}
     */
    public static _from_object (_o: { [_K in keyof (MMTelInformation)]: (MMTelInformation)[_K] }): MMTelInformation {
        return new MMTelInformation(_o.listOfSupplServices);
    }


}

/**
 * @summary The Leading Root Component Types of MMTelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMTelInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfSupplServices", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of MMTelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMTelInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMTelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMTelInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMTelInformation: $.ASN1Decoder<MMTelInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMTelInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMTelInformation (el: _Element): MMTelInformation {
    if (!_cached_decoder_for_MMTelInformation) { _cached_decoder_for_MMTelInformation = function (el: _Element): MMTelInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let listOfSupplServices: OPTIONAL<SupplService[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "listOfSupplServices": (_el: _Element): void => { listOfSupplServices = $._decode_implicit<SupplService[]>(() => $._decodeSequenceOf<SupplService>(() => _decode_SupplService))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMTelInformation,
        _extension_additions_list_spec_for_MMTelInformation,
        _root_component_type_list_2_spec_for_MMTelInformation,
        undefined,
    );
    return new MMTelInformation( /* SET_CONSTRUCTOR_CALL */
        listOfSupplServices
    );
}; }
    return _cached_decoder_for_MMTelInformation(el);
}

let _cached_encoder_for_MMTelInformation: $.ASN1Encoder<MMTelInformation> | null = null;

/**
 * @summary Encodes a(n) MMTelInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMTelInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MMTelInformation (value: MMTelInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMTelInformation) { _cached_encoder_for_MMTelInformation = function (value: MMTelInformation, _elGetter: $.ASN1Encoder<MMTelInformation>): _Element {
    const _components: _Element[] = [];
    if (value.listOfSupplServices !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<SupplService>(() => _encode_SupplService, $.BER), $.BER)(value.listOfSupplServices, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MMTelInformation(value, elGetter);
}


/* eslint-enable */
