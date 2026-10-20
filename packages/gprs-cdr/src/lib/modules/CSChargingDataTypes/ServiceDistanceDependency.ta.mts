/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceDistanceDependency
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceDistanceDependency ::= SEQUENCE {
 *    aocService     [0] IMPLICIT INTEGER,
 *    chargingZone   [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ServiceDistanceDependency {
    /**
     * @summary `aocService`.
     * @public
     * @readonly
     */
    readonly aocService: INTEGER;
    /**
     * @summary `chargingZone`.
     * @public
     * @readonly
     */
    readonly chargingZone: OPTIONAL<INTEGER>;

    constructor (
        aocService: INTEGER,
        chargingZone: OPTIONAL<INTEGER>
    ) {
        this.aocService = aocService;
        this.chargingZone = chargingZone;
    }

    /**
     * @summary Restructures an object into a ServiceDistanceDependency
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceDistanceDependency`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceDistanceDependency`.
     * @returns {ServiceDistanceDependency}
     */
    public static _from_object (_o: { [_K in keyof (ServiceDistanceDependency)]: (ServiceDistanceDependency)[_K] }): ServiceDistanceDependency {
        return new ServiceDistanceDependency(_o.aocService, _o.chargingZone);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceDistanceDependency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceDistanceDependency: $.ComponentSpec[] = [
    new $.ComponentSpec("aocService", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargingZone", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServiceDistanceDependency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceDistanceDependency: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceDistanceDependency
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceDistanceDependency: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceDistanceDependency: $.ASN1Decoder<ServiceDistanceDependency> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceDistanceDependency
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceDistanceDependency (el: _Element): ServiceDistanceDependency {
    if (!_cached_decoder_for_ServiceDistanceDependency) { _cached_decoder_for_ServiceDistanceDependency = function (el: _Element): ServiceDistanceDependency {
    let aocService!: INTEGER;
    let chargingZone: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "aocService": (_el: _Element): void => { aocService = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "chargingZone": (_el: _Element): void => { chargingZone = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceDistanceDependency,
        _extension_additions_list_spec_for_ServiceDistanceDependency,
        _root_component_type_list_2_spec_for_ServiceDistanceDependency,
        undefined,
    );
    return new ServiceDistanceDependency(
        aocService,
        chargingZone
    );
}; }
    return _cached_decoder_for_ServiceDistanceDependency(el);
}

let _cached_encoder_for_ServiceDistanceDependency: $.ASN1Encoder<ServiceDistanceDependency> | null = null;

/**
 * @summary Encodes a(n) ServiceDistanceDependency into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceDistanceDependency, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceDistanceDependency (value: ServiceDistanceDependency, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceDistanceDependency) { _cached_encoder_for_ServiceDistanceDependency = function (value: ServiceDistanceDependency, elGetter: $.ASN1Encoder<ServiceDistanceDependency>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.aocService, $.BER));
    if (value.chargingZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.chargingZone, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceDistanceDependency(value, elGetter);
}


/* eslint-enable */
