/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceResult
 * @description
 *
 * Result inside `MonitoringEventConfigStatus`. TS 32.278
 * requires a specific value when handling of the requested
 * Monitoring Event action fails. It does not define `vendorId`
 * or `serviceResultCode`. Clause 6.3.2.1 defers the formal
 * parameter definition to TS 32.298.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 6.3.1.2 and 6.3.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceResult ::= SEQUENCE {
 *    vendorId            [0] IMPLICIT INTEGER OPTIONAL,
 *    serviceResultCode   [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ServiceResult {
    /**
     * @summary `vendorId`.
     * @description
     *
     * Not defined in TS 32.278 V19.0.0. Formal parameter
     * definitions are deferred to TS 32.298.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly vendorId: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceResultCode`.
     * @description
     *
     * Not defined in TS 32.278 V19.0.0. A failed configuration
     * request uses a specific value for the error; this
     * specification does not say which integer that is.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.3.1.2 and 6.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly serviceResultCode: OPTIONAL<INTEGER>;

    constructor (
        vendorId: OPTIONAL<INTEGER>,
        serviceResultCode: OPTIONAL<INTEGER>
    ) {
        this.vendorId = vendorId;
        this.serviceResultCode = serviceResultCode;
    }

    /**
     * @summary Restructures an object into a ServiceResult
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceResult`.
     * @returns {ServiceResult}
     */
    public static _from_object (_o: { [_K in keyof (ServiceResult)]: (ServiceResult)[_K] }): ServiceResult {
        return new ServiceResult(_o.vendorId, _o.serviceResultCode);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceResult: $.ComponentSpec[] = [
    new $.ComponentSpec("vendorId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceResultCode", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceResult: $.ASN1Decoder<ServiceResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceResult (el: _Element): ServiceResult {
    if (!_cached_decoder_for_ServiceResult) { _cached_decoder_for_ServiceResult = function (el: _Element): ServiceResult {
    let vendorId: OPTIONAL<INTEGER>;
    let serviceResultCode: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "vendorId": (_el: _Element): void => { vendorId = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceResultCode": (_el: _Element): void => { serviceResultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceResult,
        _extension_additions_list_spec_for_ServiceResult,
        _root_component_type_list_2_spec_for_ServiceResult,
        undefined,
    );
    return new ServiceResult(
        vendorId,
        serviceResultCode
    );
}; }
    return _cached_decoder_for_ServiceResult(el);
}

let _cached_encoder_for_ServiceResult: $.ASN1Encoder<ServiceResult> | null = null;

/**
 * @summary Encodes a(n) ServiceResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceResult, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceResult (value: ServiceResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceResult) { _cached_encoder_for_ServiceResult = function (value: ServiceResult, _elGetter: $.ASN1Encoder<ServiceResult>): _Element {
    const _components: _Element[] = [];
    if (value.vendorId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.vendorId, $.BER));
    }
    if (value.serviceResultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.serviceResultCode, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceResult(value, elGetter);
}


/* eslint-enable */
