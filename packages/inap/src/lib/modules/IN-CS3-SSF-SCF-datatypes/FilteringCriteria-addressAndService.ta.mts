/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../IN-CS3-SSF-SCF-datatypes/ServiceKey.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";


/**
 * @summary FilteringCriteria_addressAndService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteringCriteria-addressAndService ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class FilteringCriteria_addressAndService {
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
     * @summary `callingAddressValue`.
     * @public
     * @readonly
     */
    readonly callingAddressValue: OPTIONAL<Digits>;
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
        calledAddressValue: Digits,
        serviceKey: ServiceKey,
        callingAddressValue: OPTIONAL<Digits>,
        locationNumber: OPTIONAL<LocationNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.calledAddressValue = calledAddressValue;
        this.serviceKey = serviceKey;
        this.callingAddressValue = callingAddressValue;
        this.locationNumber = locationNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FilteringCriteria_addressAndService
     * @description
     * 
     * This takes an `object` and converts it to a `FilteringCriteria_addressAndService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FilteringCriteria_addressAndService`.
     * @returns {FilteringCriteria_addressAndService}
     */
    public static _from_object (_o: { [_K in keyof (FilteringCriteria_addressAndService)]: (FilteringCriteria_addressAndService)[_K] }): FilteringCriteria_addressAndService {
        return new FilteringCriteria_addressAndService(_o.calledAddressValue, _o.serviceKey, _o.callingAddressValue, _o.locationNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FilteringCriteria_addressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FilteringCriteria_addressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("calledAddressValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingAddressValue", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FilteringCriteria_addressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FilteringCriteria_addressAndService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FilteringCriteria_addressAndService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FilteringCriteria_addressAndService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FilteringCriteria_addressAndService: $.ASN1Decoder<FilteringCriteria_addressAndService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteringCriteria_addressAndService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteringCriteria_addressAndService (el: _Element): FilteringCriteria_addressAndService {
    if (!_cached_decoder_for_FilteringCriteria_addressAndService) { _cached_decoder_for_FilteringCriteria_addressAndService = function (el: _Element): FilteringCriteria_addressAndService {
    let calledAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    let callingAddressValue: OPTIONAL<Digits>;
    let locationNumber: OPTIONAL<LocationNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "calledAddressValue": (_el: _Element): void => { calledAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "callingAddressValue": (_el: _Element): void => { callingAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FilteringCriteria_addressAndService,
        _extension_additions_list_spec_for_FilteringCriteria_addressAndService,
        _root_component_type_list_2_spec_for_FilteringCriteria_addressAndService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FilteringCriteria_addressAndService(
        calledAddressValue,
        serviceKey,
        callingAddressValue,
        locationNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FilteringCriteria_addressAndService(el);
}

let _cached_encoder_for_FilteringCriteria_addressAndService: $.ASN1Encoder<FilteringCriteria_addressAndService> | null = null;

/**
 * @summary Encodes a(n) FilteringCriteria_addressAndService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteringCriteria_addressAndService, encoded as an ASN.1 Element.
 */
export
function _encode_FilteringCriteria_addressAndService (value: FilteringCriteria_addressAndService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteringCriteria_addressAndService) { _cached_encoder_for_FilteringCriteria_addressAndService = function (value: FilteringCriteria_addressAndService, elGetter: $.ASN1Encoder<FilteringCriteria_addressAndService>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.calledAddressValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER);
    if (value.callingAddressValue !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Digits, $.BER)(value.callingAddressValue, $.BER);
    }
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FilteringCriteria_addressAndService(value, elGetter);
}


/* eslint-enable */
