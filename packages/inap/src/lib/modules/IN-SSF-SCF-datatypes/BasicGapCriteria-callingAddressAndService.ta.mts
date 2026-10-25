/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
import { type ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-SSF-SCF-datatypes/LocationNumber.ta.mjs";


/**
 * @summary BasicGapCriteria_callingAddressAndService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicGapCriteria-callingAddressAndService ::=
 * SEQUENCE {
 *   callingAddressValue [0] Digits,
 *   serviceKey [1] ServiceKey,
 *   locationNumber [2] LocationNumber OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class BasicGapCriteria_callingAddressAndService {
    /**
     * @summary `callingAddressValue`.
     * @public
     * @readonly
     */
    readonly callingAddressValue: Digits;
    /**
     * @summary `serviceKey`.
     * @public
     * @readonly
     */
    readonly serviceKey: ServiceKey;
    /**
     * @summary `locationNumber`.
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<LocationNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        callingAddressValue: Digits,
        serviceKey: ServiceKey,
        locationNumber?: OPTIONAL<LocationNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.callingAddressValue = callingAddressValue;
        this.serviceKey = serviceKey;
        this.locationNumber = locationNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a BasicGapCriteria_callingAddressAndService
     * @description
     * 
     * This takes an `object` and converts it to a `BasicGapCriteria_callingAddressAndService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicGapCriteria_callingAddressAndService`.
     * @returns {BasicGapCriteria_callingAddressAndService}
     */
    public static _from_object (_o: { [_K in keyof (BasicGapCriteria_callingAddressAndService)]: (BasicGapCriteria_callingAddressAndService)[_K] }): BasicGapCriteria_callingAddressAndService {
        return new BasicGapCriteria_callingAddressAndService(_o.callingAddressValue, _o.serviceKey, _o.locationNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of BasicGapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("callingAddressValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BasicGapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BasicGapCriteria_callingAddressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BasicGapCriteria_callingAddressAndService: $.ASN1Decoder<BasicGapCriteria_callingAddressAndService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicGapCriteria_callingAddressAndService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicGapCriteria_callingAddressAndService (el: _Element): BasicGapCriteria_callingAddressAndService {
    if (!_cached_decoder_for_BasicGapCriteria_callingAddressAndService) { _cached_decoder_for_BasicGapCriteria_callingAddressAndService = function (el: _Element): BasicGapCriteria_callingAddressAndService {
    let callingAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    let locationNumber: OPTIONAL<LocationNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callingAddressValue": (_el: _Element): void => { callingAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicGapCriteria_callingAddressAndService,
        _extension_additions_list_spec_for_BasicGapCriteria_callingAddressAndService,
        _root_component_type_list_2_spec_for_BasicGapCriteria_callingAddressAndService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BasicGapCriteria_callingAddressAndService(
        callingAddressValue,
        serviceKey,
        locationNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_BasicGapCriteria_callingAddressAndService(el);
}

let _cached_encoder_for_BasicGapCriteria_callingAddressAndService: $.ASN1Encoder<BasicGapCriteria_callingAddressAndService> | null = null;

/**
 * @summary Encodes a(n) BasicGapCriteria_callingAddressAndService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicGapCriteria_callingAddressAndService, encoded as an ASN.1 Element.
 */
export
function _encode_BasicGapCriteria_callingAddressAndService (value: BasicGapCriteria_callingAddressAndService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria_callingAddressAndService) { _cached_encoder_for_BasicGapCriteria_callingAddressAndService = function (value: BasicGapCriteria_callingAddressAndService, elGetter: $.ASN1Encoder<BasicGapCriteria_callingAddressAndService>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.callingAddressValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BasicGapCriteria_callingAddressAndService(value, elGetter);
}


/* eslint-enable */
