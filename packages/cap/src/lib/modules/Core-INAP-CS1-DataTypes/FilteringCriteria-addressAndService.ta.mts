/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";


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
    constructor (
        /**
         * @summary `calledAddressValue`.
         * @public
         * @readonly
         */
        readonly calledAddressValue: Digits,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `callingAddressValue`.
         * @public
         * @readonly
         */
        readonly callingAddressValue: OPTIONAL<Digits>,
        /**
         * @summary `locationNumber`.
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>
    ) {}

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
        return new FilteringCriteria_addressAndService(_o.calledAddressValue, _o.serviceKey, _o.callingAddressValue, _o.locationNumber);
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
    new $.ComponentSpec("calledAddressValue", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("callingAddressValue", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
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
        undefined,
    );
    return new FilteringCriteria_addressAndService(
        calledAddressValue,
        serviceKey,
        callingAddressValue,
        locationNumber
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.calledAddressValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.callingAddressValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Digits, $.BER)(value.callingAddressValue, $.BER)),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FilteringCriteria_addressAndService(value, elGetter);
}


/* eslint-enable */
