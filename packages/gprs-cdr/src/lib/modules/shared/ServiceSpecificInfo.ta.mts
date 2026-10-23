/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceSpecificInfo ::= SEQUENCE {
 *    serviceSpecificData   [0] IMPLICIT GraphicString OPTIONAL,
 *    serviceSpecificType   [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ServiceSpecificInfo {
    /**
     * @summary `serviceSpecificData`.
     * @public
     * @readonly
     */
    readonly serviceSpecificData: OPTIONAL<GraphicString>;
    /**
     * @summary `serviceSpecificType`.
     * @public
     * @readonly
     */
    readonly serviceSpecificType: OPTIONAL<INTEGER>;

    constructor (
        serviceSpecificData: OPTIONAL<GraphicString>,
        serviceSpecificType: OPTIONAL<INTEGER>
    ) {
        this.serviceSpecificData = serviceSpecificData;
        this.serviceSpecificType = serviceSpecificType;
    }

    /**
     * @summary Restructures an object into a ServiceSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceSpecificInfo`.
     * @returns {ServiceSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (ServiceSpecificInfo)]: (ServiceSpecificInfo)[_K] }): ServiceSpecificInfo {
        return new ServiceSpecificInfo(_o.serviceSpecificData, _o.serviceSpecificType);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceSpecificData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceSpecificType", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServiceSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceSpecificInfo: $.ASN1Decoder<ServiceSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceSpecificInfo (el: _Element): ServiceSpecificInfo {
    if (!_cached_decoder_for_ServiceSpecificInfo) { _cached_decoder_for_ServiceSpecificInfo = function (el: _Element): ServiceSpecificInfo {
    let serviceSpecificData: OPTIONAL<GraphicString>;
    let serviceSpecificType: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "serviceSpecificData": (_el: _Element): void => { serviceSpecificData = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "serviceSpecificType": (_el: _Element): void => { serviceSpecificType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceSpecificInfo,
        _extension_additions_list_spec_for_ServiceSpecificInfo,
        _root_component_type_list_2_spec_for_ServiceSpecificInfo,
        undefined,
    );
    return new ServiceSpecificInfo(
        serviceSpecificData,
        serviceSpecificType
    );
}; }
    return _cached_decoder_for_ServiceSpecificInfo(el);
}

let _cached_encoder_for_ServiceSpecificInfo: $.ASN1Encoder<ServiceSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) ServiceSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceSpecificInfo (value: ServiceSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceSpecificInfo) { _cached_encoder_for_ServiceSpecificInfo = function (value: ServiceSpecificInfo, _elGetter: $.ASN1Encoder<ServiceSpecificInfo>): _Element {
    const _components: _Element[] = [];
    if (value.serviceSpecificData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.serviceSpecificData, $.BER));
    }
    if (value.serviceSpecificType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.serviceSpecificType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceSpecificInfo(value, elGetter);
}


/* eslint-enable */
