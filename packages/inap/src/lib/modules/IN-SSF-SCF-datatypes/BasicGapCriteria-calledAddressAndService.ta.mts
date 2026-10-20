/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";


/**
 * @summary BasicGapCriteria_calledAddressAndService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicGapCriteria-calledAddressAndService ::=
 * SEQUENCE {
 *   calledAddressValue [0] Digits,
 *   serviceKey [1] ServiceKey,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class BasicGapCriteria_calledAddressAndService {
    /**
     * @summary `calledAddressValue`.
     * @public
     * @readonly
     */
    readonly calledAddressValue: Digits;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: ServiceKey;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        calledAddressValue: Digits,
        serviceKey: ServiceKey,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.calledAddressValue = calledAddressValue;
        this.serviceKey = serviceKey;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a BasicGapCriteria_calledAddressAndService
     * @description
     * 
     * This takes an `object` and converts it to a `BasicGapCriteria_calledAddressAndService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicGapCriteria_calledAddressAndService`.
     * @returns {BasicGapCriteria_calledAddressAndService}
     */
    public static _from_object (_o: { [_K in keyof (BasicGapCriteria_calledAddressAndService)]: (BasicGapCriteria_calledAddressAndService)[_K] }): BasicGapCriteria_calledAddressAndService {
        return new BasicGapCriteria_calledAddressAndService(_o.calledAddressValue, _o.serviceKey, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of BasicGapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("calledAddressValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BasicGapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BasicGapCriteria_calledAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BasicGapCriteria_calledAddressAndService: $.ASN1Decoder<BasicGapCriteria_calledAddressAndService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicGapCriteria_calledAddressAndService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicGapCriteria_calledAddressAndService (el: _Element): BasicGapCriteria_calledAddressAndService {
    if (!_cached_decoder_for_BasicGapCriteria_calledAddressAndService) { _cached_decoder_for_BasicGapCriteria_calledAddressAndService = function (el: _Element): BasicGapCriteria_calledAddressAndService {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BasicGapCriteria-calledAddressAndService contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "calledAddressValue";
    sequence[1].name = "serviceKey";
    let calledAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    calledAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(sequence[0]);
    serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(sequence[1]);
    return new BasicGapCriteria_calledAddressAndService(
        calledAddressValue,
        serviceKey,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_BasicGapCriteria_calledAddressAndService(el);
}

let _cached_encoder_for_BasicGapCriteria_calledAddressAndService: $.ASN1Encoder<BasicGapCriteria_calledAddressAndService> | null = null;

/**
 * @summary Encodes a(n) BasicGapCriteria_calledAddressAndService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicGapCriteria_calledAddressAndService, encoded as an ASN.1 Element.
 */
export
function _encode_BasicGapCriteria_calledAddressAndService (value: BasicGapCriteria_calledAddressAndService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria_calledAddressAndService) { _cached_encoder_for_BasicGapCriteria_calledAddressAndService = function (value: BasicGapCriteria_calledAddressAndService, elGetter: $.ASN1Encoder<BasicGapCriteria_calledAddressAndService>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.calledAddressValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BasicGapCriteria_calledAddressAndService(value, elGetter);
}


/* eslint-enable */
